# Haemily

A working build of the Haemily community app, based on the Claude Design
handoff (`public/index.html`, `public/styles.css`, `public/app.js`). The
frontend is unchanged in look and flow; it now talks to a small Node/Express
API backed by Postgres instead of holding everything in memory.

## Run locally

```
npm install
npm start
```

Open http://localhost:3000. No database setup needed — with no `DATABASE_URL`
set, the app uses an embedded PGlite (Postgres-compatible) database stored in
`.data/`, which is created and seeded automatically on first run.

To wipe and reseed (do this right before the demo for a clean slate):

```
npm run reset
```

## Demo accounts

Sign-in is open: any 8-digit phone number works, and any 6-digit code is
accepted at the verification step (no real OTP for the demo). A phone number
that hasn't been seen before automatically gets a fresh account and goes
through the full onboarding flow — great for letting judges "create their own
account" live.

Three accounts are also pre-seeded for a faster demo:

| Phone | Account | What it shows |
|---|---|---|
| `8123 4567` | New member | Full onboarding flow (profile, avatar, personalisation questions) |
| `9123 4567` | **BrightKite** | Returning member with saved posts/resources, an authored post, event registration, comment history |
| `9876 5432` | **GentleMoon** | A second account, useful for showing that one member's comments/likes show up for another |

## What's implemented

Onboarding · Home feed (All/Topics, search, "Since your last visit") · Create
post · Post details with comments/replies/reactions/saves · Resources and
resource details with discussion · Events and event details, including the
external-registration-then-confirm flow and "Add to calendar" · Profile
(Saved/Posts/Comments) and edit profile · Sign out.

Not wired up (present in `app.js` but not reachable from any nav in the
design, so left as-is): Connect/practical-help requests, community meetups,
AMA threads, notifications settings, the moderator queue, and global search.

## Deploying (Render + Neon, free)

1. Push this repo to GitHub.
2. Create a free Postgres database at https://neon.tech and copy its
   connection string.
3. In Render, "New" → "Blueprint", point it at this repo (`render.yaml`).
4. Set the `DATABASE_URL` env var on the service to the Neon connection
   string.
5. First boot runs migrations and seeds automatically.

Render's free tier sleeps after ~15 minutes idle — open the URL a few minutes
before presenting so it's warm.

## Project layout

```
public/            the Claude Design handoff (frontend, unchanged in appearance)
server/
  index.js         Express app: serves public/ and mounts the API
  db.js             Postgres/PGlite adapter
  schema.sql        table definitions
  seed.js/seedData.js  demo accounts + the design's original content, seeded into the DB
  auth.js           session-cookie auth
  routes/auth.js     phone/OTP-style login, profile
  routes/api.js       posts, comments, reactions, saves, events, bootstrap
```
