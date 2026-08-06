import Link from 'next/link';
import { Metadata } from 'next';
import { Target, ArrowRight } from 'lucide-react';
import { GOALS } from '@/goals/registry';

export const metadata: Metadata = {
  title: 'Wellness Goals | WelliQo',
  description: 'Explore curated content based on your specific health and wellness goals.',
};

export default function GoalsPage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-7xl">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4 shadow-inner">
            <Target className="h-7 w-7 sm:h-8 sm:w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Wellness Goals
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Select a wellness goal to discover personalized assessments and practical recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOALS.map((goal) => (
            <Link
              key={goal.id}
              href={`/assessments?goal=${goal.id}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-[2px] active:scale-[0.98] active:translate-y-0"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 mb-6 shadow-inner group-hover:bg-emerald-100 group-hover:text-emerald-600 dark:group-hover:bg-emerald-900/30 dark:group-hover:text-emerald-400 transition-colors">
                  <goal.icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {goal.title}
                </h2>
                <p className="text-slate-500 font-light dark:text-slate-400 mb-6 line-clamp-2">
                  {goal.description}
                </p>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                <span>Explore</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
