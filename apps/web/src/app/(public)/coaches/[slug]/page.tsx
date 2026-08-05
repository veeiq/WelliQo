import { notFound } from 'next/navigation';
import Link from 'next/link';
import { COACHES } from '@/lib/coaches';
import { RequestCallbackForm } from '@/components/coaches/request-callback-form';

export async function generateStaticParams() {
  return COACHES.map((coach) => ({ slug: coach.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coach = COACHES.find((c) => c.slug === slug);
  if (!coach) return {};

  return {
    title: `${coach.name} - Wellness Coach | WelliQo`,
    description: coach.shortIntro,
  };
}

export default async function CoachProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coach = COACHES.find((c) => c.slug === slug);

  if (!coach) {
    notFound();
  }

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: coach.name,
    jobTitle: 'Wellness Coach',
    description: coach.fullBio,
    knowsLanguage: coach.languages,
  };

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Request Callback from ${coach.name}`,
    description: 'Form to request a callback from a WelliQo Wellness Coach.',
  };

  return (
    <main className="container py-12 max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <Link
        href="/coaches"
        className="text-[var(--color-accent-primary)] hover:underline mb-8 inline-block font-medium"
      >
        &larr; Back to Coaches
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Profile */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[var(--color-background-secondary)] p-8 rounded-3xl border border-[var(--color-border-subtle)] text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-5xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">
              {coach.photo}
            </div>
            <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
              {coach.name}
            </h1>
            <p className="text-[var(--color-accent-primary)] font-medium mb-6">{coach.expertise}</p>

            <div className="flex justify-center gap-3 text-sm text-[var(--color-text-secondary)] mb-6">
              <span className="bg-[var(--color-background-tertiary)] px-3 py-1.5 rounded-lg">
                🗣 {coach.languages.join(', ')}
              </span>
              {coach.city && (
                <span className="bg-[var(--color-background-tertiary)] px-3 py-1.5 rounded-lg">
                  📍 {coach.city}
                </span>
              )}
            </div>
          </div>

          <div className="bg-[var(--color-background-secondary)] p-8 rounded-3xl border border-[var(--color-border-subtle)]">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">About</h2>
            <div className="prose dark:prose-invert">
              <p>{coach.fullBio}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <RequestCallbackForm coachName={coach.name} />
        </div>
      </div>
    </main>
  );
}
