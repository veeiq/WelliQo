'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessment-store';
import { mockJourney, mockEngineConfig } from '@/lib/mock-journey';
import { DynamicQuestionRenderer } from '@welliqo/ui/components/assessment';

export function AssessmentClient() {
  const router = useRouter();
  const { 
    runtimeState, 
    initialize, 
    journey, 
    progress, 
    answers, 
    recordAnswer, 
    nextStep 
  } = useAssessmentStore();

  useEffect(() => {
    if (runtimeState === 'IDLE') {
      initialize(mockEngineConfig, mockJourney as unknown as any);
    }
  }, [runtimeState, initialize]);

  useEffect(() => {
    if (runtimeState === 'REPORT_READY') {
      router.push('/report');
    }
  }, [runtimeState, router]);

  if (runtimeState === 'IDLE' || runtimeState === 'STARTING') {
    return <div className="min-h-screen flex items-center justify-center">Loading Assessment...</div>;
  }

  if (runtimeState === 'ERROR') {
    return <div className="min-h-screen flex items-center justify-center text-red-500">An error occurred during the assessment.</div>;
  }

  if (runtimeState === 'EXECUTING') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Generating your report...</h2>
        <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Find current group
  const currentSection = journey?.sections.find(s => s.id === progress?.currentSectionId);
  const currentGroup = currentSection?.questionGroups.find(g => g.id === progress?.currentGroupId);

  if (!currentGroup) {
    return <div className="min-h-screen flex items-center justify-center">No more questions. Processing...</div>;
  }

  const allAnswered = currentGroup.questions.every(q => !q.required || answers[q.id] !== undefined);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <span className="text-sm font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
            {currentSection?.title}
          </span>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 mt-2 text-balance">
            {currentGroup.title || 'Tell us about your habits'}
          </h1>
          {currentGroup.description && (
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-lg">
              {currentGroup.description}
            </p>
          )}
        </div>

        <div className="space-y-12">
          {currentGroup.questions.map(question => (
            <div key={question.id} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-6">
                {question.label}
              </h2>
              <DynamicQuestionRenderer
                question={question as unknown as React.ComponentProps<typeof DynamicQuestionRenderer>['question']}
                value={answers[question.id]}
                onChange={(val: unknown) => recordAnswer(question.id, val)}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <button
            onClick={nextStep}
            disabled={!allAnswered}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/50"
          >
            {progress?.currentSectionId && progress?.currentGroupId && !progress?.isComplete ? 'Next Step' : 'View Report'}
          </button>
        </div>
      </div>
    </div>
  );
}
