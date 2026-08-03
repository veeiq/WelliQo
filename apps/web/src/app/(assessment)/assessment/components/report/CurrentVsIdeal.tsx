import React from 'react';
import { CalculatedMetrics, AssessmentData } from '../../../../../store/assessment-store';

export function CurrentVsIdeal({ 
  metrics, 
  data, 
  answers 
}: { 
  metrics: CalculatedMetrics, 
  data: AssessmentData,
  answers: Record<string, any>
}) {
  const currentWeight = data.weight ? `${data.weight} kg` : 'N/A';
  const idealWeight = metrics.idealWeight;
  
  // Lead-gen focused phrasing based on the gap
  let headline = "Your Target Health Range";
  let subheadline = "Here is the baseline we need to work from.";
  
  if (metrics.weightDifferenceKg > 0) {
    if (metrics.weightDirection === 'lose') {
      headline = `You have ${metrics.weightDifferenceKg} kg of excess weight holding you back.`;
      subheadline = "By addressing this, we can dramatically improve your energy, digestion, and overall wellness.";
    } else if (metrics.weightDirection === 'gain') {
      headline = `We need to build ${metrics.weightDifferenceKg} kg of healthy mass.`;
      subheadline = "Building lean muscle will completely transform your energy and physique.";
    }
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2 leading-tight">
          {headline}
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          {subheadline}
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        <MetricCard label="Current Weight" value={currentWeight} icon="⚖️" />
        <MetricCard label="Target Range" value={idealWeight} icon="🎯" highlight />
        <MetricCard label="Current BMI" value={metrics.bmi} icon="📊" />
        <MetricCard label="Body Fat (Est.)" value={`${metrics.fatPercentage}%`} icon="🔥" />
      </div>
    </div>
  );
}

function MetricCard({ label, value, icon, highlight = false }: { label: string, value: string, icon: string, highlight?: boolean }) {
  return (
    <div className={`p-4 rounded-2xl flex flex-col justify-between h-32 ${highlight ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 shadow-inner' : 'bg-slate-50 dark:bg-slate-800/50'}`}>
      <div className="flex justify-between items-start">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</span>
        <span className="text-lg opacity-70">{icon}</span>
      </div>
      <div className={`text-xl md:text-2xl font-bold mt-2 ${highlight ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-900 dark:text-slate-50'}`}>
        {value}
      </div>
    </div>
  );
}
