'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessment-store';
import { UNIVERSAL_PROFILE_QUESTIONS } from '@/config/assessment-questions';
import { ASSESSMENTS } from '@/assessments/registry';
import { X } from 'lucide-react';

const STAGES = [
  '🧍 About You',
  '📏 Health Profile',
  '🥗 Nutrition & Lifestyle',
  '😴 Sleep & Recovery',
  '🏃 Activity',
  '🎯 Goals',
  '📊 Your Report'
];

export default function AssessmentLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [showExitDialog, setShowExitDialog] = useState(false);
  const runtimeState = useAssessmentStore((state) => state.runtimeState);
  const currentQuestionIndex = useAssessmentStore((state) => state.currentQuestionIndex);
  const data = useAssessmentStore((state) => state.data);

  let goalQuestions: any[] = [];
  let assessmentTitle = 'Building your profile';
  let assessmentEmoji = '⚖️';
  if (data.assessmentId) {
    const assessment = ASSESSMENTS.find(a => a.id === data.assessmentId);
    if (assessment && assessment.status === 'available') {
      goalQuestions = assessment.questions;
      assessmentTitle = assessment.title;
      assessmentEmoji = assessment.emoji;
    }
  }

  const questionsList = [...UNIVERSAL_PROFILE_QUESTIONS, ...goalQuestions];
  const currentQuestion = questionsList[currentQuestionIndex] || questionsList[0];
  
  // Determine current stage
  let currentStage = '📊 Your Report';
  if (runtimeState === 'QUESTIONNAIRE' && currentQuestion) {
    currentStage = currentQuestion.section;
  }

  // Map state to progress
  let progressPercent = 10;
  if (runtimeState === 'QUESTIONNAIRE') {
    progressPercent = 5 + (currentQuestionIndex / questionsList.length) * 90;
  }
  if (runtimeState === 'CALCULATING') progressPercent = 98;
  if (runtimeState === 'REPORT_READY') progressPercent = 100;

  // Determine if it's the first question to shrink header later
  const isFirstQuestion = currentQuestionIndex === 0;

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900 bg-slate-50 dark:bg-slate-950 print:block print:min-h-0 print:h-auto print:overflow-visible">
      {/* Premium running bar at top */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-200 dark:bg-slate-900 z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-r-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Header */}
      <header className="w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 sticky top-1.5 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="relative h-9 w-9 flex items-center justify-center">
              <img 
                src="/logo.jpg" 
                alt="WelliQo" 
                className="w-full h-full object-contain rounded-xl shadow-sm"
              />
            </div>
            <span className="font-semibold text-lg tracking-tight text-slate-900 dark:text-white">
              Welli<span className="text-emerald-500">Q</span>o
            </span>
          </Link>

          <button 
            onClick={() => setShowExitDialog(true)}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Exit Assessment</span>
            <span className="sm:hidden">Exit</span>
          </button>
        </div>

        {/* Hero Header for Assessment */}
        {runtimeState === 'QUESTIONNAIRE' && (
          <div className={`bg-emerald-50 dark:bg-emerald-950/20 transition-all duration-500 ${isFirstQuestion ? 'pt-3 pb-2 sm:pt-4 sm:pb-3' : 'pt-2 pb-1 sm:pt-3 sm:pb-2'}`}>
            <div className="max-w-3xl mx-auto px-4 text-center">
              
              {/* Desktop Title & Subtitle */}
              <div className="hidden sm:block">
                <h1 className={`font-semibold text-slate-900 dark:text-emerald-50 flex justify-center items-center gap-2 transition-all ${isFirstQuestion ? 'text-xl' : 'text-lg'}`}>
                  <span>{assessmentEmoji}</span> {assessmentTitle} Assessment
                </h1>
                {isFirstQuestion && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 animate-in fade-in slide-in-from-top-1">
                    Let's understand your current health and build your personalized plan.
                  </p>
                )}
              </div>

              {/* Mobile Title */}
              <div className={`sm:hidden transition-all ${isFirstQuestion ? 'mb-2' : 'mb-1'}`}>
                <h1 className="text-lg font-bold text-slate-900 dark:text-emerald-50 flex justify-center items-center gap-2">
                  <span>{assessmentEmoji}</span> {assessmentTitle}
                </h1>
              </div>
              
              {/* Stats Bar */}
              <div className={`flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 font-medium text-slate-500 dark:text-emerald-300/70 transition-all ${isFirstQuestion ? 'mt-2 sm:mt-3 text-xs sm:text-sm' : 'mt-1 text-xs'}`}>
                
                {/* Desktop Badges - Hide after Q1 to save space */}
                {isFirstQuestion && (
                  <>
                    <div className="hidden sm:flex items-center gap-4 animate-in fade-in">
                      <span className="flex items-center gap-1">🔒 Private</span>
                      <span className="text-slate-300 dark:text-slate-700">|</span>
                      <span className="flex items-center gap-1">🧠 Science-backed</span>
                    </div>
                    <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
                  </>
                )}
                
                {/* Unified Progress Badge */}
                <div className={`flex items-center gap-2 text-emerald-700 dark:text-emerald-400 bg-emerald-100/50 dark:bg-emerald-900/30 rounded-full font-semibold transition-all ${isFirstQuestion ? 'px-3 py-1 sm:py-1.5' : 'px-2.5 py-0.5 sm:py-1'}`}>
                  <span>{Math.round(progressPercent)}%</span>
                  <span className="hidden sm:inline">Complete</span>
                  <span>•</span>
                  <span>{Math.max(1, Math.ceil((100 - progressPercent) / 100 * 3))} min</span>
                  <span className="hidden sm:inline">remaining</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Progress Journey Map */}
        {runtimeState === 'QUESTIONNAIRE' && (
          <div className="bg-emerald-50 dark:bg-emerald-950/20 border-b border-emerald-100 dark:border-emerald-900/50 pb-2 sm:pb-3">
            
            {/* Desktop Journey */}
            <div className="hidden sm:flex max-w-5xl mx-auto px-4 items-center justify-center space-x-2">
              {STAGES.map((stage, i) => {
                const isActive = stage === currentStage;
                const isPast = STAGES.indexOf(currentStage) > i;
                
                return (
                  <div key={stage} className="flex items-center">
                    <div className={`
                      text-sm px-3 py-1.5 rounded-full transition-colors whitespace-nowrap
                      ${isActive ? 'bg-emerald-600 text-white font-bold shadow-sm scale-105 transform origin-center' : 
                        isPast ? 'font-semibold text-emerald-700 dark:text-emerald-400' : 'font-medium text-slate-400 dark:text-slate-500'}
                    `}>
                      {stage}
                    </div>
                    {i < STAGES.length - 1 && (
                      <span className={`mx-2 text-xs ${isPast || isActive ? 'text-emerald-400 dark:text-emerald-500' : 'text-slate-300 dark:text-slate-700'}`}>
                        →
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Journey (Minimal) */}
            <div className="sm:hidden px-4 text-center mt-1">
              <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                Stage {Math.max(1, STAGES.indexOf(currentStage) + 1)} of {STAGES.length}
              </div>
              <div className="text-sm font-bold text-slate-800 dark:text-emerald-50">
                {currentStage.replace(/^[^\w\s]+/, '').trim()} {/* Removes emoji for cleaner mobile view */}
              </div>
            </div>
            
          </div>
        )}
      </header>

      <main className="flex-1 flex flex-col min-h-0 bg-slate-50 dark:bg-slate-950 print:block print:min-h-0 print:h-auto print:overflow-visible">{children}</main>

      {/* Exit Dialog */}
      {showExitDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl max-w-sm w-full p-6 animate-in zoom-in-95 duration-200">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Pause Assessment?</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Your progress has been saved securely. You can resume exactly where you left off later.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowExitDialog(false)}
                className="flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-xl transition-colors"
              >
                Stay
              </button>
              <button
                onClick={() => router.push('/dashboard')}
                className="flex-1 px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium rounded-xl transition-colors"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
