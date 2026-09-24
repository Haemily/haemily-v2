// Database adapter: uses real Postgres (via `pg`) when DATABASE_URL is set
// (Render + Neon in production), otherwise falls back to an embedded
// PGlite database on disk so `npm start` works with zero setup locally.
'use strict';
const path = require('path');
const fs = require('fs');

let queryImpl = null;
let closeImpl = async () => {};
let transactionImpl = null;
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
    // A Pool's plain .query() calls can each land on a different
    // connection, so BEGIN/COMMIT only work reliably pinned to one client.
    transactionImpl = async (fn) => {
      const client = await pool.connect();
      const txQuery = async (text, params = []) => client.query(text, params);
      try {
        await client.query('BEGIN');
        const result = await fn(txQuery);
        await client.query('COMMIT');
        return result;
      } catch (err) {
        await client.query('ROLLBACK').catch(() => {});
        throw err;
      } finally {
        client.release();
      }
    };
    backend = 'postgres';
  } else {
    const { PGlite } = require('@electric-sql/pglite');
    const dataDir = path.join(__dirname, '..', '.data', 'pgdata');
    fs.mkdirSync(path.dirname(dataDir), { recursive: true });
    const pgliteDb = new PGlite(dataDir);
    await pgliteDb.waitReady;
    queryImpl = async (text, params = []) => pgliteDb.query(text, params);
    closeImpl = async () => pgliteDb.close();
    // PGlite is a single in-process connection, so running BEGIN/COMMIT
    // through the existing singleton query function is enough.
    transactionImpl = async (fn) => {
      try {
        await queryImpl('BEGIN');
        const result = await fn(queryImpl);
        await queryImpl('COMMIT');
        return result;
      } catch (err) {
        await queryImpl('ROLLBACK').catch(() => {});
        throw err;
      }
    };
    backend = 'pglite';
  }
}

async function query(text, params = []) {
  await init();
  return queryImpl(text, params);
}

// Runs fn(txQuery) inside a single transaction. fn must use the txQuery
// function it's given (not the module-level query()) for every statement
// that needs to be part of the transaction. Rolls back and rethrows on any
// error, so a failure partway through never leaves partial data committed.
async function transaction(fn) {
  await init();
  return transactionImpl(fn);
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

module.exports = { query, transaction, migrate, isEmpty, close, getBackend };
