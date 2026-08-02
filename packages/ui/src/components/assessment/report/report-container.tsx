import React, { useMemo } from 'react';
import type { kernel } from '@welliqo/assessment-engine';
import { createReportViewModel } from './utils/view-model';

import { ReportHero } from './components/report-hero';
import { ReportStory } from './components/report-story';
import { ReportStrengths } from './components/report-strengths';
import { ReportInsights } from './components/report-insights';
import { ReportSnapshot } from './components/report-snapshot';
import { ReportActionPlan } from './components/report-action-plan';
import { ReportFirstStep } from './components/report-first-step';
import { ReportProgressPromise } from './components/report-progress-promise';
import { ReportSupport } from './components/report-support';

export interface ReportContainerProps {
  result: kernel.AssessmentResult;
}

export function ReportContainer({ result }: ReportContainerProps) {
  // Execute the adapter to generate the pure UI model
  const viewModel = useMemo(() => createReportViewModel(result), [result]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-50 overflow-x-hidden pb-24">
      {/* 1. The Welcome & Hero */}
      <ReportHero data={viewModel.hero} />

      {/* 2. Your Story */}
      <ReportStory />

      {/* 3. The Strengths */}
      <ReportStrengths strengths={viewModel.strengths} />

      {/* 4. The Core Insights */}
      <ReportInsights insights={viewModel.insights} />

      {/* 5. Your Wellness Snapshot */}
      <ReportSnapshot snapshot={viewModel.snapshot} />

      {/* 6. The Action Plan */}
      <ReportActionPlan actionPlan={viewModel.actionPlan} />

      {/* 7. Your First Step Tomorrow */}
      <ReportFirstStep firstStep={viewModel.firstStep} />

      {/* 8. The Progress Promise */}
      <ReportProgressPromise />

      {/* 9. The Support (Soft CTA) */}
      <ReportSupport support={viewModel.support} />

      {/* Footer / Compliance Disclaimer */}
      <footer className="w-full text-center py-8 text-sm text-slate-400 dark:text-slate-500 px-6">
        <p>This report is for educational purposes and is not medical advice.</p>
      </footer>
    </div>
  );
}
