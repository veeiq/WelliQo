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
          Sprint 1 establishes the platform foundation. Assessment and educational experiences will
          be introduced only in their approved implementation sprints.
        </p>
      </div>
    </section>
  );
}
