import React from 'react';
import { useAssessmentStore } from '@/store/assessment-store';
import { UNIVERSAL_PROFILE_QUESTIONS } from '@/config/assessment-questions';

export function ProfileIntercept() {
  const { data, continueWithProfile, resetProfile } = useAssessmentStore();
  const name = data.name || 'Friend';
  
  return (
    <div className="flex-1 flex flex-col pt-12 md:pt-24 px-6 pb-24 items-center justify-center overflow-y-auto hide-scrollbar">
      <div className="w-full max-w-lg mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 text-center">
        
        <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner text-4xl">
          👋
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-50">
            Welcome back, {name}!
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-sm mx-auto">
            We already have your baseline profile saved. You can skip the basic questions and jump straight to your specific assessment.
          </p>
        </div>

        <div className="pt-4 space-y-4">
          <button
            onClick={() => {
              // Edge case: if we currently have no category questions
              const { GOAL_QUESTIONS, DEFAULT_QUESTIONS } = require('@/config/assessment-questions');
              const goalQuestions = GOAL_QUESTIONS[data.goal || 'weight'] || DEFAULT_QUESTIONS;
              
              if (goalQuestions.length === 0) {
                // Nothing else to ask, just submit
                useAssessmentStore.getState().submitQuestionnaire();
              } else {
                continueWithProfile(UNIVERSAL_PROFILE_QUESTIONS.length);
              }
            }}
            className="w-full relative group flex h-14 items-center justify-center overflow-hidden rounded-full bg-slate-900 dark:bg-white px-8 font-medium text-white dark:text-slate-900 shadow-lg shadow-slate-900/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">Continue as {name}</span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 ml-2 group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
          
          <button
            onClick={() => resetProfile()}
            className="w-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium py-3 transition-colors"
          >
            Not {name}? Start Fresh
          </button>
        </div>

      </div>
    </div>
  );
}
