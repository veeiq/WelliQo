'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessment-store';
import { AssessmentRegistry } from '@/assessments/registry';
import { SimpleQuestionnaire } from './components/SimpleQuestionnaire';
import { ProfileIntercept } from './components/ProfileIntercept';

export function AssessmentClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { runtimeState, setAssessmentId } = useAssessmentStore();

  useEffect(() => {
    // Check for goal pre-selection in URL (legacy support) or id
    const id = searchParams.get('id');
    const legacyGoal = searchParams.get('goal');
    
    if (id && runtimeState === 'GOAL_SELECTION') {
        setAssessmentId(id);
    } else if (legacyGoal && runtimeState === 'GOAL_SELECTION') {
        setAssessmentId(legacyGoal);
    } else if (!id && !legacyGoal && runtimeState === 'GOAL_SELECTION') {
        router.push(AssessmentRegistry.getDirectoryRoute());
    }
  }, [searchParams, runtimeState, setAssessmentId, router]);

  useEffect(() => {
    if (runtimeState === 'REPORT_READY') {
      router.push(AssessmentRegistry.getReportRoute());
    }
  }, [runtimeState, router]);

  if (runtimeState === 'GOAL_SELECTION') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center animate-in fade-in duration-1000">
        <div className="w-12 h-12 border-2 border-slate-200 border-t-emerald-500 rounded-full animate-spin opacity-50"></div>
      </div>
    );
  }

  if (runtimeState === 'PROFILE_INTERCEPT') {
    return <ProfileIntercept />;
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
