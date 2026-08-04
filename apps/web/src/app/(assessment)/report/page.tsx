'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessment-store';
import { ReportDashboard } from '../assessment/components/report/ReportDashboard';

export default function ReportPage() {
  const router = useRouter();
  const { calculatedMetrics, runtimeState } = useAssessmentStore();

  useEffect(() => {
    if (runtimeState !== 'REPORT_READY' || !calculatedMetrics) {
      router.push('/assessment');
    }
  }, [runtimeState, calculatedMetrics, router]);

  if (!calculatedMetrics) {
    return <div className="min-h-screen flex items-center justify-center">Redirecting...</div>;
  }

  return (
    <div className="flex-1 flex flex-col pt-8 md:pt-16 px-6 overflow-y-auto hide-scrollbar h-full">
      <ReportDashboard />
    </div>
  );
}
