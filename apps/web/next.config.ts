import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@welliqo/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: "veeiq",
  project: "welliqo",
}); // Force deploy
