'use strict';
const crypto = require('crypto');
const cookie = require('cookie');
const db = require('./db');

const COOKIE_NAME = 'haemily_sid';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days — plenty for a hackathon demo

// Demo-day OTP: a 6-digit code generated server-side, stored hashed, valid
// for 5 minutes, with a 5-attempt cap. DEMO_MODE (on by default) hands the
// code back in the /auth/start response so the client can show it as a fake
// "SMS" — nothing here proves phone ownership, but it's no longer a login
// that accepts literally any 6 digits, and it's the seam a real SMS
// provider would slot into later.
const OTP_TTL_MS = 5 * 60 * 1000;
const OTP_MAX_ATTEMPTS = 5;
const DEMO_MODE = process.env.DEMO_MODE !== 'false';

const AVATAR_STYLES = ['avatar-style-1', 'avatar-style-2', 'avatar-style-3', 'avatar-style-4', 'avatar-style-5'];

// Reserved so a member can't impersonate HSS staff or the platform itself.
const RESERVED_USERNAME_SUBSTRINGS = ['hss', 'haemily', 'admin', 'moderator', 'official', 'verified'];
const USERNAME_PATTERN = /^[A-Za-z0-9][A-Za-z0-9 _.-]{1,22}[A-Za-z0-9]$/;

function normalizePhone(raw) {
  return String(raw || '').replace(/\D/g, '').slice(-8);
}

// (err, message) -> Error carrying an HTTP status, for routes to throw and
// the shared error middleware (see index.js) to turn into a JSON response.
function httpError(status, message) {
  const err = new Error(message);
  err.status = status;
  return err;
}

// Wraps an async Express handler so a rejected promise (a thrown validation
// error, a DB error, anything) reaches next(err) instead of crashing the
// process — Express 4 does not do this automatically for async handlers.
function wrap(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}

function hashOtp(phone, code) {
  return crypto.createHash('sha256').update(`${phone}:${code}`).digest('hex');
}

// Generates a fresh code for `phone`, stores its hash (replacing any
// previous one), and returns the plaintext code so the caller can decide
// whether to expose it (DEMO_MODE) or hand it to a real SMS provider.
async function issueOtp(phone) {
  const code = String(crypto.randomInt(0, 1_000_000)).padStart(6, '0');
  const expiresAt = new Date(Date.now() + OTP_TTL_MS);
  await db.query(
    `INSERT INTO otp_codes (phone, code_hash, attempts, expires_at) VALUES ($1,$2,0,$3)
     ON CONFLICT (phone) DO UPDATE SET code_hash = $2, attempts = 0, expires_at = $3, created_at = now()`,
    [phone, hashOtp(phone, code), expiresAt]
  );
  return code;
}

// Checks `code` against the stored (hashed) code for `phone`. Throws an
// httpError on any failure (expired/missing, too many attempts, wrong code)
// so routes can just `await` this and let the error middleware respond.
async function consumeOtp(phone, code) {
  const { rows } = await db.query('SELECT * FROM otp_codes WHERE phone = $1', [phone]);
  const row = rows[0];
  if (!row || new Date(row.expires_at).getTime() < Date.now()) {
    if (row) await db.query('DELETE FROM otp_codes WHERE phone = $1', [phone]);
    throw httpError(400, 'That code has expired. Request a new one.');
  }
  if (row.attempts >= OTP_MAX_ATTEMPTS) {
    await db.query('DELETE FROM otp_codes WHERE phone = $1', [phone]);
    throw httpError(429, 'Too many incorrect attempts. Request a new code.');
  }
  const expected = Buffer.from(row.code_hash, 'hex');
  const actual = Buffer.from(hashOtp(phone, code), 'hex');
  const match = expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
  if (!match) {
    await db.query('UPDATE otp_codes SET attempts = attempts + 1 WHERE phone = $1', [phone]);
    throw httpError(400, 'That code is incorrect.');
  }
  await db.query('DELETE FROM otp_codes WHERE phone = $1', [phone]);
}

// Validates a member-chosen username: shape, reserved words, and collision
// with an existing post/comment author that isn't this member (protects
// seeded identities like "HSS Resource Team" or "CalmOtter"). Uniqueness
// against other members' own usernames is enforced by the DB's unique index
// (members_username_lower_idx) and surfaced as a 409 by the caller.
// `memberId` is the current member (or null for a not-yet-created one).
async function validateUsername(name, memberId) {
  const value = String(name ?? '').trim();
  if (!USERNAME_PATTERN.test(value)) {
    throw httpError(400, 'Username must be 3–24 characters: letters, numbers, spaces, - _ or . only.');
  }
  const lower = value.toLowerCase();
  if (RESERVED_USERNAME_SUBSTRINGS.some(word => lower.includes(word))) {
    throw httpError(400, 'That username isn’t available. Please choose another.');
  }
  const { rows } = await db.query(
    `SELECT 1 FROM posts WHERE lower(author) = $1 AND member_id IS DISTINCT FROM $2
     UNION SELECT 1 FROM comments WHERE lower(author) = $1 AND member_id IS DISTINCT FROM $2
     LIMIT 1`,
    [lower, memberId]
  );
  if (rows.length) throw httpError(400, 'That username is already taken.');
  return value;
}

function isValidAvatar(value) {
  return AVATAR_STYLES.includes(value);
}

async function findMemberByPhone(phone) {
  const { rows } = await db.query('SELECT * FROM members WHERE phone = $1', [phone]);
  return rows[0] || null;
}

// Demo day: sign-in is open to any phone number that completes the OTP step
// (see issueOtp/consumeOtp above). If it's not a known member yet, create
// one on the spot — with a placeholder username unique enough to satisfy
// the unique index (SunlitKoi + 4 random digits, retried on collision) —
// so it goes through the normal personalisation flow, same as the
// pre-seeded "new member" demo account.
async function findOrCreateMemberByPhone(phone) {
  const existing = await findMemberByPhone(phone);
  if (existing) return existing;
  for (let attempt = 0; attempt < 5; attempt++) {
    const id = crypto.randomUUID();
    const placeholder = `SunlitKoi${crypto.randomInt(1000, 10000)}`;
    try {
      await db.query(
        `INSERT INTO members (id, phone, username) VALUES ($1,$2,$3) ON CONFLICT (phone) DO NOTHING`,
        [id, phone, placeholder]
      );
      return findMemberByPhone(phone);
    } catch (err) {
      if (err && err.code === '23505' && attempt < 4) continue; // username clash — retry with a new one
      throw err;
    }
  }
  return findMemberByPhone(phone);
}

async function createSession(memberId, res) {
  const token = crypto.randomUUID();
  await db.query('INSERT INTO sessions (token, member_id) VALUES ($1,$2)', [token, memberId]);
  res.setHeader('Set-Cookie', cookie.serialize(COOKIE_NAME, token, {
    httpOnly: true, sameSite: 'lax', path: '/', maxAge: MAX_AGE
  }));
  return token;
}

async function destroySession(req, res) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies[COOKIE_NAME];
  if (token) await db.query('DELETE FROM sessions WHERE token = $1', [token]);
  res.setHeader('Set-Cookie', cookie.serialize(COOKIE_NAME, '', { httpOnly: true, path: '/', maxAge: 0 }));
}

async function memberFromRequest(req) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies[COOKIE_NAME];
  if (!token) return null;
  const { rows } = await db.query(
    `SELECT m.* FROM sessions s JOIN members m ON m.id = s.member_id WHERE s.token = $1`,
    [token]
  );
  return rows[0] || null;
}

async function requireAuth(req, res, next) {
  const member = await memberFromRequest(req);
  if (!member) return res.status(401).json({ error: 'Not signed in' });
  req.member = member;
  next();
}

module.exports = {
  normalizePhone, findMemberByPhone, findOrCreateMemberByPhone, createSession, destroySession,
  memberFromRequest, requireAuth, httpError, wrap, issueOtp, consumeOtp, validateUsername,
  isValidAvatar, AVATAR_STYLES, DEMO_MODE
};
