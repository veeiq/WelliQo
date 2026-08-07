import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const authMiddleware = NextAuth(authConfig).auth;

const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

const ratelimit = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(5, '1 m'),
      analytics: true,
    })
  : null;

export default async function middleware(req: NextRequest) {
  // Rate limiting check
  if (req.nextUrl.pathname.startsWith('/api/leads') || req.nextUrl.pathname.startsWith('/api/auth/register')) {
    if (ratelimit) {
      const ip = req.headers.get("x-forwarded-for") ?? '127.0.0.1';
      const { success, limit, reset, remaining } = await ratelimit.limit(`ratelimit_${ip}`);

      if (!success) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { 
            status: 429,
            headers: {
              'X-RateLimit-Limit': limit.toString(),
              'X-RateLimit-Remaining': remaining.toString(),
              'X-RateLimit-Reset': reset.toString(),
            }
          }
        );
      }
    }
  }

  // Continue with auth middleware
  return (authMiddleware as any)(req, {} as any);
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!_next/static|_next/image|.*\\.png$).*)'],
};
