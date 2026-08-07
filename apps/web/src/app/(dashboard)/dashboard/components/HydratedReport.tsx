"use client";

import { useEffect, useState } from "react";
import { useAssessmentStore } from "@/store/assessment-store";
import { ReportDashboard } from "@/app/(assessment)/assessment/components/report/ReportDashboard";

export function HydratedReport({ 
  metrics, 
  data, 
  answers, 
  experienceBlocks,
  hideSaveAction 
}: { 
  metrics: any, 
  data: any, 
  answers: any, 
  experienceBlocks?: any,
  hideSaveAction: boolean 
}) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // We update the store with this specific report's data
    // so ReportDashboard can read it.
    useAssessmentStore.setState({
      calculatedMetrics: metrics,
      data: data,
      answers: answers,
      experienceBlocks: experienceBlocks
    });
    setIsHydrated(true);

    return () => {
      // Optional: Clean up on unmount if we don't want it sticking around,
      // but usually fine to leave it.
    };
  }, [metrics, data, answers]);

  if (!isHydrated) {
    return <div className="animate-pulse space-y-4 max-w-4xl mx-auto py-12">
      <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded w-1/3 mx-auto"></div>
      <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-1/2 mx-auto"></div>
      <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-3xl mt-8"></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-40 bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
        <div className="h-40 bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
      </div>
    </div>;
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <ReportDashboard hideActions={hideSaveAction} />
    </div>
  );
}
