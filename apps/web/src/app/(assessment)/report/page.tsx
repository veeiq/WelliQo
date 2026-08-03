'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ReportContainer } from '@welliqo/ui/components/assessment';
import { useAssessmentStore } from '@/store/assessment-store';

export default function ReportPage() {
  const router = useRouter();
  const { result, runtimeState } = useAssessmentStore();

  useEffect(() => {
    if (runtimeState !== 'REPORT_READY' || !result) {
      router.push('/assessment');
    }
  }, [runtimeState, result, router]);

  if (!result) {
    return <div className="min-h-screen flex items-center justify-center">Redirecting...</div>;
  }

  // SPRINT 5 INTEGRATION:
  // The Action Hub is now a distinct route (/action-hub/[slug]).
  // The ReportFirstStep component links directly to the Action Hub using the target ID.

  return (
    <>
      <ReportContainer result={result} />
    </>
  );
}
