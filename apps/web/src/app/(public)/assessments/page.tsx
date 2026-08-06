import React, { Suspense } from 'react';
import { AssessmentDirectory } from './directory';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Assessments | WelliQo',
  description: 'Browse our complete directory of personalized wellness assessments.',
};

export default async function AllAssessmentsPage({ searchParams }: { searchParams: Promise<{ goal?: string }> }) {
  const params = await searchParams;
  const initialGoal = params.goal;

  return (
    <div className="container mx-auto px-4 pt-4 pb-12 max-w-7xl">
      <div className="mb-8 text-center mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl text-balance">
          Wellness Assessments
        </h1>
      </div>
      <Suspense fallback={<div className="w-full text-center py-10">Loading...</div>}>
        <AssessmentDirectory initialGoal={initialGoal} />
      </Suspense>
    </div>
  );
}
