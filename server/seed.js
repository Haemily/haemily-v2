// Seeds demo accounts and the design's content/events/resources into the DB.
// Run automatically on boot if the DB is empty, or explicitly with:
//   npm run reset   (wipes everything and reseeds — use before the demo)
//
// The whole thing runs inside a single transaction (see db.transaction()) so
// a failure partway through can never leave the DB half-seeded — e.g. with
// member rows but no posts/events/resources, which would make isEmpty()
// report "not empty" forever and silently skip seeding on every later boot.
'use strict';
const crypto = require('crypto');
const db = require('./db');
const { content, postImages, events, resources, seededThreadFor, resourceEngagement } = require('./seedData');

const MEMBERS = [
  { id: 'member-new', phone: '81234567', username: 'SunlitKoi', avatar: 'avatar-style-1', onboarded: false },
  { id: 'member-brightkite', phone: '91234567', username: 'BrightKite', avatar: 'avatar-style-2', relationship: 'caregiver', age_range: '7–12 years', life_stage: 'Primary school', topics: ['School and childcare', 'Travel'], onboarded: true, share_whatsapp: true },
  { id: 'member-gentlemoon', phone: '98765432', username: 'GentleMoon', avatar: 'avatar-style-3', relationship: 'caregiver', age_range: '3–6 years', life_stage: 'Preschool and kindergarten', topics: ['School and childcare'], onboarded: true, share_whatsapp: true }
];
const MEMBER_BY_NAME = { BrightKite: 'member-brightkite', GentleMoon: 'member-gentlemoon' };

async function wipe(query) {
  await query(`TRUNCATE TABLE comment_likes, comments, reactions, resource_likes, saves, event_registrations, sessions, posts, events, resources, members RESTART IDENTITY CASCADE`);
}

async function seedMembers(query) {
  for (const m of MEMBERS) {
    await query(
      `INSERT INTO members (id, phone, username, avatar, relationship, age_range, life_stage, topics, onboarded, share_whatsapp)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
       ON CONFLICT (id) DO NOTHING`,
      [m.id, m.phone, m.username, m.avatar, m.relationship || '', m.age_range || '', m.life_stage || '', JSON.stringify(m.topics || []), m.onboarded, !!m.share_whatsapp]
    );
  }
}

async function seedPosts(query) {
  for (let index = 0; index < content.length; index++) {
    const item = content[index];
    const memberId = MEMBER_BY_NAME[item.author] || null;
    const image = postImages[item.id] || null;
    // Stagger created_at so DESC ordering matches the design's original array
    // order (newest content first), even though we seed everything "now".
    const createdAt = new Date(Date.now() - index * 6 * 60 * 60 * 1000).toISOString();
    await query(
      `INSERT INTO posts (id, member_id, author, initials, org, verified, format, title, excerpt, body, topics, stages, image, helpful, base_reactions, base_comments, date_label, created_at)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,'',$10,$11,$12,$13,$14,$15,$16,$17)
       ON CONFLICT (id) DO NOTHING`,
      [item.id, memberId, item.author, item.initials, !!item.org, item.verified || null, item.format, item.title, item.excerpt,
       JSON.stringify(item.topics), JSON.stringify(item.stages), image ? JSON.stringify(image) : null, item.helpful || null,
       item.reactions, item.comments, item.date, createdAt]
    );
  }
}

async function seedEventsAndResources(query) {
  for (const event of events) {
    await query(`INSERT INTO events (id, data) VALUES ($1,$2) ON CONFLICT (id) DO NOTHING`, [event.id, JSON.stringify(event)]);
  }
  for (const resource of resources) {
    await query(
      `INSERT INTO resources (id, data, base_likes) VALUES ($1,$2,$3) ON CONFLICT (id) DO NOTHING`,
      [resource.id, JSON.stringify(resource), resourceEngagement[resource.id] || 0]
    );
  }
}

async function seedComments(query) {
  async function insertThread(targetType, targetId, thread, resolveContext) {
    for (const node of thread) {
      const parentId = crypto.randomUUID();
      const memberId = MEMBER_BY_NAME[node.author] || null;
      const createdAt = new Date(Date.now() - node.ageMinutes * 60000).toISOString();
      const context = node.context === '__firstKeyPoint__' ? resolveContext() : (node.context || null);
      await query(
        `INSERT INTO comments (id, target_type, target_id, parent_id, member_id, author, avatar, role_label, text, context, base_likes, created_at)
         VALUES ($1,$2,$3,NULL,$4,$5,$6,$7,$8,$9,$10,$11)`,
        [parentId, targetType, targetId, memberId, node.author, (node.author.match(/[A-Z]/g) || []).slice(0, 2).join(''), node.roleLabel || null, node.text, context, node.likes, createdAt]
      );
      for (const reply of node.replies || []) {
        const replyMemberId = MEMBER_BY_NAME[reply.author] || null;
        const replyCreatedAt = new Date(Date.now() - reply.ageMinutes * 60000).toISOString();
        await query(
          `INSERT INTO comments (id, target_type, target_id, parent_id, member_id, author, avatar, role_label, text, context, base_likes, created_at)
           VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,NULL,$10,$11)`,
          [crypto.randomUUID(), targetType, targetId, parentId, replyMemberId, reply.author, (reply.author.match(/[A-Z]/g) || []).slice(0, 2).join(''), reply.roleLabel || null, reply.text, reply.likes, replyCreatedAt]
        );
      }
    }
  }
  for (const item of content) {
    await insertThread('post', item.id, seededThreadFor('post', item.id));
  }
  for (const event of events) {
    await insertThread('event', event.id, seededThreadFor('event', event.id));
  }
  for (const resource of resources) {
    await insertThread('resource', resource.id, seededThreadFor('resource', resource.id), () => resource.keyPoints[0]);
  }
}

async function seedActivity(query) {
  // BrightKite's starting state, matching what the design's `state` object hardcoded.
  await query(`INSERT INTO reactions (member_id, post_id, kind) VALUES ($1,'first-trip','helpful'),($1,'after-diagnosis','helpful') ON CONFLICT DO NOTHING`, ['member-brightkite']);
  await query(`INSERT INTO saves (member_id, item_type, item_id) VALUES ($1,'post','teachers'),($1,'resource','travel-session-recording') ON CONFLICT DO NOTHING`, ['member-brightkite']);
  await query(
    `INSERT INTO event_registrations (member_id, event_id, status, attended) VALUES ($1,'school-webinar','registered',false),($1,'travel-talk','attended',true) ON CONFLICT DO NOTHING`,
    ['member-brightkite']
  );
}

async function seed({ reset = false } = {}) {
  await db.migrate();
  if (!reset && !(await db.isEmpty())) {
    console.log('Database already has data — skipping seed. Use `npm run reset` to reseed.');
    return;
  }
  await db.transaction(async (query) => {
    if (reset) await wipe(query);
    await seedMembers(query);
    await seedPosts(query);
    await seedEventsAndResources(query);
    await seedComments(query);
    await seedActivity(query);
  });
  console.log(`Seed complete (backend: ${db.getBackend()}).`);
}

if (require.main === module) {
  const reset = process.argv.includes('--reset');
  seed({ reset }).then(() => db.close()).catch(err => { console.error(err); process.exit(1); });
}

module.exports = { seed };
