import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface SingleChoiceProps {
  options: { id: string; label: string; value: any; description?: string }[];
  value: any;
  onChange: (value: any) => void;
  disabled?: boolean;
}

export function SingleChoice({ options, value, onChange, disabled }: Readonly<SingleChoiceProps>) {
  return (
    <div className="grid gap-3" role="radiogroup">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          disabled={disabled}
          onClick={() => onChange(option.value)}
          role="radio"
          aria-checked={value === option.value}
          className={cn(
            'flex flex-col items-start gap-1 rounded-lg border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
            value === option.value
              ? 'border-brand bg-brand/5'
              : 'border-border bg-card text-foreground hover:bg-black/5 dark:hover:bg-white/5',
            disabled && 'pointer-events-none opacity-50',
          )}
        >
          <span className="font-medium">{option.label}</span>
          {option.description && <span className="text-sm opacity-80">{option.description}</span>}
        </button>
      ))}
    </div>
  );
}
