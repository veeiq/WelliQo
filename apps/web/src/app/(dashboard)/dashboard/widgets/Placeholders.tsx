import React from 'react';
import { WidgetCard, WidgetCardHeader } from './WidgetCard';
import { Lock, Target, BookOpen } from 'lucide-react';
import { DashboardState } from '../actions';

export function TrendsWidget({ state }: { state?: DashboardState }) {
  return (
    <WidgetCard>
      <WidgetCardHeader title="Progress Trends" />
      <div className="flex-1 flex flex-col justify-center items-center text-center py-6">
        {state === 'NEW_USER' ? (
          <Lock className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-3" />
        ) : (
          <Target className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-3" />
        )}
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {state === 'NEW_USER' ? 'Track your improvements over time.' : 'Complete multiple assessments to unlock trend analysis.'}
        </p>
      </div>
    </WidgetCard>
  );
}

export function HealthLibraryWidget({ state }: { state?: DashboardState }) {
  return (
    <WidgetCard>
      <WidgetCardHeader title="Recommended Reading" />
      <div className="flex-1 flex flex-col justify-center items-center text-center py-6">
        {state === 'NEW_USER' ? (
          <Lock className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-3" />
        ) : (
          <BookOpen className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-3" />
        )}
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {state === 'NEW_USER' ? 'Unlock personalized articles.' : 'No articles matched to your profile yet.'}
        </p>
      </div>
    </WidgetCard>
  );
}

export function GoalsWidget({ state }: { state?: DashboardState }) {
  return (
    <WidgetCard>
      <WidgetCardHeader title="Active Goals" />
      <div className="flex-1 flex flex-col justify-center items-center text-center py-6">
        {state === 'NEW_USER' ? (
          <Lock className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-3" />
        ) : (
          <Target className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-3" />
        )}
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {state === 'NEW_USER' ? 'Set and track your health goals.' : 'You have no active goals yet.'}
        </p>
      </div>
    </WidgetCard>
  );
}
