'use strict';
const express = require('express');
const db = require('../db');
const { normalizePhone, findOrCreateMemberByPhone, createSession, destroySession, requireAuth } = require('../auth');

const router = express.Router();

function publicMember(m) {
  return {
    id: m.id, phone: m.phone, username: m.username, avatar: m.avatar,
    firstName: m.first_name, lastName: m.last_name,
    relationship: m.relationship, ageRange: m.age_range, lifeStage: m.life_stage,
    topics: m.topics, otherTopic: m.other_topic, onboarded: m.onboarded, isModerator: m.is_moderator
  };
}

// Step 1: for the demo, any properly-formatted phone number can sign in —
// a member is created automatically on verify if it's not one already.
router.post('/start', async (req, res) => {
  const phone = normalizePhone(req.body.phone);
  if (phone.length !== 8) return res.status(400).json({ error: 'Enter a valid eight-digit Singapore phone number.' });
  return res.json({ ok: true });
});

// Step 2: any complete 6-digit code is accepted (no real OTP for the demo).
router.post('/verify', async (req, res) => {
  const phone = normalizePhone(req.body.phone);
  const otp = String(req.body.otp || '');
  if (!/^\d{6}$/.test(otp)) return res.status(400).json({ error: 'Enter all six digits to continue.' });
  if (phone.length !== 8) return res.status(400).json({ error: 'Enter a valid eight-digit Singapore phone number.' });
  const member = await findOrCreateMemberByPhone(phone);
  await createSession(member.id, res);
  await db.query('UPDATE members SET last_seen_at = now() WHERE id = $1', [member.id]);
  res.json({ member: publicMember(member) });
});

router.post('/logout', async (req, res) => {
  await destroySession(req, res);
  res.json({ ok: true });
});

router.get('/me', requireAuth, (req, res) => res.json({ member: publicMember(req.member) }));

router.patch('/me', requireAuth, async (req, res) => {
  const allowed = ['username', 'avatar', 'firstName', 'lastName', 'relationship', 'ageRange', 'lifeStage', 'topics', 'otherTopic', 'onboarded'];
  const columns = { username: 'username', avatar: 'avatar', firstName: 'first_name', lastName: 'last_name', relationship: 'relationship', ageRange: 'age_range', lifeStage: 'life_stage', topics: 'topics', otherTopic: 'other_topic', onboarded: 'onboarded' };
  const sets = [];
  const values = [];
  let i = 1;
  for (const key of allowed) {
    if (!(key in req.body)) continue;
    const value = key === 'topics' ? JSON.stringify(req.body[key]) : req.body[key];
    sets.push(`${columns[key]} = $${i++}`);
    values.push(value);
  }
  if (!sets.length) return res.status(400).json({ error: 'Nothing to update' });
  values.push(req.member.id);
  await db.query(`UPDATE members SET ${sets.join(', ')} WHERE id = $${i}`, values);
  const { rows } = await db.query('SELECT * FROM members WHERE id = $1', [req.member.id]);
  res.json({ member: publicMember(rows[0]) });
});

module.exports = router;
