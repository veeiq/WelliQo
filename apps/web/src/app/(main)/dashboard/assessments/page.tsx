'use client';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

export default function AssessmentsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950 p-6 text-center">
      <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
        <Clock className="w-8 h-8" />
      </div>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        Assessments
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">
        This module is scheduled for V2. We are building the infrastructure for it now!
      </p>
      <Link 
        href="/dashboard"
        className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20"
      >
        <ArrowLeft className="w-5 h-5" />
        Return to Dashboard
      </Link>
    </div>
  );
}
