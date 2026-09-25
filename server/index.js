'use strict';
const path = require('path');
const express = require('express');
const db = require('./db');
const { seed } = require('./seed');
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');

const PORT = process.env.PORT || 3000;

// Builds the Express app without starting it — used by main() below and by
// the test suite (server/test/security.test.js), which needs an app it can
// listen() on an ephemeral port against a throwaway database.
function createApp() {
  const app = express();
  // Render sits behind a proxy; without this req.ip is Render's address for
  // every request, which would make the per-IP rate limits useless.
  app.set('trust proxy', 1);
  app.use(express.json());
  app.use('/api/auth', authRoutes);
  app.use('/api', apiRoutes);
  app.use(express.static(path.join(__dirname, '..', 'public')));
  // Client-side router (app.js `go()`) owns everything else — serve the SPA shell.
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')));

  // Catches anything a route handler threw or rejected with (routes wrapped
  // in auth.wrap() forward here instead of crashing the process). Errors
  // with a `status` (validation, rate limits) keep their message; anything
  // else is logged and reported generically so internals never leak.
  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    if (err && err.status) return res.status(err.status).json({ error: err.message });
    console.error(err);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  });

  return app;
}

async function main() {
  await db.migrate();
  if (await db.isEmpty()) {
    console.log('Empty database detected — seeding demo data...');
    await seed({ reset: false });
  }

  const app = createApp();
  app.listen(PORT, () => {
    console.log(`Haemily listening on http://localhost:${PORT} (db backend: ${db.getBackend()})`);
  });
}

if (require.main === module) {
  main().catch(err => { console.error(err); process.exit(1); });
}

module.exports = { createApp };
