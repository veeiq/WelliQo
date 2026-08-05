import React, { Suspense } from 'react';
import { AssessmentClient } from './client';

export default function AssessmentPage() {
  return (
    <Suspense fallback={<div className="flex-1" />}>
      <AssessmentClient />
    </Suspense>
  );
}
