'use client';

import React from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessment-store';

export default function AssessmentLayout({ children }: { children: React.ReactNode }) {
  const currentQuestion = useAssessmentStore((state) => state.currentQuestion);
  const answers = useAssessmentStore((state) => state.answers);
  const answeredQuestionIds = Object.keys(answers);

  // Estimate progress based on typical 40 question domain size (flexible UI mapping)
  const currentStep = answeredQuestionIds.length + 1;
  const estimatedTotal = 40; 
  const timeRemaining = Math.max(1, Math.ceil((estimatedTotal - currentStep) * 0.5)); // Approx 30 seconds per question

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans">
      <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">W</span>
              <span className="hidden sm:inline-block">WelliQo</span>
            </Link>
          </div>
          
          {currentQuestion && (
            <div className="hidden md:flex items-center space-x-6 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <span>Step {currentStep} of ~{estimatedTotal}</span>
                <div className="w-32 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 transition-all duration-500 ease-out" 
                    style={{ width: `${Math.min(100, (currentStep / estimatedTotal) * 100)}%` }} 
                  />
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>~{timeRemaining} min remaining</span>
              </div>
            </div>
          )}

          <div>
            <Link 
              href="/" 
              className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Save & Exit
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
}
