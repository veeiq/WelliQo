import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number | undefined;
  onChangeValue: (value: number | undefined) => void;
}

export function NumberInput({
  value,
  onChangeValue,
  className,
  disabled,
  ...props
}: Readonly<NumberInputProps>) {
  return (
    <div className="flex justify-center w-full animate-in fade-in zoom-in-95 duration-500 py-4 md:py-8">
      <input
        type="number"
        value={value === undefined ? '' : value}
        onChange={(e) => {
          const val = e.target.value;
          onChangeValue(val === '' ? undefined : Number(val));
        }}
        disabled={disabled}
        className={cn(
          'w-full max-w-[240px] text-center text-6xl md:text-7xl font-light bg-transparent text-emerald-950 dark:text-emerald-50 border-b-[3px] border-emerald-200 dark:border-emerald-800/50 focus:border-emerald-500 focus:outline-none transition-colors pb-4 placeholder:text-slate-300 dark:placeholder:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  );
}
