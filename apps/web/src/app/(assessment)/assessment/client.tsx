'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessment-store';
import { DynamicQuestionRenderer } from '@welliqo/ui/components/assessment';

export function AssessmentClient() {
  const router = useRouter();
  const { 
    runtimeState, 
    start, 
    currentQuestion, 
    answers, 
    recordAnswer, 
    submitAnswer, 
    continueFromTransition 
  } = useAssessmentStore();

  useEffect(() => {
    if (runtimeState === 'IDLE') {
      start();
    }
  }, [runtimeState, start]);

  useEffect(() => {
    if (runtimeState === 'REPORT_READY') {
      router.push('/report');
    }
  }, [runtimeState, router]);

  if (runtimeState === 'IDLE' || runtimeState === 'LOADING') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center animate-in fade-in duration-1000">
        <div className="w-12 h-12 border-2 border-slate-200 border-t-slate-800 dark:border-slate-800 dark:border-t-slate-200 rounded-full animate-spin opacity-50"></div>
      </div>
    );
  }

  if (runtimeState === 'ERROR') {
    return (
      <div className="flex-1 flex items-center justify-center text-red-500 font-medium">
        Something went wrong. Please refresh the page.
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="flex-1 flex items-center justify-center animate-in fade-in duration-1000">
        <div className="text-xl text-slate-500 font-light">Synthesizing your responses...</div>
      </div>
    );
  }

  if (runtimeState === 'TRANSITIONING') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto px-6 text-center animate-in fade-in zoom-in-95 duration-700">
        <div className="space-y-12">
          <h2 className="text-3xl md:text-5xl font-light text-slate-800 dark:text-slate-100 leading-relaxed text-balance">
            {currentQuestion.humanMoment || "Let's move on to the next topic."}
          </h2>
          <button
            onClick={continueFromTransition}
            className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-500/50"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  const isAnswered = answers[currentQuestion.id] !== undefined;

  return (
    <div className="flex-1 flex flex-col pt-12 md:pt-24 px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="max-w-2xl mx-auto w-full flex flex-col">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 dark:text-slate-50 leading-tight">
            {currentQuestion.label}
          </h2>
        </div>

        <div className="flex-1">
          <DynamicQuestionRenderer
            question={
              currentQuestion as unknown as React.ComponentProps<
                typeof DynamicQuestionRenderer
              >['question']
            }
            value={answers[currentQuestion.id]}
            onChange={(val: unknown) => recordAnswer(currentQuestion.id, val)}
          />
        </div>

        <div className="mt-16 flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-8 pb-12">
          <button
            onClick={() => {/* Implement Back functionality if needed later */}}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 font-medium opacity-0 pointer-events-none"
          >
            Back
          </button>
          <button
            onClick={submitAnswer}
            disabled={!isAnswered}
            className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium transition-all disabled:opacity-30 disabled:hover:scale-100 hover:scale-105 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/50 shadow-lg shadow-emerald-500/20 disabled:shadow-none"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
