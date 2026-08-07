import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url("DATABASE_URL must be a valid URL").optional(),
  NEXTAUTH_SECRET: z.string().min(1, "NEXTAUTH_SECRET is required").optional(),
  NEXTAUTH_URL: z.string().url("NEXTAUTH_URL must be a valid URL").optional(),
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required").optional(),
  POSTHOG_KEY: z.string().optional(),
  SENTRY_DSN: z.string().url("SENTRY_DSN must be a valid URL").optional(),
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_SECRET: z.string().optional(),
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("❌ Invalid environment variables:");
  _env.error.issues.forEach((issue) => {
    console.error(`  - ${issue.path.join('.')}: ${issue.message}`);
  });
  
  if (process.env.NODE_ENV === 'production') {
    throw new Error("Invalid environment variables");
  }
}

// In case it failed in dev but we still want to export something to avoid crashing imports
export const env = _env.success ? _env.data : process.env as any;
