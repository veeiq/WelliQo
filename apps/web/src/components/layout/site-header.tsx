import Link from 'next/link';

import { GlobalSearch } from '@/components/search/global-search';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border-subtle)] bg-[var(--color-background-primary)]/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[var(--color-accent-primary)] flex items-center justify-center">
            <span className="text-white font-bold text-xl">W</span>
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">WelliQo</span>
        </Link>

        <div className="flex-1 flex justify-center px-4">
          <GlobalSearch />
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/assessment"
            className="text-sm font-medium hover:text-[var(--color-accent-primary)] transition-colors hidden md:block"
          >
            Take Assessment
          </Link>
          <Link
            href="/action-hub/morning-sunlight-habit"
            className="text-sm font-medium hover:text-[var(--color-accent-primary)] transition-colors hidden md:block"
          >
            Action Hub
          </Link>
          <Link
            href="/assessment"
            className="bg-[var(--color-accent-primary)] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors shadow-sm hover:shadow"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
