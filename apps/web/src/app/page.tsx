export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-6xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
          Engineering foundation
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          WelliQo is being built with care.
        </h1>
        <p className="mt-5 text-lg text-muted">
          Sprint 1 establishes the platform foundation. The complete architecture is now wired up,
          and the assessment is ready to use.
        </p>
        <div className="mt-8">
          <a
            href="/assessment"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
          >
            Start Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
