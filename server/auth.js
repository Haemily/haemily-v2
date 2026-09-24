'use strict';
const crypto = require('crypto');
const cookie = require('cookie');
const db = require('./db');

const COOKIE_NAME = 'haemily_sid';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days — plenty for a hackathon demo

function normalizePhone(raw) {
  return String(raw || '').replace(/\D/g, '').slice(-8);
}

async function findMemberByPhone(phone) {
  const { rows } = await db.query('SELECT * FROM members WHERE phone = $1', [phone]);
  return rows[0] || null;
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

module.exports = { normalizePhone, findMemberByPhone, createSession, destroySession, memberFromRequest, requireAuth };
