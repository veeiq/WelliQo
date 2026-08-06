import React from 'react';
import { DashboardState, getLatestBreakdown } from '../actions';
import { WidgetCard, WidgetCardHeader } from './WidgetCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Lock } from 'lucide-react';
import Link from 'next/link';

export async function BreakdownWidget({ state }: { state: DashboardState }) {
  if (state === 'NEW_USER') {
    return (
      <WidgetCard>
        <WidgetCardHeader title="Latest Breakdown" />
        <div className="flex-1 flex flex-col justify-center items-center text-center py-6">
          <Lock className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-3" />
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Discover your strongest and weakest health areas.
          </p>
        </div>
      </WidgetCard>
    );
  }

  const breakdown = await getLatestBreakdown();

  if (!breakdown) return null;

  return (
    <WidgetCard>
      <WidgetCardHeader title="Latest Breakdown" />
      <div className="flex flex-col gap-4">
        {breakdown.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="flex justify-between items-end mb-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 capitalize">{item.label}</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{item.score}</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
              <div 
                className="bg-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${item.score}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}

export function BreakdownWidgetSkeleton() {
  return (
    <WidgetCard>
      <Skeleton className="w-32 h-4 mb-6" />
      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <Skeleton className="w-20 h-3" />
              <Skeleton className="w-6 h-3" />
            </div>
            <Skeleton className="w-full h-2 rounded-full" />
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
