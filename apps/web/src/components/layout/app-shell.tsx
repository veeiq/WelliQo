import type { ReactNode } from 'react';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/site-header';
import { SkipLink } from '@welliqo/ui/components/skip-link';

export function AppShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SkipLink targetId="main-content" />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-8 text-sm text-slate-500 dark:text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div>WelliQo Wellness Companion Platform</div>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-emerald-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-emerald-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
