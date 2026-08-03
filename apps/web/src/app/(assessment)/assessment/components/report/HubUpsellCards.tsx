import React from 'react';
import Link from 'next/link';

export function HubUpsellCards() {
  return (
    <div className="space-y-4">
      {/* Knowledge Hub Card */}
      <Link href="/articles" className="block group">
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-700/50 hover:-translate-y-1 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-6xl">
            📚
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">Knowledge Hub</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[80%]">
            Dive into science-backed articles, guides, and expert advice to better understand your body and mind.
          </p>
          <div className="mt-4 text-emerald-600 dark:text-emerald-400 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            Read Articles <span>→</span>
          </div>
        </div>
      </Link>

      {/* Recipe Hub Card */}
      <Link href="/recipes" className="block group">
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-700/50 hover:-translate-y-1 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-6xl">
            🍲
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">Recipe Hub</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[80%]">
            Discover delicious, easy-to-make healthy recipes perfectly aligned with your wellness goals.
          </p>
          <div className="mt-4 text-amber-600 dark:text-amber-400 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            Explore Recipes <span>→</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
