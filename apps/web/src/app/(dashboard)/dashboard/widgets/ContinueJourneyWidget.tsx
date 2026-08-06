import React from 'react';
import { WidgetCard, WidgetCardHeader } from './WidgetCard';
import Link from 'next/link';
import { AssessmentRegistry } from '@/assessments/registry';

export function ContinueJourneyWidget() {
  const nextAssessment = AssessmentRegistry.getNextAssessment();
  return (
    <WidgetCard>
      <WidgetCardHeader title="Continue Your Journey" subtitle="Check in with your body" />
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-slate-700 dark:text-slate-300 mb-6 font-medium">
          Take your monthly wellness assessment to track your progress and get updated recommendations.
        </p>
        <Link href={AssessmentRegistry.getRoute(nextAssessment)} className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-4 py-3 rounded-xl text-center font-semibold transition-colors border border-slate-200 dark:border-slate-700">
          Start Assessment
        </Link>
      </div>
    </WidgetCard>
  );
}
