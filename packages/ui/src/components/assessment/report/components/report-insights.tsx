import React, { useState } from 'react';
import type { ReportInsightCard } from '../types';
import { ChevronDown } from 'lucide-react';

interface ReportInsightsProps {
  insights: ReportInsightCard[];
}

export function ReportInsights({ insights }: ReportInsightsProps) {
  if (insights.length === 0) return null;

  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-6">
      <div className="mb-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-3">Core Insights</h2>
        <p className="text-slate-600 dark:text-slate-400">Here are some patterns we noticed in your daily routine.</p>
      </div>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <InsightCard key={insight.id} insight={insight} index={index} />
        ))}
      </div>
    </section>
  );
}

function InsightCard({ insight, index }: { insight: ReportInsightCard; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDelay: `${(index + 5) * 100}ms`, animationFillMode: 'both' }}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/50 rounded-2xl"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-slate-800 dark:text-slate-200 pr-4">
          {insight.description}
        </span>
        <div className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div 
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/50 mt-2">
            <p className="mb-2 font-medium text-slate-700 dark:text-slate-300 pt-4">Why this matters:</p>
            <p className="leading-relaxed">{insight.whyItMatters}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
