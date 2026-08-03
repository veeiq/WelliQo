import React from 'react';
import type { ReportSupportCard } from '../types';
import { Users } from 'lucide-react';

interface ReportSupportProps {
  support: ReportSupportCard[];
}

export function ReportSupport({ support }: ReportSupportProps) {
  if (support.length === 0) return null;

  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-6">
      <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-3xl p-8 md:p-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 mb-6 transition-transform hover:scale-110 duration-300">
          <Users className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-4 text-balance">
          You don't have to do it alone
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 text-balance leading-relaxed">
          Improvement is a journey. Whether you are looking for community, continued learning, or
          gentle accountability, we're here to help guide you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {support.map((item) => (
            <button
              key={item.id}
              className="px-8 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full font-medium text-slate-800 dark:text-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
