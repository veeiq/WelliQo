import * as React from 'react';

export interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: Readonly<ProgressIndicatorProps>) {
  const percentage = Math.max(0, Math.min(100, (current / total) * 100));

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm font-medium text-muted">
        <span>Step {current} of {total}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-card border border-border">
        <div
          className="h-full bg-brand transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
