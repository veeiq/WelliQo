import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@welliqo/ui'],
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: "veeiq",
  project: "welliqo",
});
