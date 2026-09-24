// Database adapter: uses real Postgres (via `pg`) when DATABASE_URL is set
// (Render + Neon in production), otherwise falls back to an embedded
// PGlite database on disk so `npm start` works with zero setup locally.
'use strict';
const path = require('path');
const fs = require('fs');

let queryImpl = null;
let closeImpl = async () => {};
let backend = null;

async function init() {
  if (queryImpl) return;
  if (process.env.DATABASE_URL) {
    const { Pool } = require('pg');
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.PGSSLMODE === 'disable' ? false : { rejectUnauthorized: false }
    });
    queryImpl = async (text, params = []) => pool.query(text, params);
    closeImpl = async () => pool.end();
    backend = 'postgres';
  } else {
    const { PGlite } = require('@electric-sql/pglite');
    const dataDir = path.join(__dirname, '..', '.data', 'pgdata');
    fs.mkdirSync(path.dirname(dataDir), { recursive: true });
    const db = new PGlite(dataDir);
    await db.waitReady;
    queryImpl = async (text, params = []) => db.query(text, params);
    closeImpl = async () => db.close();
    backend = 'pglite';
  }
}

async function query(text, params = []) {
  await init();
  return queryImpl(text, params);
}

async function migrate() {
  await init();
  const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
  // Run statement-by-statement: PGlite's single-query call doesn't like
  // multiple ; separated statements in one call as reliably as pg does.
  const statements = schema
    .split(/;\s*(?:\n|$)/)
    .map(s => s.trim())
    .filter(Boolean);
  for (const statement of statements) {
    await query(statement + ';');
  }
}

async function isEmpty() {
  const { rows } = await query('SELECT count(*)::int AS n FROM members');
  return rows[0].n === 0;
}

async function close() {
  await closeImpl();
}

function getBackend() {
  return backend;
}

module.exports = { query, migrate, isEmpty, close, getBackend };
