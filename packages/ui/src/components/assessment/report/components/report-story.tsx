import React from 'react';

export function ReportStory() {
  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-6">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 transition-shadow hover:shadow-md">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4 text-balance">
          Your Journey
        </h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg text-balance">
          This isn&apos;t a test, and there&apos;s no such thing as a perfect score. Everything below is simply a reflection of where you are today. We&apos;re here to celebrate your strengths and help you discover small, manageable steps forward.
        </p>
      </div>
    </section>
  );
}
