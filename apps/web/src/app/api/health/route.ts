import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { env } from '@/env';

export async function GET() {
  const status = {
    app: 'WelliQo V1.0',
    status: 'ok',
    timestamp: new Date().toISOString(),
    services: {
      database: 'unknown',
      redis: env.UPSTASH_REDIS_REST_URL ? 'configured' : 'missing',
      storage: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'configured' : 'missing',
      email: env.RESEND_API_KEY ? 'configured' : 'missing',
      ai: process.env.OPENAI_API_KEY ? 'configured' : 'missing',
      auth: env.NEXTAUTH_SECRET ? 'configured' : 'missing',
    }
  };

  try {
    // Ping DB
    await prisma.$queryRaw`SELECT 1`;
    status.services.database = 'connected';
  } catch (error) {
    status.services.database = 'error';
    status.status = 'degraded';
    console.error('Health Check DB Error:', error);
  }

  return NextResponse.json(status, { status: status.status === 'ok' ? 200 : 503 });
}
