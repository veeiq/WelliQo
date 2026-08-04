import React from 'react';
import { Target, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessment-store';

export function LatestInsights() {
  const { calculatedMetrics } = useAssessmentStore();

  const strength = calculatedMetrics?.strengths?.[0] || 'Excellent nutrition consistency. You make healthy food choices every day.';
  const opportunity = calculatedMetrics?.improvements?.[0] || 'Sleep quality is affecting your recovery. Let\'s improve it.';
  const habit = calculatedMetrics?.priorityPlan?.[0]?.title || 'Go to bed before 11 PM for better sleep and energy.';

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-slate-900 dark:text-white mb-6">Latest Insights</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-1">
              <span className="text-lg">💪</span> Biggest Strength
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {strength}
            </p>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-5">
            <h4 className="flex items-center gap-2 text-sm font-bold text-amber-500 mb-1">
              <AlertTriangle className="w-4 h-4" /> Biggest Opportunity
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {opportunity}
            </p>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-5">
            <h4 className="flex items-center gap-2 text-sm font-bold text-red-500 mb-1">
              <Target className="w-4 h-4" /> One Habit to Focus
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {habit}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-center">
        <Link href="/report" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
          View Full Insights <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
