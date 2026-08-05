import React from 'react';

export default function LearnLoading() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 font-sans animate-pulse">
      {/* Navigation Bar Skeleton */}
      <nav className="w-full border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded-full" />
        </div>
      </nav>

      {/* Hero Section Skeleton */}
      <section className="w-full max-w-3xl mx-auto px-6 pt-16 pb-12 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30" />
        <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded-full" />
        <div className="h-12 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-xl" />
      </section>

      {/* Content Section Skeleton */}
      <section className="w-full max-w-3xl mx-auto px-6 pb-24 space-y-6">
        <div className="h-4 w-full bg-slate-100 dark:bg-slate-900 rounded-full" />
        <div className="h-4 w-full bg-slate-100 dark:bg-slate-900 rounded-full" />
        <div className="h-4 w-5/6 bg-slate-100 dark:bg-slate-900 rounded-full" />
        <div className="h-4 w-4/6 bg-slate-100 dark:bg-slate-900 rounded-full" />
        <br />
        <div className="h-8 w-1/3 bg-slate-200 dark:bg-slate-800 rounded-lg mt-8 mb-4" />
        <div className="h-4 w-full bg-slate-100 dark:bg-slate-900 rounded-full" />
        <div className="h-4 w-11/12 bg-slate-100 dark:bg-slate-900 rounded-full" />
      </section>
    </main>
  );
}
