'use strict';
const express = require('express');
const db = require('../db');
const {
  normalizePhone, findOrCreateMemberByPhone, createSession, destroySession, requireAuth,
  wrap, issueOtp, consumeOtp, validateUsername, isValidAvatar, DEMO_MODE
} = require('../auth');
const { rateLimit } = require('../rateLimit');

const router = express.Router();

function publicMember(m) {
  return {
    id: m.id, phone: m.phone, username: m.username, avatar: m.avatar,
    firstName: m.first_name, lastName: m.last_name,
    relationship: m.relationship, ageRange: m.age_range, lifeStage: m.life_stage,
    topics: m.topics, otherTopic: m.other_topic, onboarded: m.onboarded, isModerator: m.is_moderator,
    shareWhatsapp: m.share_whatsapp
  };
}

const byIp = req => req.ip;
const byPhoneBody = req => normalizePhone(req.body.phone) || 'invalid';

// Generous per-IP limits (a venue's WiFi shares one public IP), strict
// per-phone limits (this is what actually stops enumeration/spam).
const startIpLimit = rateLimit('auth-start-ip', { max: 30, windowMs: 10 * 60 * 1000, key: byIp });
const startPhoneLimit = rateLimit('auth-start-phone', { max: 3, windowMs: 10 * 60 * 1000, key: byPhoneBody });
const verifyIpLimit = rateLimit('auth-verify-ip', { max: 60, windowMs: 10 * 60 * 1000, key: byIp });
const memberLookupLimit = rateLimit('member-lookup', { max: 100, windowMs: 10 * 60 * 1000, key: req => req.member.id });

// Step 1: send (in DEMO_MODE, hand back) a one-time code for this phone.
router.post('/start', startIpLimit, startPhoneLimit, wrap(async (req, res) => {
  const phone = normalizePhone(req.body.phone);
  if (phone.length !== 8) return res.status(400).json({ error: 'Enter a valid eight-digit Singapore phone number.' });
  const code = await issueOtp(phone);
  res.json({ ok: true, demoCode: DEMO_MODE ? code : undefined });
}));

// Step 2: verify the code issued above. Creates the member on first login.
router.post('/verify', verifyIpLimit, wrap(async (req, res) => {
  const phone = normalizePhone(req.body.phone);
  const otp = String(req.body.otp || '');
  if (!/^\d{6}$/.test(otp)) return res.status(400).json({ error: 'Enter all six digits to continue.' });
  if (phone.length !== 8) return res.status(400).json({ error: 'Enter a valid eight-digit Singapore phone number.' });
  await consumeOtp(phone, otp);
  const member = await findOrCreateMemberByPhone(phone);
  await createSession(member.id, res);
  await db.query('UPDATE members SET last_seen_at = now() WHERE id = $1', [member.id]);
  res.json({ member: publicMember(member) });
}));

router.post('/logout', wrap(async (req, res) => {
  await destroySession(req, res);
  res.json({ ok: true });
}));

router.get('/me', requireAuth, (req, res) => res.json({ member: publicMember(req.member) }));

const STRING_FIELD_LIMITS = { firstName: 50, lastName: 50, relationship: 60, ageRange: 60, lifeStage: 60, otherTopic: 100 };

router.patch('/me', requireAuth, wrap(async (req, res) => {
  const columns = { username: 'username', avatar: 'avatar', firstName: 'first_name', lastName: 'last_name', relationship: 'relationship', ageRange: 'age_range', lifeStage: 'life_stage', topics: 'topics', otherTopic: 'other_topic', onboarded: 'onboarded', shareWhatsapp: 'share_whatsapp' };
  const sets = [];
  const values = [];
  let i = 1;

  if ('username' in req.body) {
    const clean = await validateUsername(req.body.username, req.member.id);
    sets.push(`username = $${i++}`); values.push(clean);
  }
  if ('avatar' in req.body) {
    if (!isValidAvatar(req.body.avatar)) return res.status(400).json({ error: 'Invalid avatar.' });
    sets.push(`avatar = $${i++}`); values.push(req.body.avatar);
  }
  for (const key of Object.keys(STRING_FIELD_LIMITS)) {
    if (!(key in req.body)) continue;
    const value = req.body[key];
    if (typeof value !== 'string' || value.length > STRING_FIELD_LIMITS[key]) {
      return res.status(400).json({ error: `Invalid ${key}.` });
    }
    sets.push(`${columns[key]} = $${i++}`); values.push(value);
  }
  if ('topics' in req.body) {
    const value = req.body.topics;
    if (!Array.isArray(value) || value.length > 20 || !value.every(t => typeof t === 'string')) {
      return res.status(400).json({ error: 'Invalid topics.' });
    }
    sets.push(`topics = $${i++}`); values.push(JSON.stringify(value));
  }
  for (const key of ['onboarded', 'shareWhatsapp']) {
    if (!(key in req.body)) continue;
    if (typeof req.body[key] !== 'boolean') return res.status(400).json({ error: `Invalid ${key}.` });
    sets.push(`${columns[key]} = $${i++}`); values.push(req.body[key]);
  }

  if (!sets.length) return res.status(400).json({ error: 'Nothing to update' });
  values.push(req.member.id);
  try {
    await db.query(`UPDATE members SET ${sets.join(', ')} WHERE id = $${i}`, values);
  } catch (err) {
    if (err && err.code === '23505') return res.status(409).json({ error: 'That username is already taken.' });
    throw err;
  }
  const { rows } = await db.query('SELECT * FROM members WHERE id = $1', [req.member.id]);
  res.json({ member: publicMember(rows[0]) });
}));

// Router is a function — attach the extras api.js needs as properties on it
// so index.js's `app.use('/api/auth', require('./routes/auth'))` still works.
module.exports = Object.assign(router, { publicMember, memberLookupLimit });
