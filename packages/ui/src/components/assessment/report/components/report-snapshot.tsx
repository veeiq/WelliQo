import React from 'react';
import type { ReportSnapshotItem } from '../types';

interface ReportSnapshotProps {
  snapshot: ReportSnapshotItem[];
}

export function ReportSnapshot({ snapshot }: ReportSnapshotProps) {
  if (snapshot.length === 0) return null;

  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-6">
      <div className="mb-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-3">Your Wellness Snapshot</h2>
        <p className="text-slate-600 dark:text-slate-400">A detailed look at your specific habits.</p>
      </div>
      <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
        <div className="space-y-8">
          {snapshot.map((item) => (
            <ScoreBar key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScoreBar({ item }: { item: ReportSnapshotItem }) {
  return (
    <div className="w-full group">
      <div className="flex justify-between items-end mb-2">
        <span className="text-lg font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
          {item.title}
        </span>
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {item.percentage}/100
        </span>
      </div>
      <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-emerald-400 dark:bg-emerald-500 transition-all duration-[1500ms] ease-out rounded-full shadow-inner"
          style={{ width: `${item.percentage}%` }}
          aria-valuenow={item.percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
          aria-label={`${item.title} score`}
        />
      </div>
    </div>
  );
}
