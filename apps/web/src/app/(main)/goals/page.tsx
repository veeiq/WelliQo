import Link from 'next/link';

const GOALS = [
  { id: 'better-sleep', title: 'Better Sleep', description: 'Improve your sleep quality and circadian rhythm' },
  { id: 'weight-management', title: 'Weight Management', description: 'Strategies for healthy and sustainable weight management' },
  { id: 'energy', title: 'More Energy', description: 'Boost your daily energy levels and focus' },
  { id: 'healthy-digestion', title: 'Healthy Digestion', description: 'Optimize your gut health and microbiome' },
  { id: 'heart-health', title: 'Heart Health', description: 'Support cardiovascular function and longevity' },
  { id: 'healthy-aging', title: 'Healthy Aging', description: 'Maintain vitality and healthspan as you age' },
  { id: 'womens-wellness', title: "Women's Wellness", description: 'Targeted support for female health and hormones' },
  { id: 'sports-nutrition', title: 'Sports Nutrition', description: 'Fuel your athletic performance and recovery' },
  { id: 'immunity', title: 'Immunity', description: 'Strengthen your immune system and resilience' },
  { id: 'general-wellness', title: 'General Wellness', description: 'Foundational habits for overall well-being' },
];

export const metadata = {
  title: 'Wellness Goals | WelliQo',
  description: 'Explore curated content based on your specific health and wellness goals.',
};

export default function GoalsPage() {
  return (
    <div className="container py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Wellness Goals</h1>
      <p className="text-xl text-[var(--color-text-secondary)] mb-12">
        Select a goal to discover articles, recipes, and habits tailored to your journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GOALS.map((goal) => (
          <Link
            key={goal.id}
            href={`/goals/${goal.id}`}
            className="block p-6 bg-[var(--color-background-secondary)] rounded-2xl border border-[var(--color-border-subtle)] hover:border-[var(--color-accent-primary)] hover:shadow-md transition-all group"
          >
            <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent-primary)] transition-colors">
              {goal.title}
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              {goal.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
