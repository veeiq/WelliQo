import Link from 'next/link';
import { Metadata } from 'next';
import { Target, ArrowRight } from 'lucide-react';

const GOALS = [
  {
    id: 'better-sleep',
    title: 'Better Sleep',
    description: 'Improve your sleep quality and circadian rhythm',
  },
  {
    id: 'weight-management',
    title: 'Weight Management',
    description: 'Strategies for healthy and sustainable weight management',
  },
  { id: 'energy', title: 'More Energy', description: 'Boost your daily energy levels and focus' },
  {
    id: 'healthy-digestion',
    title: 'Healthy Digestion',
    description: 'Optimize your gut health and microbiome',
  },
  {
    id: 'heart-health',
    title: 'Heart Health',
    description: 'Support cardiovascular function and longevity',
  },
  {
    id: 'healthy-aging',
    title: 'Healthy Aging',
    description: 'Maintain vitality and healthspan as you age',
  },
  {
    id: 'womens-wellness',
    title: "Women's Wellness",
    description: 'Targeted support for female health and hormones',
  },
  {
    id: 'sports-nutrition',
    title: 'Sports Nutrition',
    description: 'Fuel your athletic performance and recovery',
  },
  {
    id: 'immunity',
    title: 'Immunity',
    description: 'Strengthen your immune system and resilience',
  },
  {
    id: 'general-wellness',
    title: 'General Wellness',
    description: 'Foundational habits for overall well-being',
  },
];

export const metadata: Metadata = {
  title: 'Wellness Goals | WelliQo',
  description: 'Explore curated content based on your specific health and wellness goals.',
};

export default function GoalsPage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:py-24 max-w-7xl">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-6 shadow-inner">
            <Target className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Wellness Goals
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Select a goal to discover tailored assessments, articles, and action plans designed for your specific journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOALS.map((goal) => (
            <Link
              key={goal.id}
              href="/assessments" // Redirecting to assessments for now as per v2 logic
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 transition-all hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1"
            >
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {goal.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {goal.description}
                </p>
              </div>
              <div className="flex items-center gap-2 font-medium text-emerald-600 dark:text-emerald-400">
                <span>View Assessments</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
