'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ASSESSMENTS } from '@/assessments/registry';
import { ArrowRight, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Foundation Wellness',
  'Weight Management',
  'Metabolic Health',
  'Lifestyle Health',
  'Mental & Emotional',
  'Beauty & Healthy Aging',
  'Men & Women',
  'Food & Eating',
  'Special Lifestyle'
];

export function AssessmentDirectory() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredAssessments = ASSESSMENTS.filter((assessment) => {
    if (!assessment.enabled) return false;
    if (activeCategory === 'All') return true;
    return assessment.category === activeCategory;
  });

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssessments.map((assessment) => (
          <Link
            key={assessment.id}
            href={`/assessments/${assessment.id}`}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 transition-all hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-2xl shadow-inner">
                  {assessment.emoji}
                </div>
                {assessment.comingSoon ? (
                  <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                    Coming Soon
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    Available
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {assessment.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-6">
                {assessment.description}
              </p>
            </div>
            
            <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>3 min</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Start</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
