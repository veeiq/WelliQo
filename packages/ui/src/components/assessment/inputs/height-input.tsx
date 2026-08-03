import * as React from 'react';
import { cn } from '../../../lib/utils';
import { NumberInputProps } from './number-input';

export function HeightInput({ value, onChangeValue, disabled }: Readonly<NumberInputProps>) {
  const [unit, setUnit] = React.useState<'cm' | 'ft'>('cm');

  // Convert incoming cm to ft/in for display if in ft mode
  const displayFt = value ? Math.floor(value / 30.48) : '';
  const displayIn = value ? Math.round((value / 2.54) % 12) : '';

  const handleCmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChangeValue(val === '' ? undefined : Number(val));
  };

  const handleFtChange = (ftStr: string, inStr: string) => {
    const ft = Number(ftStr || 0);
    const inches = Number(inStr || 0);
    if (!ftStr && !inStr) {
      onChangeValue(undefined);
    } else {
      onChangeValue(Math.round(ft * 30.48 + inches * 2.54));
    }
  };

  return (
    <div className="flex flex-col items-center w-full animate-in fade-in zoom-in-95 duration-500 py-4 md:py-8 gap-8">
      <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full relative">
        <button
          onClick={() => setUnit('cm')}
          className={cn(
            'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 z-10',
            unit === 'cm'
              ? 'text-emerald-950 dark:text-emerald-50 bg-white dark:bg-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200',
          )}
        >
          Centimeters
        </button>
        <button
          onClick={() => setUnit('ft')}
          className={cn(
            'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 z-10',
            unit === 'ft'
              ? 'text-emerald-950 dark:text-emerald-50 bg-white dark:bg-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200',
          )}
        >
          Feet & Inches
        </button>
      </div>

      {unit === 'cm' ? (
        <div className="flex items-end gap-2">
          <input
            type="number"
            value={value === undefined ? '' : value}
            onChange={handleCmChange}
            disabled={disabled}
            placeholder="0"
            className="w-32 text-center text-6xl md:text-7xl font-light bg-transparent text-emerald-950 dark:text-emerald-50 border-b-[3px] border-emerald-200 dark:border-emerald-800/50 focus:border-emerald-500 focus:outline-none transition-colors pb-4 placeholder:text-slate-300 dark:placeholder:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <span className="text-xl text-slate-400 font-medium pb-6">cm</span>
        </div>
      ) : (
        <div className="flex items-end gap-6">
          <div className="flex items-end gap-2">
            <input
              type="number"
              value={displayFt}
              onChange={(e) => handleFtChange(e.target.value, String(displayIn))}
              disabled={disabled}
              placeholder="0"
              className="w-24 text-center text-6xl md:text-7xl font-light bg-transparent text-emerald-950 dark:text-emerald-50 border-b-[3px] border-emerald-200 dark:border-emerald-800/50 focus:border-emerald-500 focus:outline-none transition-colors pb-4 placeholder:text-slate-300 dark:placeholder:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <span className="text-xl text-slate-400 font-medium pb-6">ft</span>
          </div>
          <div className="flex items-end gap-2">
            <input
              type="number"
              value={displayIn}
              onChange={(e) => handleFtChange(String(displayFt), e.target.value)}
              disabled={disabled}
              placeholder="0"
              className="w-24 text-center text-6xl md:text-7xl font-light bg-transparent text-emerald-950 dark:text-emerald-50 border-b-[3px] border-emerald-200 dark:border-emerald-800/50 focus:border-emerald-500 focus:outline-none transition-colors pb-4 placeholder:text-slate-300 dark:placeholder:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <span className="text-xl text-slate-400 font-medium pb-6">in</span>
          </div>
        </div>
      )}
    </div>
  );
}
