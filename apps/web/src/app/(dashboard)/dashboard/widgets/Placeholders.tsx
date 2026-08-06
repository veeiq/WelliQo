import React from 'react';
import { WidgetCard, WidgetCardHeader } from './WidgetCard';
import { TrendingUp, Target, BookOpen, ChevronRight, Lock } from 'lucide-react';
import Link from 'next/link';
import { DashboardState } from '../actions';

export function TrendsWidget({ state }: { state?: DashboardState }) {
  if (state === 'NEW_USER') {
    return (
      <WidgetCard>
        <WidgetCardHeader title="Progress Trends" />
        <div className="flex-1 flex flex-col justify-center items-center text-center py-6">
          <Lock className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-3" />
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Track your improvements over time.
          </p>
        </div>
      </WidgetCard>
    );
  }

  return (
    <WidgetCard>
      <WidgetCardHeader title="Progress Trends" />
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Sleep Quality</span>
            <span className="text-xs text-emerald-500 font-medium">+15% this month</span>
          </div>
          <div className="h-8 w-16 bg-emerald-100 dark:bg-emerald-900/30 rounded flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Stress Levels</span>
            <span className="text-xs text-amber-500 font-medium">Needs attention</span>
          </div>
          <div className="h-8 w-16 bg-amber-100 dark:bg-amber-900/30 rounded flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-amber-600 dark:text-amber-400 transform rotate-45" />
          </div>
        </div>
      </div>
    </WidgetCard>
  );
}

export function HealthLibraryWidget({ state }: { state?: DashboardState }) {
  if (state === 'NEW_USER') {
    return (
      <WidgetCard>
        <WidgetCardHeader title="Health Library" />
        <div className="flex-1 flex flex-col justify-center items-center text-center py-6">
          <Lock className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-3" />
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Personalized learning based on your report.
          </p>
        </div>
      </WidgetCard>
    );
  }

  return (
    <WidgetCard>
      <WidgetCardHeader title="Health Library" subtitle="Articles tailored for you" />
      <div className="flex-1 flex flex-col items-center justify-center py-6 text-center text-slate-500 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <p className="text-sm font-medium">Save articles to build your library</p>
      </div>
    </WidgetCard>
  );
}

export function GoalsWidget({ state }: { state?: DashboardState }) {
  if (state === 'NEW_USER') {
    return (
      <WidgetCard>
        <WidgetCardHeader title="Active Goals" />
        <div className="flex-1 flex flex-col justify-center items-center text-center py-6">
          <Lock className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-3" />
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Build healthy habits one step at a time.
          </p>
        </div>
      </WidgetCard>
    );
  }

  return (
    <WidgetCard>
      <WidgetCardHeader title="Goals & Streaks" subtitle="Your active commitments" />
      <div className="flex-1 flex flex-col items-center justify-center py-6 text-center text-slate-500 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
        <span className="text-3xl mb-2">🔥</span>
        <p className="text-sm font-medium">You have a 3-day streak!</p>
      </div>
    </WidgetCard>
  );
}
