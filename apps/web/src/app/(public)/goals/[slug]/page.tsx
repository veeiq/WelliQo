import { notFound } from 'next/navigation';
import Link from 'next/link';
import { GOALS } from '@/goals/registry';
import { GoalId } from '@/types/goal';

export async function generateStaticParams() {
  return GOALS.map((goal) => ({ slug: goal.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const goalInfo = GOALS.find((g) => g.id === slug);
  if (!goalInfo) return {};

  return {
    title: `${goalInfo.title} | WelliQo Goals`,
    description: goalInfo.description,
  };
}

export default async function GoalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const goalInfo = GOALS.find((g) => g.id === slug);
  if (!goalInfo) {
    notFound();
  }

  return (
    <div className="container py-12 max-w-5xl mx-auto">
      <Link
        href="/goals"
        className="text-[var(--color-accent-primary)] hover:underline mb-8 inline-block font-medium"
      >
        &larr; All Goals
      </Link>

      <div className="bg-[var(--color-background-secondary)] p-8 rounded-3xl border border-[var(--color-border-subtle)] mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
          {goalInfo.title}
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)]">{goalInfo.description}</p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
          Discover Content
        </h2>

        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30 rounded-3xl p-10 text-center flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M12 8v4l3 3" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-3">
            Your Journey is Growing
          </h3>
          <p className="text-emerald-700 dark:text-emerald-300 max-w-md mx-auto mb-6">
            Our clinical and wellness teams are actively developing premium, evidence-based
            content for {goalInfo.title}.
          </p>
          <Link
            href="/coaches"
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full transition-colors shadow-sm"
          >
            Speak to a Coach Meanwhile
          </Link>
        </div>
      </div>
    </div>
  );
}
