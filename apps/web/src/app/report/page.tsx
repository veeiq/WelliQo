'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ReportContainer } from '@welliqo/ui/components/assessment';
import { useAssessmentStore } from '@/store/assessment-store';
import { contentAdapter } from '@/lib/content';

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

  // SPRINT 4C INTEGRATION:
  // Dynamically resolve the primary recommendation into a full Action Hub using the Compiled Content Index.
  const primaryRecommendation = result.recommendations.find(r => r.type === 'ACTION');
  const actionHub = primaryRecommendation ? contentAdapter.buildActionHub(primaryRecommendation.target) : null;

  return (
    <>
      <ReportContainer result={result} />
      
      {/* SPRINT 4C PROOF: Render the resolved Action Hub from the real Knowledge Graph */}
      {actionHub && (
        <div className="max-w-3xl mx-auto p-8 mb-24 bg-slate-900 text-green-400 rounded-xl shadow-2xl overflow-x-auto text-xs font-mono">
          <h2 className="text-white text-lg font-sans mb-4">Sprint 4C Proof: Resolved Action Hub (from Compiled Knowledge Graph)</h2>
          <pre>{JSON.stringify(actionHub, null, 2)}</pre>
        </div>
      )}
    </>
  );
}
