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
    return <CalculatingScreen />;
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center animate-in fade-in duration-1000">
      <div className="w-12 h-12 border-2 border-slate-200 border-t-emerald-500 rounded-full animate-spin opacity-50"></div>
    </div>
  );
}

// ----------------------------------------------------
// Animated Calculating Screen
// ----------------------------------------------------
function CalculatingScreen() {
  const [step, setStep] = React.useState(0);

  useEffect(() => {
    // 0: Celebration, 1: Analyzing, 2: Applying rules, 3: Calculating, 4: Preparing
    const sequence = [
      { delay: 1200, next: 1 }, // Stay on Celebration longer
      { delay: 2000, next: 2 },
      { delay: 2800, next: 3 },
      { delay: 3500, next: 4 },
    ];
    
    const timers = sequence.map((s) => 
      setTimeout(() => setStep(s.next), s.delay)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const steps = [
    <>🎉 Assessment Complete!<br/><span className="text-sm font-normal text-slate-500 mt-2 block">We're preparing your personalized wellness report...</span></>,
    "Analyzing your responses...",
    "Applying clinical rules...",
    "Calculating personalized metrics...",
    "Preparing your report..."
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 animate-in fade-in duration-500 px-4 text-center min-h-0">
      <div className="relative mb-8">
        {/* Glowing ring */}
        <div className="absolute inset-0 border-[3px] border-emerald-500 rounded-full animate-ping opacity-20"></div>
        <div className="relative w-20 h-20 border-[4px] border-slate-200 dark:border-slate-800 border-t-emerald-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl">✨</span>
        </div>
      </div>
      
      <div className="h-16 relative flex justify-center w-full">
        {steps.map((content, idx) => (
          <div
            key={idx}
            className={`absolute text-lg sm:text-xl font-medium text-slate-800 dark:text-emerald-50 transition-all duration-300 ease-out ${
              step === idx 
                ? 'opacity-100 transform translate-y-0 scale-100' 
                : 'opacity-0 transform translate-y-4 scale-95 pointer-events-none'
            }`}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}
