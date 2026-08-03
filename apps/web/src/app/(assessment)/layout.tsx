'use client';

import React from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessment-store';

export default function AssessmentLayout({ children }: { children: React.ReactNode }) {
  const currentQuestion = useAssessmentStore((state) => state.currentQuestion);
  const answers = useAssessmentStore((state) => state.answers);
  const answeredQuestionIds = Object.keys(answers);

  // Smooth, non-linear progress that gives a feeling of momentum without exposing the total count.
  const step = answeredQuestionIds.length;
  const progressPercent = Math.min(95, 100 - 100 / (1 + 0.15 * step));

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Premium subtle top-edge progress bar */}
      {currentQuestion && (
        <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-100 dark:bg-slate-900 z-50 overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-r-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(16,185,129,0.4)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}

      <header className="w-full bg-transparent sticky top-0 z-40 mt-1.5">
        <div className="max-w-3xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="flex items-center gap-3 group opacity-80 hover:opacity-100 transition-opacity"
            >
              <span className="w-10 h-10 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-lg shadow-sm">
                W
              </span>
            </Link>
          </div>

          <div>
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              Save & Exit
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
