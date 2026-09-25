// Smoke tests for the auth/phone-privacy/username hardening in this branch.
// Runs the real app (Express + PGlite) against a throwaway temp database —
// no mocking, so these exercise the actual SQL and middleware.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

process.env.PGLITE_DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'haemily-test-'));
process.env.DEMO_MODE = 'true';

const db = require('../db');
const { seed } = require('../seed');
const { createApp } = require('../index');

let baseUrl;
let server;

test.before(async () => {
  await seed({ reset: true });
  server = createApp().listen(0);
  await new Promise(resolve => server.once('listening', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

test.after(async () => {
  await new Promise(resolve => server.close(resolve));
  await db.close();
  fs.rmSync(process.env.PGLITE_DIR, { recursive: true, force: true });
});

// Tiny cookie-jar fetch: each call to session() returns a request() function
// that remembers whatever Set-Cookie the server sent it, like a browser tab.
function session() {
  let cookie = '';
  return async function request(method, path, body) {
    const res = await fetch(`${baseUrl}${path}`, {
      method,
      headers: { 'Content-Type': 'application/json', ...(cookie ? { Cookie: cookie } : {}) },
      body: body !== undefined ? JSON.stringify(body) : undefined
    });
    const setCookie = res.headers.get('set-cookie');
    if (setCookie) cookie = setCookie.split(';')[0];
    let data = null;
    try { data = await res.json(); } catch { /* no body */ }
    return { status: res.status, data };
  };
}

async function signIn(phone) {
  const req = session();
  const start = await req('POST', '/api/auth/start', { phone });
  assert.equal(start.status, 200);
  const verify = await req('POST', '/api/auth/verify', { phone, otp: start.data.demoCode });
  assert.equal(verify.status, 200);
  return { req, member: verify.data.member };
}

test('demo OTP: wrong code is rejected, correct demoCode signs in', async () => {
  const phone = '81112221';
  const req = session();
  const start = await req('POST', '/api/auth/start', { phone });
  assert.equal(start.status, 200);
  assert.match(start.data.demoCode, /^\d{6}$/);

  const wrongCode = start.data.demoCode === '000000' ? '111111' : '000000';
  const wrong = await req('POST', '/api/auth/verify', { phone, otp: wrongCode });
  assert.equal(wrong.status, 400);

  const right = await req('POST', '/api/auth/verify', { phone, otp: start.data.demoCode });
  assert.equal(right.status, 200);
  assert.equal(right.data.member.phone, phone);
});

test('demo OTP: 5 wrong attempts locks the code out (429 on the next try)', async () => {
  const phone = '81112222';
  const req = session();
  const start = await req('POST', '/api/auth/start', { phone });
  const wrongCode = start.data.demoCode === '000000' ? '111111' : '000000';
  let last;
  // 5 wrong guesses each return 400 and count against the attempt cap; the
  // 6th request sees the cap already hit and is rejected before it even
  // checks the code.
  for (let i = 0; i < 6; i++) last = await req('POST', '/api/auth/verify', { phone, otp: wrongCode });
  assert.equal(last.status, 429);
});

test('/auth/start rate-limits repeated requests for the same phone', async () => {
  const phone = '81112223';
  const req = session();
  let last;
  for (let i = 0; i < 4; i++) last = await req('POST', '/api/auth/start', { phone });
  assert.equal(last.status, 429);
});

test('member lookup only returns phone for members who opted in to WhatsApp', async () => {
  const { req } = await signIn('81113001');

  const brightkite = await req('GET', '/api/members/BrightKite');
  assert.equal(brightkite.status, 200);
  assert.equal(brightkite.data.phone, '91234567'); // seeded opted-in

  const gentlemoon = await req('GET', '/api/members/GENTLEMOON'); // case-insensitive lookup
  assert.equal(gentlemoon.status, 200);
  assert.equal(gentlemoon.data.phone, '98765432');

  const { member: freshMember } = await signIn('81113002');
  const fresh = await req('GET', `/api/members/${freshMember.username}`);
  assert.equal(fresh.status, 200);
  assert.equal(fresh.data.phone, null); // opted out by default
});

test('member lookup 404s for an unknown username without crashing the server', async () => {
  const { req } = await signIn('81113003');
  const res = await req('GET', '/api/members/does-not-exist');
  assert.equal(res.status, 404);
  const health = await req('GET', '/api/auth/me');
  assert.equal(health.status, 200); // server still up
});

test('usernames are unique, reserved words and unsafe characters are rejected', async () => {
  const { req } = await signIn('81114001');

  // 'SunlitKoi' belongs to the seeded new-member account but has never
  // authored a post/comment, so this exercises the DB unique index directly
  // (case-insensitive) rather than the author-collision pre-check below.
  const takenLower = await req('PATCH', '/api/auth/me', { username: 'sunlitkoi' });
  assert.equal(takenLower.status, 409);

  // 'BrightKite' has authored a seeded post, so this is caught by the
  // author-collision check before it ever reaches the unique index.
  const takenAuthor = await req('PATCH', '/api/auth/me', { username: 'BrightKite' });
  assert.equal(takenAuthor.status, 400);

  const reserved = await req('PATCH', '/api/auth/me', { username: 'HSS Helper' });
  assert.equal(reserved.status, 400);

  const xss = await req('PATCH', '/api/auth/me', { username: 'x" onmouseover=alert(1)' });
  assert.equal(xss.status, 400);

  const badAvatar = await req('PATCH', '/api/auth/me', { username: 'ValidName', avatar: 'x" onclick=alert(1)' });
  assert.equal(badAvatar.status, 400);

  const ok = await req('PATCH', '/api/auth/me', { username: 'ValidName' });
  assert.equal(ok.status, 200);
  assert.equal(ok.data.member.username, 'ValidName');
});

test('two new signups never collide on the placeholder username', async () => {
  const a = await signIn('81115001');
  const b = await signIn('81115002');
  assert.notEqual(a.member.username.toLowerCase(), b.member.username.toLowerCase());
});

test('invalid PATCH payloads are rejected instead of crashing the server', async () => {
  const { req } = await signIn('81116001');
  const res = await req('PATCH', '/api/auth/me', { username: null });
  assert.equal(res.status, 400);
  const health = await req('GET', '/api/auth/me');
  assert.equal(health.status, 200);
});
