'use client';

import React, { useState } from 'react';
import type { BaseContent } from '@welliqo/content';
import { Clock, Zap } from 'lucide-react';

interface ContextualSolutionsProps {
  foodFirst: BaseContent | null;
  accelerator: BaseContent | null;
  foodFirstBody?: React.ReactNode;
  acceleratorBody?: React.ReactNode;
}

export function ContextualSolutions({ foodFirst, accelerator, foodFirstBody, acceleratorBody }: ContextualSolutionsProps) {
  const [activeTab, setActiveTab] = useState<'food' | 'accelerator'>('food');

  if (!foodFirst && !accelerator) return null;

  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4">Today's Reality</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Your morning dictates your energy. Choose the option that fits your schedule today.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-2 flex flex-col md:flex-row gap-2 mb-8">
        <button
          onClick={() => setActiveTab('food')}
          className={`flex-1 flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 ${
            activeTab === 'food'
              ? 'bg-white dark:bg-slate-800 shadow-md scale-100 ring-1 ring-slate-200 dark:ring-slate-700'
              : 'hover:bg-slate-100 dark:hover:bg-slate-800/50 scale-95 opacity-70'
          }`}
        >
          <Clock className={`w-8 h-8 mb-3 ${activeTab === 'food' ? 'text-indigo-500' : 'text-slate-400'}`} />
          <span className={`text-sm font-semibold uppercase tracking-wider mb-1 ${activeTab === 'food' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}`}>
            Have 15 Minutes?
          </span>
          <span className="text-slate-900 dark:text-slate-200 font-medium">{foodFirst?.title || 'Protein Scramble'}</span>
        </button>

        <button
          onClick={() => setActiveTab('accelerator')}
          className={`flex-1 flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 ${
            activeTab === 'accelerator'
              ? 'bg-white dark:bg-slate-800 shadow-md scale-100 ring-1 ring-slate-200 dark:ring-slate-700'
              : 'hover:bg-slate-100 dark:hover:bg-slate-800/50 scale-95 opacity-70'
          }`}
        >
          <Zap className={`w-8 h-8 mb-3 ${activeTab === 'accelerator' ? 'text-emerald-500' : 'text-slate-400'}`} />
          <span className={`text-sm font-semibold uppercase tracking-wider mb-1 ${activeTab === 'accelerator' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500'}`}>
            Rushing this morning?
          </span>
          <span className="text-slate-900 dark:text-slate-200 font-medium">{accelerator?.title || 'Formula 1 Shake'}</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            {activeTab === 'food' ? foodFirst?.title : accelerator?.title}
          </h3>
          <span className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
            {activeTab === 'food' ? 'Food-first' : 'Accelerator'}
          </span>
        </div>
        
        <div className="mb-6">
          {activeTab === 'food' ? foodFirstBody : acceleratorBody}
        </div>

        <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline underline-offset-4">
          View full recipe →
        </button>
      </div>
    </section>
  );
}
