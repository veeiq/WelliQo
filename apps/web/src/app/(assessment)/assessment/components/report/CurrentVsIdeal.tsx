import React from 'react';
import { CalculatedMetrics, AssessmentData, MetricCardData } from '../../../../../store/assessment-store';

const cn = (...classes: (string | boolean | undefined | null)[]) => classes.filter(Boolean).join(' ');

export function CurrentVsIdeal({ 
  metrics, 
  data, 
  answers,
  timeline
}: { 
  metrics: CalculatedMetrics, 
  data: AssessmentData,
  answers: Record<string, any>,
  timeline?: string
}) {
  // Lead-gen focused phrasing based on the gap
  let headline = "Your Target Health Range";
  let subheadline = "Here is the baseline we need to work from.";
  
  if (metrics.weightDifferenceKg > 0) {
    const formattedDiff = `≈${Math.abs(metrics.weightDifferenceKg).toFixed(1)}`;
    if (metrics.weightDirection === 'lose') {
      headline = `You have ${formattedDiff} kg of excess weight holding you back.`;
      subheadline = "By addressing this, we can dramatically improve your energy, digestion, and overall wellness.";
    } else if (metrics.weightDirection === 'gain') {
      headline = `We need to build ${formattedDiff} kg of healthy mass.`;
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        {metrics.metricCards?.map(card => (
          <MetricCard key={card.id} card={card} />
        ))}
      </div>
      
      {timeline && (
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span className="text-slate-600 dark:text-slate-400 font-medium">Estimated Timeline</span>
            <div className="text-left sm:text-right">
              <span className="text-xl font-bold text-slate-900 dark:text-slate-50 block">{timeline}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 block">Assuming consistent lifestyle changes.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MetricCard({ card }: { card: MetricCardData }) {
  const isDanger = card.status === 'danger';
  const isWarning = card.status === 'warning';
  const isGood = card.status === 'good';

  return (
    <div className={cn(
      "p-5 rounded-2xl flex flex-col h-auto bg-slate-50 dark:bg-slate-800/50 border border-transparent transition-colors",
      isGood && "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-900/30",
      isWarning && "bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-900/30",
      isDanger && "bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30"
    )}>
      <div className="flex justify-between items-start mb-1">
        <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">{card.title}</span>
        {card.sourceType && (
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 uppercase tracking-wide">
            {card.sourceType}
          </span>
        )}
      </div>
      
      {card.sourceExplanation && (
        <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 leading-tight">
          {card.sourceExplanation}
        </div>
      )}

      <div className="flex items-end gap-2 mb-4">
        <div className={cn(
          "text-3xl font-bold tracking-tight",
          isGood ? "text-emerald-700 dark:text-emerald-400" : 
          isWarning ? "text-amber-700 dark:text-amber-400" : 
          isDanger ? "text-red-700 dark:text-red-400" : 
          "text-slate-900 dark:text-slate-50"
        )}>
          {card.current}
        </div>
      </div>
      
      <div className="space-y-2 mt-auto">
        <div className="flex justify-between text-xs sm:text-sm border-b border-slate-200 dark:border-slate-700/50 pb-1">
          <span className="text-slate-500 dark:text-slate-400">Ideal:</span>
          <span className="font-medium text-slate-700 dark:text-slate-300">{card.ideal}</span>
        </div>
        
        {card.clinicalMeaning && (
          <div className="flex justify-between text-xs sm:text-sm border-b border-slate-200 dark:border-slate-700/50 pb-1">
            <span className="text-slate-500 dark:text-slate-400">Clinical Meaning:</span>
            <span className={cn("font-semibold text-right max-w-[60%]", 
              isWarning ? "text-amber-600 dark:text-amber-400" : 
              isDanger ? "text-red-600 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400"
            )}>
              {isWarning || isDanger ? '↓ ' : '✓ '}{card.clinicalMeaning}
            </span>
          </div>
        )}

        {card.primaryFocus && (
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-slate-500 dark:text-slate-400">Primary Focus:</span>
            <span className="font-medium text-slate-800 dark:text-slate-200">{card.primaryFocus}</span>
          </div>
        )}
      </div>
      
      {(!card.clinicalMeaning && !card.primaryFocus) && (
        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700/50">
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
            {card.meaning}
          </p>
        </div>
      )}
    </div>
  );
}
