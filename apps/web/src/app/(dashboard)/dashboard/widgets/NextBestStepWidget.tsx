import React from 'react';
import { WidgetCard } from './WidgetCard';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { AssessmentRegistry } from '@/assessments/registry';

import { DashboardState, getLatestBreakdown } from '../actions';

export async function AdaptiveActionWidget({ state }: { state: DashboardState }) {
  if (state === 'NEW_USER') {
    return (
      <WidgetCard>
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold text-sm uppercase tracking-wider">Welcome to WelliQo</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Start your first assessment to unlock:</h3>
            <ul className="space-y-2 mb-4 text-slate-600 dark:text-slate-400 text-sm font-medium">
              <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Wellness Score</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Health Wheel</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Personalized Roadmap</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Progress Tracking</li>
            </ul>
          </div>
          <Link href="/assessments" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2.5 rounded-xl text-center font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm mt-4">
            Start Assessment
          </Link>
        </div>
      </WidgetCard>
    );
  }

  // Populated state: Next Best Step based on lowest pillar
  const breakdown = await getLatestBreakdown();
  let lowestPillar = breakdown ? [...breakdown].sort((a, b) => a.score - b.score)[0] : null;

  // Use AssessmentRegistry to find an assessment that targets this pillar
  const allAssessments = AssessmentRegistry.getAll();
  const nextAssessment = allAssessments.find(a => a.status === 'available' && a.id !== 'core_health') || allAssessments[0]; // naive fallback
  // In a real implementation, we might map pillar -> assessment more accurately
  
  return (
    <WidgetCard>
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold text-sm uppercase tracking-wider">Next Best Step</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Focus on {lowestPillar ? lowestPillar.label : 'Wellness'}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Based on your recent assessment, focusing on {lowestPillar ? lowestPillar.label.toLowerCase() : 'this area'} will yield the highest overall wellness improvement.
          </p>
        </div>
        <Link href={AssessmentRegistry.getRoute(nextAssessment!.id)} className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2.5 rounded-xl text-center font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm mt-4">
          Start {nextAssessment!.title}
        </Link>
      </div>
    </WidgetCard>
  );
}

export function NextBestStepSkeleton() {
  return (
    <WidgetCard className="bg-emerald-50/50">
      <div className="animate-pulse">
        <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded mb-2"></div>
        <div className="h-3 w-32 bg-slate-200 dark:bg-slate-800 rounded mb-6"></div>
        <div className="flex gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
          <div className="h-6 w-40 bg-slate-200 dark:bg-slate-800 rounded"></div>
        </div>
        <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded mb-4 ml-11"></div>
        <div className="h-10 w-32 bg-slate-200 dark:bg-slate-800 rounded-xl ml-11"></div>
      </div>
    </WidgetCard>
  );
}
