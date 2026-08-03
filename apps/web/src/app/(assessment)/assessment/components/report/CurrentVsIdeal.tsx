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
  const currentSleep = answers.sleep_hours ? `${answers.sleep_hours} hrs` : 'N/A';
  const idealSleep = '7-9 hrs';

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">Current vs. Ideal</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard label="Current Weight" value={currentWeight} icon="⚖️" />
        <MetricCard label="Ideal Range" value={idealWeight} icon="✨" highlight />
        
        <MetricCard label="Current BMI" value={metrics.bmi} icon="📊" />
        <MetricCard label="Body Fat (Est.)" value={`${metrics.fatPercentage}%`} icon="🔥" />
        
        {answers.sleep_hours && (
          <>
            <MetricCard label="Avg. Sleep" value={currentSleep} icon="😴" />
            <MetricCard label="Ideal Sleep" value={idealSleep} icon="🌙" highlight />
          </>
        )}
      </div>
    </div>
  );
}

function MetricCard({ label, value, icon, highlight = false }: { label: string, value: string, icon: string, highlight?: boolean }) {
  return (
    <div className={`p-4 rounded-2xl flex flex-col justify-between h-32 ${highlight ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30' : 'bg-slate-50 dark:bg-slate-800/50'}`}>
      <div className="flex justify-between items-start">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</span>
        <span className="text-lg opacity-70">{icon}</span>
      </div>
      <div className={`text-2xl font-bold mt-2 ${highlight ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-900 dark:text-slate-50'}`}>
        {value}
      </div>
    </div>
  );
}
