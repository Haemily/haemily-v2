-- Haemily demo schema. Works on Postgres (Neon) and PGlite (local dev).

CREATE TABLE IF NOT EXISTS members (
  id text PRIMARY KEY,
  phone text UNIQUE NOT NULL,
  username text NOT NULL DEFAULT 'SunlitKoi',
  avatar text NOT NULL DEFAULT 'SK',
  first_name text NOT NULL DEFAULT '',
  last_name text NOT NULL DEFAULT '',
  relationship text NOT NULL DEFAULT '',
  age_range text NOT NULL DEFAULT '',
  life_stage text NOT NULL DEFAULT '',
  topics jsonb NOT NULL DEFAULT '[]',
  other_topic text NOT NULL DEFAULT '',
  onboarded boolean NOT NULL DEFAULT false,
  is_moderator boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  last_seen_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS sessions (
  token text PRIMARY KEY,
  member_id text NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Posts, events and resources are stored with a flexible jsonb "data" blob
-- carrying the same shape the design's hardcoded arrays used, plus a few
-- normalised columns we need to query/sort/filter on.
CREATE TABLE IF NOT EXISTS posts (
  id text PRIMARY KEY,
  member_id text REFERENCES members(id) ON DELETE SET NULL,
  author text NOT NULL,
  initials text NOT NULL,
  org boolean NOT NULL DEFAULT false,
  verified text,
  format text NOT NULL,
  title text NOT NULL,
  excerpt text NOT NULL,
  body text NOT NULL DEFAULT '',
  topics jsonb NOT NULL DEFAULT '[]',
  stages jsonb NOT NULL DEFAULT '[]',
  image jsonb,
  helpful text,
  base_reactions integer NOT NULL DEFAULT 0,
  base_comments integer NOT NULL DEFAULT 0,
  date_label text,
  pinned_until timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS reactions (
  member_id text NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  post_id text NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  kind text NOT NULL DEFAULT 'helpful',
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (member_id, post_id, kind)
);

CREATE TABLE IF NOT EXISTS comments (
  id text PRIMARY KEY,
  target_type text NOT NULL,
  target_id text NOT NULL,
  parent_id text REFERENCES comments(id) ON DELETE CASCADE,
  member_id text REFERENCES members(id) ON DELETE SET NULL,
  author text NOT NULL,
  avatar text NOT NULL,
  role_label text,
  text text NOT NULL,
  context text,
  base_likes integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS comment_likes (
  member_id text NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  comment_id text NOT NULL REFERENCES comments(id) ON DELETE CASCADE,
  PRIMARY KEY (member_id, comment_id)
);

CREATE TABLE IF NOT EXISTS saves (
  member_id text NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  item_type text NOT NULL,
  item_id text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (member_id, item_type, item_id)
);

CREATE TABLE IF NOT EXISTS events (
  id text PRIMARY KEY,
  data jsonb NOT NULL
);

CREATE TABLE IF NOT EXISTS resources (
  id text PRIMARY KEY,
  data jsonb NOT NULL,
  base_likes integer NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS resource_likes (
  member_id text NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  resource_id text NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (member_id, resource_id)
);

CREATE TABLE IF NOT EXISTS event_registrations (
  member_id text NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  event_id text NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'registered',
  attended boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (member_id, event_id)
);

-- Additive migrations for columns added after the tables above were first
-- deployed (e.g. to Neon). CREATE TABLE IF NOT EXISTS is a no-op on a table
-- that already exists, so new columns on existing tables must be added here
-- explicitly — this keeps a redeploy safe without a manual DB reset.
ALTER TABLE members ADD COLUMN IF NOT EXISTS first_name text NOT NULL DEFAULT '';
ALTER TABLE members ADD COLUMN IF NOT EXISTS last_name text NOT NULL DEFAULT '';
ALTER TABLE resources ADD COLUMN IF NOT EXISTS base_likes integer NOT NULL DEFAULT 0;
