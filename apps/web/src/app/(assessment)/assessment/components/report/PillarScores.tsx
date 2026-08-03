import React from 'react';
import { CalculatedMetrics, PillarScore } from '../../../../../store/assessment-store';

export function PillarScores({ metrics }: { metrics: CalculatedMetrics }) {
  if (!metrics.pillarScores) return null;

  // Sort by score to highlight strengths and weaknesses
  const sorted = [...metrics.pillarScores].sort((a, b) => b.score - a.score);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">12 Pillars of Wellness</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Your holistic health breakdown based on clinical algorithms.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {sorted.map((pillar) => (
          <PillarBar key={pillar.id} pillar={pillar} />
        ))}
      </div>
    </div>
  );
}

function PillarBar({ pillar }: { pillar: PillarScore }) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-emerald-500';
    if (score >= 50) return 'bg-amber-400';
    return 'bg-rose-500';
  };

  const getTextClass = (score: number) => {
    if (score >= 80) return 'text-emerald-700 dark:text-emerald-400';
    if (score >= 50) return 'text-amber-700 dark:text-amber-400';
    return 'text-rose-700 dark:text-rose-400';
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm font-medium">
        <div className="flex items-center gap-2">
          <span>{pillar.icon}</span>
          <span className="text-slate-700 dark:text-slate-200">{pillar.label}</span>
        </div>
        <span className={getTextClass(pillar.score)}>{pillar.score}/100</span>
      </div>
      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${getScoreColor(pillar.score)} transition-all duration-1000 ease-out`}
          style={{ width: `${pillar.score}%` }}
        />
      </div>
    </div>
  );
}
