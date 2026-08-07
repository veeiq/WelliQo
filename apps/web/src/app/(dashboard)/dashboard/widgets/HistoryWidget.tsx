import React from 'react';
import { WidgetCard, WidgetCardHeader } from './WidgetCard';
import { AssessmentRegistry } from '@/assessments/registry';
import { Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { DashboardState } from '../actions';
import { getUserHistory } from '../actions';
import { extractMetrics } from '@/repositories/assessment-repository';

export async function HistoryWidget({ state }: { state: DashboardState }) {
  if (state === 'NEW_USER') {
    return (
      <WidgetCard>
        <WidgetCardHeader title="Assessment History" />
        <div className="flex-1 flex flex-col justify-center items-center text-center py-6">
          <Lock className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-3" />
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Take an assessment to unlock your history.
          </p>
        </div>
      </WidgetCard>
    );
  }

  const allHistory = await getUserHistory();
  
  // Rule: if multiple times same assessment taken show the latest
  const latestByAssessment = new Map();
  for (const report of allHistory) {
    if (!latestByAssessment.has(report.assessmentId)) {
      latestByAssessment.set(report.assessmentId, report);
    }
  }
  const uniqueReports = Array.from(latestByAssessment.values());

  return (
    <WidgetCard className="overflow-hidden flex flex-col">
      <WidgetCardHeader 
        title="Assessment History" 
        subtitle="Your latest wellness reports"
        action={
          <Link href="/dashboard/history" className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        }
      />
      
      {/* Scrollable container for multiple cards, or single card if only one */}
      <div className={`flex gap-4 pb-2 mt-2 ${uniqueReports.length > 1 ? 'overflow-x-auto snap-x snap-mandatory' : ''}`}>
        {uniqueReports.map((report: any) => {
          const metrics = extractMetrics(report.clinicalReport);
          const score = metrics?.overallScore || 0;
          const status = (metrics?.scoreMeaning || '').split(' - ')[0] || metrics?.scoreMeaning || 'Completed';
          
          return (
            <Link 
              key={report.id}
              href={`/dashboard/report/${report.id}`}
              className={`block bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 hover:border-emerald-500 hover:shadow-md transition-all group shrink-0 ${uniqueReports.length > 1 ? 'w-64 snap-center' : 'w-full'}`}
            >
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                {report.assessmentName || 'General Wellness'}
              </h4>
              
              <div className="flex items-center gap-1 mb-4">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" /> Completed
                </span>
              </div>
              
              <div className="flex items-end justify-between mt-auto">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-slate-900 dark:text-white">{score || '--'}</span>
                    <span className="text-slate-500 text-xs font-semibold">/ 100</span>
                  </div>
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold text-xs mt-0.5">
                    {status}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </div>
            </Link>
          );
        })}
      </div>
    </WidgetCard>
  );
}
