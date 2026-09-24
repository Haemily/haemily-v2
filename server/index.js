'use strict';
const path = require('path');
const express = require('express');
const db = require('./db');
const { seed } = require('./seed');
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');

const PORT = process.env.PORT || 3000;

async function main() {
  await db.migrate();
  if (await db.isEmpty()) {
    console.log('Empty database detected — seeding demo data...');
    await seed({ reset: false });
  }

  const app = express();
  app.use(express.json());
  app.use('/api/auth', authRoutes);
  app.use('/api', apiRoutes);
  app.use(express.static(path.join(__dirname, '..', 'public')));
  // Client-side router (app.js `go()`) owns everything else — serve the SPA shell.
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')));

  app.listen(PORT, () => {
    console.log(`Haemily listening on http://localhost:${PORT} (db backend: ${db.getBackend()})`);
  });
}

main().catch(err => { console.error(err); process.exit(1); });
