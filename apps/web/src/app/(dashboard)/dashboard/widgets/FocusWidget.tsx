import React from 'react';
import { getPrimaryRecommendation, DashboardState } from '../actions';
import { WidgetCard, WidgetCardHeader } from './WidgetCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Lock } from 'lucide-react';
import Link from 'next/link';

export async function FocusWidget({ state }: { state: DashboardState }) {
  if (state === 'NEW_USER') {
    return (
      <WidgetCard className="bg-slate-900 text-white border-0 opacity-90">
        <WidgetCardHeader title="Today's Focus" subtitle="Your highest priority action" />
        <div className="flex-1 flex flex-col justify-center items-center text-center py-6">
          <Lock className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-3" />
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Complete your first assessment to unlock personalized daily focus actions.
          </p>
        </div>
      </WidgetCard>
    );
  }

  const recommendation = await getPrimaryRecommendation();

  if (!recommendation) {
    return null; 
  }

  return (
    <WidgetCard className="bg-slate-900 text-white border-0">
      <WidgetCardHeader title="Today's Focus" subtitle="Your highest priority action" />
      <div className="flex-1 flex flex-col justify-between">
        <h4 className="text-xl font-bold mb-2">{recommendation.title}</h4>
        <p className="text-slate-300 text-sm mb-6 line-clamp-2">{recommendation.why}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium px-2.5 py-1 bg-white/10 rounded-md text-emerald-400 uppercase tracking-wider">
            {recommendation.difficulty || 'Priority'}
          </span>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm">
            Log Progress
          </button>
        </div>
      </div>
    </WidgetCard>
  );
}

export function FocusWidgetSkeleton() {
  return (
    <WidgetCard>
      <Skeleton className="w-32 h-4 mb-2" />
      <Skeleton className="w-48 h-3 mb-6" />
      <Skeleton className="w-full h-8 mb-2" />
      <Skeleton className="w-3/4 h-4 mb-6" />
      <div className="flex justify-between">
        <Skeleton className="w-16 h-6" />
        <Skeleton className="w-24 h-8 rounded-lg" />
      </div>
    </WidgetCard>
  );
}
