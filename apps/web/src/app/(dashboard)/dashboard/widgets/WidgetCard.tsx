import React from 'react';

export function WidgetCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200/50 dark:border-slate-800 flex flex-col ${className}`}>
      {children}
    </div>
  );
}

export function WidgetCardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-1">
        {title}
      </h3>
      {subtitle && <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </div>
  );
}
