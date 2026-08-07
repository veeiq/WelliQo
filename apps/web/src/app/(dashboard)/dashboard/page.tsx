import React, { Suspense } from 'react';
import { GreetingWidget, GreetingSkeleton } from './widgets/GreetingWidget';
import { ScoreWidget, ScoreWidgetSkeleton } from './widgets/ScoreWidget';
import { FocusWidget, FocusWidgetSkeleton } from './widgets/FocusWidget';
import { AdaptiveActionWidget, NextBestStepSkeleton } from './widgets/NextBestStepWidget';
import { BreakdownWidget, BreakdownWidgetSkeleton } from './widgets/BreakdownWidget';
import { HealthLibraryWidget, GoalsWidget } from './widgets/Placeholders';
import { HistoryWidget } from './widgets/HistoryWidget';
import { HeroOnboardingWidget } from './widgets/HeroOnboardingWidget';
import { getDashboardState } from './actions';

export default async function DashboardPage() {
  const dashboardState = await getDashboardState();

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <Suspense fallback={<GreetingSkeleton />}>
        <GreetingWidget />
      </Suspense>

      {dashboardState === 'NEW_USER' ? (
        <>
          <HeroOnboardingWidget />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max mt-8 opacity-75">
            <div className="flex flex-col gap-6">
              <FocusWidget state={dashboardState} />
              <HealthLibraryWidget state={dashboardState} />
            </div>
            <div className="flex flex-col gap-6">
              <BreakdownWidget state={dashboardState} />
              <GoalsWidget state={dashboardState} />
            </div>
            <div className="flex flex-col gap-6">
              <HistoryWidget state={dashboardState} />
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {/* Top Left Area - Primary Actions */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Suspense fallback={<ScoreWidgetSkeleton />}>
              <ScoreWidget state={dashboardState} />
            </Suspense>
            <Suspense fallback={<NextBestStepSkeleton />}>
              <AdaptiveActionWidget state={dashboardState} />
            </Suspense>
          </div>

          {/* Middle Area - Secondary Actions & Focus */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Suspense fallback={<FocusWidgetSkeleton />}>
              <FocusWidget state={dashboardState} />
            </Suspense>
            <HealthLibraryWidget state={dashboardState} />
          </div>

          {/* Right Area - Breakdowns and Analytics */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Suspense fallback={<BreakdownWidgetSkeleton />}>
              <BreakdownWidget state={dashboardState} />
            </Suspense>
            <HistoryWidget state={dashboardState} />
            <GoalsWidget state={dashboardState} />
          </div>
        </div>
      )}
    </div>
  );
}
