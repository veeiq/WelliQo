import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface ImageSelectionProps {
  options: { id: string; label: string; value: any; image?: string }[];
  value: any;
  onChange: (value: any) => void;
  disabled?: boolean;
}

export function ImageSelection({ options, value, onChange, disabled }: Readonly<ImageSelectionProps>) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3" role="radiogroup">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          disabled={disabled}
          onClick={() => onChange(option.value)}
          role="radio"
          aria-checked={value === option.value}
          className={cn(
            'flex flex-col items-center gap-2 rounded-lg border p-2 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
            value === option.value
              ? 'border-brand bg-brand/5'
              : 'border-border bg-card hover:bg-black/5 dark:hover:bg-white/5',
            disabled && 'pointer-events-none opacity-50'
          )}
        >
          {option.image ? (
            <div className="aspect-square w-full overflow-hidden rounded-md bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={option.image} alt={option.label} className="h-full w-full object-cover" />
            </div>
          ) : (
            <div className="aspect-square w-full rounded-md bg-muted" />
          )}
          <span className="text-sm font-medium">{option.label}</span>
        </button>
      ))}
    </div>
  );
}
