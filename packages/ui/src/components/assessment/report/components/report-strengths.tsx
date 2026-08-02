import React from 'react';
import type { ReportStrengthCard } from '../types';
import { CheckCircle } from 'lucide-react';

interface ReportStrengthsProps {
  strengths: ReportStrengthCard[];
}

export function ReportStrengths({ strengths }: ReportStrengthsProps) {
  if (strengths.length === 0) {
    return null; // Empty state handles gracefully by skipping the section
  }

  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-6">
      <div className="mb-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-3">What You're Doing Right</h2>
        <p className="text-slate-600 dark:text-slate-400">Let's take a moment to celebrate the positive habits you've already built.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {strengths.map((strength, index) => (
          <div 
            key={strength.id} 
            className="group p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-800/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${(index + 3) * 100}ms`, animationFillMode: 'both' }}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 text-emerald-500 transition-transform duration-300 group-hover:scale-110">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">
                  {strength.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
