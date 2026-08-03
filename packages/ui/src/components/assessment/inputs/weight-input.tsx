import * as React from 'react';
import { cn } from '../../../lib/utils';
import { NumberInputProps } from './number-input';

export function WeightInput({ value, onChangeValue, disabled }: Readonly<NumberInputProps>) {
  const [unit, setUnit] = React.useState<'kg' | 'lb'>('kg');

  // Convert incoming kg to lb for display if in lb mode
  const displayLb = value ? Math.round(value * 2.20462) : '';

  const handleKgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChangeValue(val === '' ? undefined : Number(val));
  };

  const handleLbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      onChangeValue(undefined);
    } else {
      // Convert lb to kg for storage
      onChangeValue(Math.round(Number(val) / 2.20462));
    }
  };

  return (
    <div className="flex flex-col items-center w-full animate-in fade-in zoom-in-95 duration-500 py-4 md:py-8 gap-8">
      <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full relative">
        <button
          onClick={() => setUnit('kg')}
          className={cn(
            'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 z-10',
            unit === 'kg'
              ? 'text-emerald-950 dark:text-emerald-50 bg-white dark:bg-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200',
          )}
        >
          Kilograms
        </button>
        <button
          onClick={() => setUnit('lb')}
          className={cn(
            'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 z-10',
            unit === 'lb'
              ? 'text-emerald-950 dark:text-emerald-50 bg-white dark:bg-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200',
          )}
        >
          Pounds
        </button>
      </div>

      <div className="flex items-end gap-2">
        <input
          type="number"
          value={unit === 'kg' ? (value === undefined ? '' : value) : displayLb}
          onChange={unit === 'kg' ? handleKgChange : handleLbChange}
          disabled={disabled}
          placeholder="0"
          className="w-40 text-center text-6xl md:text-7xl font-light bg-transparent text-emerald-950 dark:text-emerald-50 border-b-[3px] border-emerald-200 dark:border-emerald-800/50 focus:border-emerald-500 focus:outline-none transition-colors pb-4 placeholder:text-slate-300 dark:placeholder:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <span className="text-xl text-slate-400 font-medium pb-6">{unit}</span>
      </div>
    </div>
  );
}
