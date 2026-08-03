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
    <div
      className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700"
      role="radiogroup"
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          disabled={disabled}
          onClick={() => onChange(option.value)}
          role="radio"
          aria-checked={value === option.value}
          className={cn(
            'group relative flex w-full items-center justify-between gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30 hover:shadow-md hover:-translate-y-0.5',
            value === option.value
              ? 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/30 shadow-sm'
              : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-emerald-200 dark:hover:border-emerald-800 hover:bg-white dark:hover:bg-slate-900',
            disabled && 'pointer-events-none opacity-50',
          )}
        >
          <div className="flex flex-col flex-1 gap-1">
            <span
              className={cn(
                'text-[17px] font-medium tracking-tight transition-colors',
                value === option.value
                  ? 'text-emerald-900 dark:text-emerald-100'
                  : 'text-slate-800 dark:text-slate-200',
              )}
            >
              {option.label}
            </span>
            {option.description && (
              <span
                className={cn(
                  'text-[15px] leading-relaxed transition-colors',
                  value === option.value
                    ? 'text-emerald-700/80 dark:text-emerald-300/80'
                    : 'text-slate-500 dark:text-slate-400',
                )}
              >
                {option.description}
              </span>
            )}
          </div>

          <div
            className={cn(
              'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300',
              value === option.value
                ? 'border-emerald-500 bg-emerald-500 text-white scale-110'
                : 'border-slate-300 dark:border-slate-700 group-hover:border-emerald-300 dark:group-hover:border-emerald-700',
            )}
          >
            {value === option.value && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3.5 h-3.5 animate-in zoom-in duration-200"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
