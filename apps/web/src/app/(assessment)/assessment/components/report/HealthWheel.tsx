import React from 'react';
import { PillarScore } from '../../../../../store/assessment-store';

interface HealthWheelProps {
  pillarScores: PillarScore[];
}

export function HealthWheel({ pillarScores }: HealthWheelProps) {
  // Sort to ensure consistent order (Nutrition, Movement, Recovery, Mindset)
  const order = ['Nutrition', 'Movement', 'Recovery', 'Mindset'];
  const sortedScores = [...pillarScores].sort((a, b) => order.indexOf(a.label) - order.indexOf(b.label));

  const getColorClass = (score: number) => {
    if (score >= 90) return 'bg-emerald-500';
    if (score >= 75) return 'bg-green-500';
    if (score >= 60) return 'bg-amber-500';
    if (score >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getTextColorClass = (score: number) => {
    if (score >= 90) return 'text-emerald-700 dark:text-emerald-400';
    if (score >= 75) return 'text-green-700 dark:text-green-400';
    if (score >= 60) return 'text-amber-700 dark:text-amber-400';
    if (score >= 40) return 'text-orange-700 dark:text-orange-400';
    return 'text-red-700 dark:text-red-400';
  };

  // Find two lowest for the actionable insight
  const lowestPillars = [...pillarScores].sort((a, b) => a.score - b.score);
  const lowest1 = lowestPillars[0]?.label || 'Nutrition';
  const lowest2 = lowestPillars[1]?.label || 'Recovery';

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
        Your Health Wheel
      </h3>
      
      <div className="space-y-6">
        {sortedScores.map((pillar) => (
          <div key={pillar.id} className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-700 dark:text-slate-300">{pillar.label}</span>
              <span className={getTextColorClass(pillar.score)}>{pillar.score}/100</span>
            </div>
            <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
              <div 
                className={`h-full transition-all duration-1000 ease-out ${getColorClass(pillar.score)}`}
                style={{ width: `${pillar.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
          Focus on <span className="text-slate-900 dark:text-slate-200 font-bold">{lowest1}</span> and <span className="text-slate-900 dark:text-slate-200 font-bold">{lowest2}</span> first. Improvements here are likely to produce the greatest overall benefit.
        </p>
      </div>
    </div>
  );
}
