import React from 'react';
import type { ReportFirstStepData } from '../types';
import { Target } from 'lucide-react';

interface ReportFirstStepProps {
  firstStep: ReportFirstStepData | null;
}

export function ReportFirstStep({ firstStep }: ReportFirstStepProps) {
  if (!firstStep) return null;

  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-6">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-100 dark:border-indigo-900/50 p-8 md:p-12 rounded-3xl shadow-sm relative overflow-hidden animate-in fade-in zoom-in-95 duration-1000">
        
        <div className="absolute top-0 right-0 -mt-8 -mr-8 text-indigo-100 dark:text-indigo-900/30 transition-transform duration-1000 hover:scale-110 hover:rotate-12">
          <Target className="w-48 h-48 opacity-50" />
        </div>

        <div className="relative z-10">
          <h2 className="text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-4">
            Your First Step Tomorrow
          </h2>
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-4 text-balance">
            {firstStep.title}
          </h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-xl leading-relaxed">
            {firstStep.description}
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/60 dark:bg-slate-900/60 p-4 rounded-xl border border-white/20 dark:border-slate-800/20 backdrop-blur-sm shadow-sm">
              <span className="block text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold mb-1">Effort</span>
              <span className="font-medium text-slate-800 dark:text-slate-200">{firstStep.effort}</span>
            </div>
            <div className="bg-white/60 dark:bg-slate-900/60 p-4 rounded-xl border border-white/20 dark:border-slate-800/20 backdrop-blur-sm shadow-sm">
              <span className="block text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold mb-1">Impact</span>
              <span className="font-medium text-slate-800 dark:text-slate-200">{firstStep.impact}</span>
            </div>
          </div>
          
          {Boolean(firstStep.whyItMatters) && (
            <div className="text-sm text-slate-600 dark:text-slate-400 italic mb-8 max-w-2xl leading-relaxed">
              Why this matters: {firstStep.whyItMatters}
            </div>
          )}

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/30 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Commit to this step
          </button>
        </div>
      </div>
    </section>
  );
}
