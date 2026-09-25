// Minimal in-memory rate limiter. Good enough for a single Render instance
// serving a hackathon demo — no extra dependency, no shared store needed.
'use strict';

const buckets = new Map(); // `${bucket}:${key}` -> { count, resetAt }

// Clear expired entries periodically so the map doesn't grow unbounded.
// unref() so this timer never keeps the process alive on its own.
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of buckets) {
    if (entry.resetAt <= now) buckets.delete(key);
  }
}, 60_000).unref();

// Returns true if `key` (within `bucket`) has exceeded `max` hits in the
// trailing `windowMs` window, incrementing its count as a side effect either
// way (an over-limit caller still "uses" a slot, which is fine — it's
// already being rejected).
function hit(bucket, key, max, windowMs) {
  const now = Date.now();
  const mapKey = `${bucket}:${key}`;
  let entry = buckets.get(mapKey);
  if (!entry || entry.resetAt <= now) {
    entry = { count: 0, resetAt: now + windowMs };
    buckets.set(mapKey, entry);
  }
  entry.count += 1;
  return entry.count > max;
}

// Express middleware factory: 429s once `key(req)` exceeds `max` hits per
// `windowMs`, otherwise calls next(). `bucket` namespaces the counter so the
// same key (e.g. an IP) can be limited independently per-route.
function rateLimit(bucket, { max, windowMs, key }) {
  return (req, res, next) => {
    if (hit(bucket, key(req), max, windowMs)) {
      return res.status(429).json({ error: 'Too many attempts. Please wait a few minutes and try again.' });
    }
    next();
  };
}

module.exports = { hit, rateLimit };
