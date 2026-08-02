import type { ReactNode } from 'react';
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
      <footer className="border-t bg-card px-4 py-6 text-sm text-muted sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">WelliQo engineering foundation</div>
      </footer>
    </div>
  );
}
