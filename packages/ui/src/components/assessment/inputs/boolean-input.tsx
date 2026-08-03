import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface BooleanInputProps {
  value: boolean | undefined;
  onChangeValue: (value: boolean) => void;
  disabled?: boolean;
}

export function BooleanInput({ value, onChangeValue, disabled }: Readonly<BooleanInputProps>) {
  return (
    <div className="flex gap-4">
      <button
        type="button"
        disabled={disabled}
        onClick={() => onChangeValue(true)}
        className={cn(
          'flex-1 rounded-lg border p-4 text-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
          value === true
            ? 'border-brand bg-brand/5 text-brand'
            : 'border-border bg-card text-foreground hover:bg-black/5 dark:hover:bg-white/5',
          disabled && 'pointer-events-none opacity-50',
        )}
      >
        Yes
      </button>
      <button
        type="button"
        disabled={disabled}
        onClick={() => onChangeValue(false)}
        className={cn(
          'flex-1 rounded-lg border p-4 text-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
          value === false
            ? 'border-brand bg-brand/5 text-brand'
            : 'border-border bg-card text-foreground hover:bg-black/5 dark:hover:bg-white/5',
          disabled && 'pointer-events-none opacity-50',
        )}
      >
        No
      </button>
    </div>
  );
}
