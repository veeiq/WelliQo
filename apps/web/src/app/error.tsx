'use client';

import { useEffect } from 'react';
import { Button } from '@welliqo/ui/components/button';

export default function GlobalError({
  error,
  reset,
}: Readonly<{ error: Error & { digest?: string }; reset: () => void }>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
        Something went wrong
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-foreground">Please try again.</h1>
      <p className="mt-3 text-muted">
        The page could not be loaded. No personal information has been changed.
      </p>
      <div className="mt-8">
        <Button onClick={reset}>Try again</Button>
      </div>
    </main>
  );
}
