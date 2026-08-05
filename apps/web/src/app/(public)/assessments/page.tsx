import React from 'react';
import { AssessmentDirectory } from './directory';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Assessments | WelliQo',
  description: 'Browse our complete directory of personalized wellness assessments.',
};

export default function AllAssessmentsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
          Wellness Assessment Directory
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Explore our comprehensive library of science-informed assessments. Find the perfect starting point for your wellness journey.
        </p>
      </div>
      <AssessmentDirectory />
    </div>
  );
}
