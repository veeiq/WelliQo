import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface ScaleInputProps {
  value: number | undefined;
  onChangeValue: (value: number) => void;
  disabled?: boolean;
}

export function ScaleInput({ value, onChangeValue, disabled }: Readonly<ScaleInputProps>) {
  const scale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex flex-wrap gap-2">
      {scale.map((num) => (
        <button
          key={num}
          type="button"
          disabled={disabled}
          onClick={() => onChangeValue(num)}
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-lg border font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
            value === num
              ? 'border-brand bg-brand/5 text-brand'
              : 'border-border bg-card text-foreground hover:bg-black/5 dark:hover:bg-white/5',
            disabled && 'pointer-events-none opacity-50',
          )}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
