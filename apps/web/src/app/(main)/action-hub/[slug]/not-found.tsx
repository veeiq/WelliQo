import React from 'react';
import Link from 'next/link';
import { FileQuestion, ArrowRight } from 'lucide-react';

export default function ActionHubNotFound() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 bg-slate-200 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500 mb-6">
        <FileQuestion className="w-8 h-8" />
      </div>
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
        Playbook Not Found
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
        We couldn&apos;t find this part of your playbook. It might have been moved or removed.
      </p>
      <Link
        href="/"
        className="group flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
      >
        Back to Dashboard
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
