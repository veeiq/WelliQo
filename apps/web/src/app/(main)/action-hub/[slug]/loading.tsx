import React from 'react';

export default function ActionHubLoading() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-50 overflow-x-hidden animate-pulse pb-24">
      {/* Hero Skeleton */}
      <section className="w-full bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-slate-950 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 flex flex-col items-center">
          <div className="h-6 w-32 bg-indigo-100/50 dark:bg-indigo-900/30 rounded-full" />
          <div className="h-12 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
          <div className="h-24 w-full max-w-2xl bg-white/60 dark:bg-slate-900/60 rounded-2xl border border-white/40 dark:border-slate-800/40" />
        </div>
      </section>

      <div className="space-y-24 mt-[-2rem] relative z-20">
        {/* Next Step Skeleton */}
        <section className="w-full max-w-3xl mx-auto px-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800" />
              <div className="h-6 w-48 bg-slate-100 dark:bg-slate-800 rounded-full" />
            </div>
            <div className="h-8 w-2/3 bg-slate-200 dark:bg-slate-700 rounded-xl" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full" />
              <div className="h-4 w-5/6 bg-slate-100 dark:bg-slate-800 rounded-full" />
              <div className="h-4 w-4/6 bg-slate-100 dark:bg-slate-800 rounded-full" />
            </div>
            <div className="h-14 w-40 bg-slate-200 dark:bg-slate-700 rounded-full mt-4" />
          </div>
        </section>
      </div>
    </div>
  );
}
