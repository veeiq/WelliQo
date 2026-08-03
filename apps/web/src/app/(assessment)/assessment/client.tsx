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
    continueFromTransition,
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
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto px-6 text-center animate-in fade-in zoom-in-95 duration-1000">
        <div className="space-y-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-slate-800 dark:text-slate-100 leading-relaxed text-balance">
            {currentQuestion.humanMoment || "Let's move on to the next topic."}
          </h2>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
            <button
              onClick={continueFromTransition}
              className="group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-slate-900 dark:bg-white px-10 font-medium text-white dark:text-slate-900 transition-all hover:scale-105 active:scale-95 mx-auto shadow-xl shadow-slate-900/10"
            >
              <span className="relative z-10 text-[17px]">Continue</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 ml-3 group-hover:text-white transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isAnswered = answers[currentQuestion.id] !== undefined;

  return (
    <div className="flex-1 flex flex-col pt-8 md:pt-16 px-6 pb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="max-w-2xl mx-auto w-full flex flex-col">
        <div className="mb-16 text-center animate-in fade-in zoom-in-95 duration-1000 delay-150 fill-mode-both">
          <h2 className="text-3xl md:text-[42px] font-medium tracking-tight text-slate-900 dark:text-slate-50 leading-[1.2] text-balance">
            {currentQuestion.label}
          </h2>
          {currentQuestion.coachThinking && (
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium tracking-wide uppercase text-[11px] opacity-80 mr-1">
                  Why ask this:
                </span>
                <span className="font-normal">{currentQuestion.coachThinking}</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-center min-h-[250px] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
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

        <div className="mt-20 flex justify-center items-center animate-in fade-in duration-1000 delay-500 fill-mode-both">
          <button
            onClick={submitAnswer}
            disabled={!isAnswered}
            className="group relative flex h-[60px] items-center justify-center overflow-hidden rounded-full bg-slate-900 dark:bg-white px-12 font-medium text-white dark:text-slate-900 shadow-xl shadow-slate-900/10 dark:shadow-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 active:scale-95 disabled:pointer-events-none disabled:opacity-30 disabled:shadow-none"
          >
            <span className="relative z-10 text-[17px]">Continue</span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 ml-3 group-hover:text-white transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
