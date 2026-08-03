import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChangeValue: (value: string) => void;
}

export function TextInput({
  value,
  onChangeValue,
  className,
  disabled,
  type = 'text',
  placeholder,
  ...props
}: Readonly<TextInputProps>) {
  return (
    <div className={cn("flex flex-col items-center justify-center w-full max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-500 py-8", className)}>
      <div className="relative group w-full">
        <input
          type={type}
          value={value || ''}
          onChange={(e) => onChangeValue(e.target.value)}
          disabled={disabled}
          placeholder={placeholder || 'Type your answer...'}
          className="w-full h-24 px-8 text-center text-3xl md:text-4xl font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-50 border-4 border-emerald-100 dark:border-slate-800 focus:border-emerald-400 dark:focus:border-emerald-500 focus:outline-none transition-all rounded-[2rem] shadow-sm hover:shadow-md focus:shadow-xl focus:-translate-y-1 placeholder:text-slate-300 dark:placeholder:text-slate-700 disabled:opacity-50"
          autoFocus
          {...props}
        />
      </div>
    </div>
  );
}
