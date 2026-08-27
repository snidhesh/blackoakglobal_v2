import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type Duration = Parameters<typeof Ratelimit.slidingWindow>[1];

type Result = {
  ok: boolean;
  remaining: number;
  retryAfterMs?: number;
};

const buckets = new Map<string, { count: number; resetAt: number }>();
const limiters = new Map<string, Ratelimit>();
let redis: Redis | null | undefined;

function getRedis(): Redis | null {
  if (redis !== undefined) return redis;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    redis = null;
    return null;
  }
  redis = new Redis({ url, token });
  return redis;
}

function getLimiter(max: number, windowMs: number): Ratelimit | null {
  const client = getRedis();
  if (!client) return null;
  const key = `${max}:${windowMs}`;
  const cached = limiters.get(key);
  if (cached) return cached;
  const window = `${Math.max(1, Math.round(windowMs / 1000))} s` as Duration;
  const limiter = new Ratelimit({
    redis: client,
    limiter: Ratelimit.slidingWindow(max, window),
    analytics: false,
    prefix: "ratelimit:contact",
  });
  limiters.set(key, limiter);
  return limiter;
}

function memoryLimit(key: string, max: number, windowMs: number): Result {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: max - 1 };
  }
  if (bucket.count >= max) {
    return { ok: false, remaining: 0, retryAfterMs: bucket.resetAt - now };
  }
  bucket.count += 1;
  return { ok: true, remaining: max - bucket.count };
}

export async function rateLimit(
  key: string,
  max = 5,
  windowMs = 60_000,
): Promise<Result> {
  const limiter = getLimiter(max, windowMs);
  if (limiter) {
    try {
      const result = await limiter.limit(key);
      return {
        ok: result.success,
        remaining: result.remaining,
        retryAfterMs: Math.max(0, result.reset - Date.now()),
      };
    } catch (err) {
      console.error("[rate-limit] Upstash error, falling back to memory", err);
    }
  }
  return memoryLimit(key, max, windowMs);
}
