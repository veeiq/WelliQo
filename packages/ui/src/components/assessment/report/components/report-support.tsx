import React from 'react';
import { Users } from 'lucide-react';
import Link from 'next/link';

export function ReportSupport() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-6">
      <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-3xl p-8 md:p-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 mb-6 transition-transform hover:scale-110 duration-300">
          <Users className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-4 text-balance">
          Need personal guidance?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 text-balance leading-relaxed">
          Talk to a Wellness Coach. Improvement is a journey. Whether you are looking for community,
          continued learning, or gentle accountability, we're here to help guide you.
        </p>
        <div className="flex justify-center">
          <Link
            href="/coaches"
            className="px-8 py-3 bg-emerald-600 dark:bg-emerald-500 border border-transparent rounded-full font-semibold text-white shadow-sm hover:shadow-md hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            Meet Our Coaches
          </Link>
        </div>
      </div>
    </section>
  );
}
