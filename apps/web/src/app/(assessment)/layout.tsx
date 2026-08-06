'use client';

import React from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessment-store';
import { UNIVERSAL_PROFILE_QUESTIONS } from '@/config/assessment-questions';
import { ASSESSMENTS } from '@/assessments/registry';
import { GlobalProfileMenu } from './assessment/components/GlobalProfileMenu';

export default function AssessmentLayout({ children }: { children: React.ReactNode }) {
  const runtimeState = useAssessmentStore((state) => state.runtimeState);
  const currentQuestionIndex = useAssessmentStore((state) => state.currentQuestionIndex);
  const data = useAssessmentStore((state) => state.data);

  let goalQuestions: any[] = [];
  if (data.assessmentId) {
    const assessment = ASSESSMENTS.find(a => a.id === data.assessmentId);
    if (assessment && assessment.status === 'available') {
      goalQuestions = assessment.questions;
    }
  }

  const questionsList = [...UNIVERSAL_PROFILE_QUESTIONS, ...goalQuestions];
  const totalQuestions = questionsList.length;

  // Map state to progress
  let progressPercent = 10;
  if (runtimeState === 'QUESTIONNAIRE') {
    if (currentQuestionIndex < UNIVERSAL_PROFILE_QUESTIONS.length) {
      // Phase 1 Progress (Profile Builder)
      progressPercent = 5 + ((currentQuestionIndex) / UNIVERSAL_PROFILE_QUESTIONS.length) * 45;
    } else {
      // Phase 2 Progress (Deep Dive)
      const phase2Index = currentQuestionIndex - UNIVERSAL_PROFILE_QUESTIONS.length;
      progressPercent = 50 + ((phase2Index) / goalQuestions.length) * 40;
    }
  }
  if (runtimeState === 'CALCULATING') progressPercent = 95;
  if (runtimeState === 'REPORT_READY') progressPercent = 100;

  return (
    <div className="h-[100dvh] overflow-hidden flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900 bg-gradient-to-br from-slate-50 via-[#f0f4f8] to-[#e2e8f0] dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 bg-[length:200%_200%] animate-gradient">
      {/* Premium running bar at top */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-100 dark:bg-slate-900 z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-r-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <header className="w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/50 sticky top-1.5 z-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="flex items-center gap-2 group opacity-90 hover:opacity-100 transition-opacity"
            >
              <div className="relative h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center group-hover:scale-105 transition-transform">
                <img 
                  src="/logo.jpg" 
                  alt="WelliQo" 
                  className="w-full h-full object-contain rounded-xl shadow-lg"
                />
              </div>
              <span className="font-semibold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
                Welli<span className="text-emerald-500">Q</span>o
              </span>
            </Link>
          </div>

          {runtimeState === 'QUESTIONNAIRE' && (
            <div className="absolute left-1/2 -translate-x-1/2 text-xs sm:text-sm font-medium text-slate-500 bg-slate-50 dark:bg-slate-900 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm animate-in fade-in duration-500">
              {currentQuestionIndex < UNIVERSAL_PROFILE_QUESTIONS.length ? (
                <>Question <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{currentQuestionIndex + 1}</span> of {UNIVERSAL_PROFILE_QUESTIONS.length} <span className="hidden sm:inline"> (Profile Builder)</span></>
              ) : (
                <>Question <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{(currentQuestionIndex - UNIVERSAL_PROFILE_QUESTIONS.length) + 1}</span> of {goalQuestions.length} <span className="hidden sm:inline"> (Deep Dive)</span></>
              )}
            </div>
          )}

          <div>
            <GlobalProfileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col min-h-0">{children}</main>
    </div>
  );
}
