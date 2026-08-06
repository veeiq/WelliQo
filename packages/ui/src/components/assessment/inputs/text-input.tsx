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
    <div className={cn("flex flex-col items-center justify-center w-full max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-500 py-4 md:py-8", className)}>
      <div className="relative group w-full">
        <input
          type={type}
          id="floating_input"
          value={value || ''}
          onChange={(e) => onChangeValue(e.target.value)}
          disabled={disabled}
          className="block w-full h-20 md:h-24 px-6 md:px-8 pt-6 pb-2 text-xl md:text-3xl font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-50 border-2 md:border-4 border-emerald-100 dark:border-slate-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none transition-all rounded-2xl md:rounded-[2rem] shadow-sm hover:shadow-md focus:shadow-xl focus:-translate-y-1 peer placeholder-transparent disabled:opacity-50"
          placeholder={placeholder || 'Type your answer...'}
          autoFocus
          {...props}
        />
        <label 
          htmlFor="floating_input" 
          className="absolute text-sm md:text-base text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 md:-translate-y-4 scale-75 top-5 md:top-7 z-10 origin-[0] left-6 md:left-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-slate-400 peer-focus:scale-75 peer-focus:-translate-y-3 md:peer-focus:-translate-y-4 peer-focus:text-emerald-600 dark:peer-focus:text-emerald-400 pointer-events-none"
        >
          {placeholder || 'Type your answer...'}
        </label>
      </div>
    </div>
  );
}
