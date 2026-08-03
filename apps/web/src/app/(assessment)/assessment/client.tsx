'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessment-store';
import { GoalSelection } from './components/GoalSelection';
import { SimpleQuestionnaire } from './components/SimpleQuestionnaire';

export function AssessmentClient() {
  const router = useRouter();
  const { runtimeState } = useAssessmentStore();

  useEffect(() => {
    if (runtimeState === 'REPORT_READY') {
      router.push('/report');
    }
  }, [runtimeState, router]);

  if (runtimeState === 'GOAL_SELECTION') {
    return <GoalSelection />;
  }

  if (runtimeState === 'QUESTIONNAIRE') {
    return <SimpleQuestionnaire />;
  }

  if (runtimeState === 'CALCULATING') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center animate-in fade-in duration-1000">
        <div className="w-16 h-16 border-[3px] border-slate-200 border-t-emerald-500 rounded-full animate-spin"></div>
        <p className="mt-8 text-[17px] font-medium text-slate-900 dark:text-slate-100">Calculating your personalized metrics...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center animate-in fade-in duration-1000">
      <div className="w-12 h-12 border-2 border-slate-200 border-t-emerald-500 rounded-full animate-spin opacity-50"></div>
    </div>
  );
}
