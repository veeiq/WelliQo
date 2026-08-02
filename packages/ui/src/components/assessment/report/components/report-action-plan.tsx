import React from 'react';
import type { ReportActionCard } from '../types';
import { BookOpen, PlayCircle, Activity } from 'lucide-react';

interface ReportActionPlanProps {
  actionPlan: ReportActionCard[];
}

export function ReportActionPlan({ actionPlan }: ReportActionPlanProps) {
  if (actionPlan.length === 0) return null;

  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-6">
      <div className="mb-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-3">Your Action Plan</h2>
        <p className="text-slate-600 dark:text-slate-400">Curated steps and resources to support your journey.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actionPlan.map((action, index) => (
          <ActionCard key={action.id} action={action} index={index} />
        ))}
      </div>
    </section>
  );
}

function ActionCard({ action, index }: { action: ReportActionCard; index: number }) {
  const getIcon = () => {
    switch (action.type) {
      case 'ARTICLE': return <BookOpen className="w-5 h-5" />;
      case 'VIDEO': return <PlayCircle className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <a 
      href="#" 
      className="group flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/50 animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
    >
      <div className="flex items-center gap-3 mb-4 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors">
        {getIcon()}
        <span className="text-xs font-bold uppercase tracking-wider">{action.type}</span>
      </div>
      <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">
        {action.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 flex-grow mb-6">
        {action.description}
      </p>
      <span className="self-start text-sm font-medium text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors flex items-center gap-1">
        View Resource <span className="transform transition-transform group-hover:translate-x-1">→</span>
      </span>
    </a>
  );
}
