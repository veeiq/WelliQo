'use client';

import React from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessment-store';
import { GOAL_QUESTIONS, DEFAULT_QUESTIONS } from '@/config/assessment-questions';

export default function AssessmentLayout({ children }: { children: React.ReactNode }) {
  const runtimeState = useAssessmentStore((state) => state.runtimeState);
  const currentQuestionIndex = useAssessmentStore((state) => state.currentQuestionIndex);
  const data = useAssessmentStore((state) => state.data);

  const goal = data.goal || 'weight';
  const questionsList = GOAL_QUESTIONS[goal] || DEFAULT_QUESTIONS;
  const totalQuestions = questionsList.length;

  // Map state to progress
  let progressPercent = 10;
  if (runtimeState === 'QUESTIONNAIRE') {
    progressPercent = 15 + ((currentQuestionIndex + 1) / totalQuestions) * 75;
  }
  if (runtimeState === 'CALCULATING') progressPercent = 90;
  if (runtimeState === 'REPORT_READY') progressPercent = 100;

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900 bg-gradient-to-br from-slate-50 via-[#f0f4f8] to-[#e2e8f0] dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 bg-[length:200%_200%] animate-gradient">
      {/* Premium running bar at top */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-100 dark:bg-slate-900 z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-r-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <header className="w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/50 sticky top-1.5 z-40">
        <div className="max-w-3xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="flex items-center gap-3 group opacity-80 hover:opacity-100 transition-opacity"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
                W
              </div>
            </Link>
          </div>

          {runtimeState === 'QUESTIONNAIRE' && (
            <div className="absolute left-1/2 -translate-x-1/2 text-sm font-medium text-slate-500 bg-slate-50 dark:bg-slate-900 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm animate-in fade-in duration-500">
              Question <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{currentQuestionIndex + 1}</span> of {totalQuestions}
            </div>
          )}

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
