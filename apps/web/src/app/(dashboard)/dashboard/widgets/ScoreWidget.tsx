import React from 'react';
import { getLatestScore } from '../actions';
import { WidgetCard, WidgetCardHeader } from './WidgetCard';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { AssessmentRegistry } from '@/assessments/registry';

import { DashboardState } from '../actions';

export async function ScoreWidget({ state }: { state: DashboardState }) {
  if (state === 'NEW_USER') {
    return (
      <WidgetCard className="bg-gradient-to-br from-emerald-500 to-teal-700 text-white border-0 row-span-2">
        <WidgetCardHeader title="Wellness Score" subtitle="No assessment found" />
        <div className="flex-1 flex flex-col items-center justify-center py-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">?</span>
          </div>
          <p className="mb-6 opacity-90">Take your first assessment to unlock your wellness score.</p>
          <Link href="/assessments" className="bg-white text-emerald-700 px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-50 transition-colors w-full text-center">
            Start Now
          </Link>
        </div>
      </WidgetCard>
    );
  }

  const data = await getLatestScore();
  if (!data) return null;
  return (
    <WidgetCard className="bg-gradient-to-br from-emerald-500 to-teal-700 text-white border-0 row-span-2">
      <WidgetCardHeader title="Wellness Score" />
      <div className="flex-1 flex flex-col items-center justify-center py-4 text-center relative">
        <svg className="w-32 h-32 transform -rotate-90">
          <circle cx="64" cy="64" r="60" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/20" />
          <circle 
            cx="64" cy="64" r="60" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="8" 
            strokeDasharray={2 * Math.PI * 60} 
            strokeDashoffset={2 * Math.PI * 60 * (1 - data.score / 100)} 
            strokeLinecap="round" 
            className="text-white drop-shadow-md" 
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-bold tracking-tight">{data.score}</span>
        </div>
        
        <div className="mt-6">
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm mb-2">
            {data.status}
          </span>
          <p className="text-sm opacity-90 font-medium">{data.label}</p>
        </div>
      </div>
    </WidgetCard>
  );
}

export function ScoreWidgetSkeleton() {
  return (
    <WidgetCard className="row-span-2">
      <Skeleton className="w-32 h-4 mb-8" />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Skeleton className="w-32 h-32 rounded-full mb-6" />
        <Skeleton className="w-24 h-6 rounded-full mb-2" />
        <Skeleton className="w-40 h-4 rounded-full" />
      </div>
    </WidgetCard>
  );
}
