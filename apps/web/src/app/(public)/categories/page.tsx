import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Activity, Brain, Leaf, Scale, Zap, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Assessment Categories | WelliQo',
  description: 'Browse our wellness assessments by category.',
};

const CATEGORIES = [
  {
    name: 'Foundation Wellness',
    description: 'The core pillars of your health, including sleep, energy, and nutrition.',
    icon: Sparkles,
    color: 'emerald'
  },
  {
    name: 'Weight Management',
    description: 'Lose fat, build muscle, and optimize your body composition.',
    icon: Scale,
    color: 'blue'
  },
  {
    name: 'Metabolic Health',
    description: 'Heart health, blood sugar balance, and gut microbiome.',
    icon: Activity,
    color: 'red'
  },
  {
    name: 'Lifestyle Health',
    description: 'Ergonomics, digital wellness, and preventive care.',
    icon: ShieldCheck,
    color: 'teal'
  },
  {
    name: 'Mental & Emotional',
    description: 'Stress reduction, cognitive focus, and anxiety management.',
    icon: Brain,
    color: 'purple'
  },
  {
    name: 'Beauty & Healthy Aging',
    description: 'Skin health, anti-aging, and longevity protocols.',
    icon: Heart,
    color: 'rose'
  },
  {
    name: 'Food & Eating',
    description: 'Smart grocery shopping and plant-based nutrition.',
    icon: Leaf,
    color: 'green'
  },
  {
    name: 'Special Lifestyle',
    description: 'Student, traveler, and unique lifestyle optimizations.',
    icon: Zap,
    color: 'orange'
  }
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl min-h-[70vh]">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
          Browse by Category
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Find the perfect assessment based on your specific health goals and areas of interest.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.name}
              href="/assessments" 
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {cat.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  {cat.description}
                </p>
              </div>
              <div className="flex items-center gap-2 font-medium text-emerald-600 dark:text-emerald-400">
                <span>View Assessments</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
