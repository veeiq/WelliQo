import React from 'react';
import type { BaseContent } from '@welliqo/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface OneNextStepProps {
  habit: BaseContent | null;
}

export function OneNextStep({ habit }: OneNextStepProps) {
  if (!habit) return null;

  return (
    <section className="w-full max-w-3xl mx-auto px-6 -mt-8 relative z-20">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-indigo-100/50 dark:shadow-none border border-slate-100 dark:border-slate-800 p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-medium text-slate-900 dark:text-slate-50">Your One Next Step</h2>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
          {habit.title}
        </h3>
        
        {/* We would typically render MDX here. For Sprint 5 we mock the raw text to focus on UX */}
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          Tomorrow morning, within 30 minutes of waking up, step outside for 5 minutes. That's it. Do not look at your phone first. Let the natural light hit your eyes.
        </p>

        <button className="group flex items-center justify-center gap-2 w-full md:w-auto bg-slate-900 hover:bg-slate-800 dark:bg-slate-50 dark:hover:bg-white text-white dark:text-slate-900 text-lg font-medium py-4 px-8 rounded-full transition-all duration-300">
          I'll Try This
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
