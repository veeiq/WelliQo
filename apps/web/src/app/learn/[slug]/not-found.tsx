import React from 'react';
import Link from 'next/link';
import { BookX, ArrowLeft } from 'lucide-react';

export default function LearnNotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-slate-400 mb-6">
        <BookX className="w-8 h-8" />
      </div>
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-4 tracking-tight">
        Knowledge Not Found
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
        We couldn&apos;t find this piece of knowledge. It might have been updated or removed.
      </p>
      <Link 
        href="/"
        className="group flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Return to Dashboard
      </Link>
    </main>
  );
}
