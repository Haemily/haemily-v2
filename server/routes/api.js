'use strict';
const express = require('express');
const crypto = require('crypto');
const db = require('../db');
const { requireAuth, wrap } = require('../auth');
const { memberLookupLimit } = require('./auth');

const router = express.Router();
router.use(requireAuth);

// Mirrors the design's fixed "now" (app.js EVENT_NOW) so event statuses look
// right on demo day regardless of what the real date is.
const EVENT_NOW = new Date('2026-09-24T12:00:00+08:00').getTime();

function slugify(title) {
  const base = String(title).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 40) || 'post';
  return `${base}-${crypto.randomBytes(3).toString('hex')}`;
}

function initialsFrom(name) {
  return String(name).trim().split(/\s+/).map(p => p[0]).join('').slice(0, 2).toUpperCase() || 'ME';
}

function ageLabel(createdAt) {
  const minutes = Math.max(0, Math.round((Date.now() - new Date(createdAt).getTime()) / 60000));
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h`;
  return `${Math.round(hours / 24)}d`;
}

// ---------- Posts ----------

// Shapes a `posts` row (+ joined reactions/comments/author counts) into the
// object the client expects. `authorUsername`/`isMine` let the client show a
// "Me" badge or a link to the member's profile without any DOM text-matching.
function mapPostRow(row) {
  return {
    id: row.id, author: row.author, initials: row.initials, org: row.org,
    verified: row.verified, format: row.format, title: row.title, excerpt: row.excerpt,
    body: row.body || '', topics: row.topics, stages: row.stages, image: row.image,
    helpful: row.helpful, reactions: row.reactions, comments: row.comments,
    date: row.date_label || ageLabel(row.created_at),
    authorUsername: row.author_username || null, isMine: !!row.is_mine
  };
}

async function postsForMember(memberId) {
  const { rows } = await db.query(`
    SELECT p.*,
      m.username AS author_username,
      (p.member_id = $1) AS is_mine,
      (p.base_reactions + COALESCE(r.cnt, 0))::int AS reactions,
      (p.base_comments + COALESCE(c.cnt, 0))::int AS comments
    FROM posts p
    LEFT JOIN members m ON m.id = p.member_id
    LEFT JOIN (SELECT post_id, count(*) cnt FROM reactions WHERE kind = 'helpful' GROUP BY post_id) r ON r.post_id = p.id
    LEFT JOIN (SELECT target_id, count(*) cnt FROM comments WHERE target_type = 'post' GROUP BY target_id) c ON c.target_id = p.id
    ORDER BY p.created_at DESC
  `, [memberId]);
  return rows.map(mapPostRow);
}

router.post('/posts', async (req, res) => {
  const { title, excerpt, body, topics = [], stages = [] } = req.body;
  if (!title || !String(title).trim()) return res.status(400).json({ error: 'Title is required' });
  const id = slugify(title);
  const member = req.member;
  await db.query(
    `INSERT INTO posts (id, member_id, author, initials, org, verified, format, title, excerpt, body, topics, stages, base_reactions, base_comments)
     VALUES ($1,$2,$3,$4,false,NULL,'Discussion',$5,$6,$7,$8,$9,0,0)`,
    [id, member.id, member.username, initialsFrom(member.username), title.trim(), (excerpt || body || '').slice(0, 240), body || '', JSON.stringify(topics), JSON.stringify(stages)]
  );
  res.status(201).json({ id });
});

router.post('/posts/:id/reactions/:kind', async (req, res) => {
  const kind = req.params.kind === 'helpful' ? 'helpful' : 'helpful';
  await db.query('INSERT INTO reactions (member_id, post_id, kind) VALUES ($1,$2,$3) ON CONFLICT DO NOTHING', [req.member.id, req.params.id, kind]);
  res.json({ ok: true });
});
router.delete('/posts/:id/reactions/:kind', async (req, res) => {
  await db.query('DELETE FROM reactions WHERE member_id=$1 AND post_id=$2 AND kind=$3', [req.member.id, req.params.id, 'helpful']);
  res.json({ ok: true });
});

// ---------- Comments ----------

function shapeComments(rows) {
  const byId = new Map();
  rows.forEach(r => {
    byId.set(r.id, {
      id: r.id, parent_id: r.parent_id, author: r.author, avatar: r.avatar,
      role_label: r.role_label, text: r.text, context: r.context,
      authorUsername: r.author_username || null, isMine: !!r.is_mine,
      likes: r.base_likes + r._like_count, liked: r._liked,
      ageLabel: ageLabel(r.created_at), createdAt: r.created_at, replies: []
    });
  });
  const top = [];
  for (const row of byId.values()) {
    if (row.parent_id && byId.has(row.parent_id)) byId.get(row.parent_id).replies.push(row);
    else top.push(row);
    delete row.parent_id;
  }
  return top;
}

router.get('/comments', async (req, res) => {
  const [targetType, targetId] = String(req.query.target || '').split(':');
  if (!targetType || !targetId) return res.status(400).json({ error: 'target=type:id is required' });
  const { rows } = await db.query(`
    SELECT c.*,
      m.username AS author_username,
      (c.member_id = $3) AS is_mine,
      COALESCE(l.cnt, 0)::int AS _like_count,
      EXISTS(SELECT 1 FROM comment_likes WHERE comment_id = c.id AND member_id = $3) AS _liked
    FROM comments c
    LEFT JOIN members m ON m.id = c.member_id
    LEFT JOIN (SELECT comment_id, count(*) cnt FROM comment_likes GROUP BY comment_id) l ON l.comment_id = c.id
    WHERE c.target_type = $1 AND c.target_id = $2
    ORDER BY c.created_at ASC
  `, [targetType, targetId, req.member.id]);
  // If this is a post thread, tag the author's own comments as "Original author".
  let postAuthor = null;
  if (targetType === 'post') {
    const { rows: p } = await db.query('SELECT author FROM posts WHERE id = $1', [targetId]);
    postAuthor = p[0]?.author || null;
  }
  rows.forEach(r => { if (!r.role_label && postAuthor && r.author === postAuthor) r.role_label = 'Original author'; });
  res.json({ comments: shapeComments(rows) });
});

router.post('/comments', async (req, res) => {
  const { targetType, targetId, parentId, text, context } = req.body;
  if (!['post', 'event', 'resource'].includes(targetType)) return res.status(400).json({ error: 'Invalid targetType' });
  if (!text || !String(text).trim()) return res.status(400).json({ error: 'Write a comment first' });
  let effectiveParent = null;
  if (parentId) {
    const { rows } = await db.query('SELECT id, parent_id FROM comments WHERE id = $1', [parentId]);
    if (rows[0]) effectiveParent = rows[0].parent_id || rows[0].id; // flatten to one level, like the UI shows
  }
  const id = crypto.randomUUID();
  const member = req.member;
  await db.query(
    `INSERT INTO comments (id, target_type, target_id, parent_id, member_id, author, avatar, text, context, base_likes)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,0)`,
    [id, targetType, targetId, effectiveParent, member.id, member.username, member.avatar, String(text).trim(), context || null]
  );
  res.status(201).json({ id });
});

router.post('/comments/:id/like', async (req, res) => {
  await db.query('INSERT INTO comment_likes (member_id, comment_id) VALUES ($1,$2) ON CONFLICT DO NOTHING', [req.member.id, req.params.id]);
  res.json({ ok: true });
});
router.delete('/comments/:id/like', async (req, res) => {
  await db.query('DELETE FROM comment_likes WHERE member_id=$1 AND comment_id=$2', [req.member.id, req.params.id]);
  res.json({ ok: true });
});

// ---------- Saves ----------

router.post('/saves/:type/:id', async (req, res) => {
  if (!['post', 'resource'].includes(req.params.type)) return res.status(400).json({ error: 'Invalid type' });
  await db.query('INSERT INTO saves (member_id, item_type, item_id) VALUES ($1,$2,$3) ON CONFLICT DO NOTHING', [req.member.id, req.params.type, req.params.id]);
  res.json({ ok: true });
});
router.delete('/saves/:type/:id', async (req, res) => {
  await db.query('DELETE FROM saves WHERE member_id=$1 AND item_type=$2 AND item_id=$3', [req.member.id, req.params.type, req.params.id]);
  res.json({ ok: true });
});

// ---------- Resources ----------

async function resourcesForMember(memberId) {
  const { rows } = await db.query(`
    SELECT r.id, r.data,
      (r.base_likes + COALESCE(l.cnt, 0))::int AS likes,
      EXISTS(SELECT 1 FROM resource_likes WHERE resource_id = r.id AND member_id = $1) AS liked
    FROM resources r
    LEFT JOIN (SELECT resource_id, count(*) cnt FROM resource_likes GROUP BY resource_id) l ON l.resource_id = r.id
  `, [memberId]);
  return rows.map(row => ({ ...row.data, likes: row.likes, liked: row.liked }));
}

router.post('/resources/:id/likes', async (req, res) => {
  await db.query('INSERT INTO resource_likes (member_id, resource_id) VALUES ($1,$2) ON CONFLICT DO NOTHING', [req.member.id, req.params.id]);
  res.json({ ok: true });
});
router.delete('/resources/:id/likes', async (req, res) => {
  await db.query('DELETE FROM resource_likes WHERE member_id=$1 AND resource_id=$2', [req.member.id, req.params.id]);
  res.json({ ok: true });
});

// ---------- Member profiles ----------

router.get('/members/:username', memberLookupLimit, wrap(async (req, res) => {
  const { rows: memberRows } = await db.query(
    'SELECT id, username, avatar, phone, share_whatsapp FROM members WHERE lower(username) = lower($1) LIMIT 1',
    [req.params.username]
  );
  const member = memberRows[0];
  if (!member) return res.status(404).json({ error: 'Member not found' });

  const [posts, commentRows] = await Promise.all([
    db.query(`
      SELECT p.*,
        m.username AS author_username,
        (p.member_id = $2) AS is_mine,
        (p.base_reactions + COALESCE(r.cnt, 0))::int AS reactions,
        (p.base_comments + COALESCE(c.cnt, 0))::int AS comments
      FROM posts p
      LEFT JOIN members m ON m.id = p.member_id
      LEFT JOIN (SELECT post_id, count(*) cnt FROM reactions WHERE kind = 'helpful' GROUP BY post_id) r ON r.post_id = p.id
      LEFT JOIN (SELECT target_id, count(*) cnt FROM comments WHERE target_type = 'post' GROUP BY target_id) c ON c.target_id = p.id
      WHERE p.member_id = $1
      ORDER BY p.created_at DESC
    `, [member.id, req.member.id]).then(r => r.rows.map(mapPostRow)),
    db.query(`
      SELECT c.id, c.text, c.created_at, p.id AS post_id, p.title AS post_title
      FROM comments c JOIN posts p ON p.id = c.target_id
      WHERE c.target_type = 'post' AND c.member_id = $1
      ORDER BY c.created_at DESC LIMIT 20
    `, [member.id]).then(r => r.rows)
  ]);
  const comments = commentRows.map(r => ({ postId: r.post_id, postTitle: r.post_title, text: r.text, ageLabel: ageLabel(r.created_at) }));

  // Phone is only ever returned for a member who has opted in to WhatsApp
  // contact (share_whatsapp) — see the "opt-in" fix in editProfileScreen.
  res.json({
    username: member.username, avatar: member.avatar,
    phone: member.share_whatsapp ? member.phone : null,
    shareWhatsapp: member.share_whatsapp,
    posts, comments
  });
}));

// ---------- Events ----------

router.put('/events/:id/registration', async (req, res) => {
  await db.query(
    `INSERT INTO event_registrations (member_id, event_id, status) VALUES ($1,$2,'registered')
     ON CONFLICT (member_id, event_id) DO UPDATE SET status = 'registered'`,
    [req.member.id, req.params.id]
  );
  res.json({ ok: true });
});
router.delete('/events/:id/registration', async (req, res) => {
  await db.query(
    `INSERT INTO event_registrations (member_id, event_id, status) VALUES ($1,$2,'cancelled')
     ON CONFLICT (member_id, event_id) DO UPDATE SET status = 'cancelled'`,
    [req.member.id, req.params.id]
  );
  res.json({ ok: true });
});

// ---------- Bootstrap ----------

router.get('/bootstrap', async (req, res) => {
  const memberId = req.member.id;
  const [posts, events, resources, saves, registrations, liked, commented, authored, myCommentRows] = await Promise.all([
    postsForMember(memberId),
    db.query('SELECT data FROM events ORDER BY (data->>\'start\') ASC').then(r => r.rows.map(row => row.data)),
    resourcesForMember(memberId),
    db.query('SELECT item_type, item_id FROM saves WHERE member_id = $1', [memberId]).then(r => r.rows),
    db.query('SELECT event_id, status, attended FROM event_registrations WHERE member_id = $1', [memberId]).then(r => r.rows),
    db.query("SELECT post_id FROM reactions WHERE member_id = $1 AND kind = 'helpful'", [memberId]).then(r => r.rows.map(x => x.post_id)),
    db.query("SELECT DISTINCT target_id FROM comments WHERE target_type = 'post' AND member_id = $1", [memberId]).then(r => r.rows.map(x => x.target_id)),
    db.query('SELECT id FROM posts WHERE member_id = $1', [memberId]).then(r => r.rows.map(x => x.id)),
    db.query(`
      SELECT c.id, c.text, c.created_at, p.id AS post_id, p.title AS post_title
      FROM comments c JOIN posts p ON p.id = c.target_id
      WHERE c.target_type = 'post' AND c.member_id = $1
      ORDER BY c.created_at DESC LIMIT 20
    `, [memberId]).then(r => r.rows)
  ]);
  const myComments = myCommentRows.map(r => ({ postId: r.post_id, postTitle: r.post_title, text: r.text, ageLabel: ageLabel(r.created_at) }));

  const registered = registrations.filter(r => r.status === 'registered').map(r => r.event_id);
  const cancelled = registrations.filter(r => r.status === 'cancelled').map(r => r.event_id);
  const attended = registrations.filter(r => {
    if (r.attended) return true;
    if (r.status !== 'registered') return false;
    const event = events.find(e => e.id === r.event_id);
    return event && new Date(event.start).getTime() < EVENT_NOW;
  }).map(r => r.event_id);

  await db.query('UPDATE members SET last_seen_at = now() WHERE id = $1', [memberId]);

  res.json({
    posts, events, resources,
    saved: saves.filter(s => s.item_type === 'post').map(s => s.item_id),
    savedResources: saves.filter(s => s.item_type === 'resource').map(s => s.item_id),
    likedResources: resources.filter(r => r.liked).map(r => r.id),
    registered, cancelled, attended, liked,
    commentedPosts: commented, authoredPosts: authored, myComments
  });
});

module.exports = router;
