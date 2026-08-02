import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">Page not found</p>
      <h1 className="mt-4 text-3xl font-semibold text-foreground">This page is not available.</h1>
      <p className="mt-3 text-muted">You can return to the WelliQo foundation.</p>
      <Link className="mt-8 font-semibold text-brand underline underline-offset-4" href="/">
        Return home
      </Link>
    </main>
  );
}
