import * as React from 'react';
import { cn } from '../../../lib/utils';
import { NumberInputProps } from './number-input';

export function HeightInput({ value, onChangeValue, disabled }: Readonly<NumberInputProps>) {
  const [unit, setUnit] = React.useState<'cm' | 'ft'>('cm');

  const [localFt, setLocalFt] = React.useState<string>(
    value ? Math.floor(value / 30.48).toString() : ''
  );
  const [localIn, setLocalIn] = React.useState<string>(
    value ? Math.round((value / 2.54) % 12).toString() : ''
  );

  React.useEffect(() => {
    if (unit === 'cm') {
      if (value) {
        setLocalFt(Math.floor(value / 30.48).toString());
        setLocalIn(Math.round((value / 2.54) % 12).toString());
      } else {
        setLocalFt('');
        setLocalIn('');
      }
    }
  }, [value, unit]);

  const handleCmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChangeValue(val === '' ? undefined : Number(val));
  };

  const handleFtChange = (ftStr: string, inStr: string) => {
    setLocalFt(ftStr);
    setLocalIn(inStr);
    
    if (!ftStr && !inStr) {
      onChangeValue(undefined);
    } else {
      const ft = Number(ftStr || 0);
      const inches = Number(inStr || 0);
      onChangeValue(ft * 30.48 + inches * 2.54);
    }
  };

  return (
    <div className="flex flex-col items-center w-full animate-in fade-in zoom-in-95 duration-500 py-2 sm:py-4 gap-4 sm:gap-8">
      <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full relative shadow-inner">
        <button
          onClick={() => setUnit('cm')}
          className={cn(
            'px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 z-10',
            unit === 'cm'
              ? 'text-emerald-950 dark:text-emerald-50 bg-white dark:bg-slate-900 shadow-md'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200',
          )}
        >
          Centimeters
        </button>
        <button
          onClick={() => setUnit('ft')}
          className={cn(
            'px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 z-10',
            unit === 'ft'
              ? 'text-emerald-950 dark:text-emerald-50 bg-white dark:bg-slate-900 shadow-md'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200',
          )}
        >
          Feet & Inches
        </button>
      </div>

      <div className={cn("w-full transition-opacity duration-300 flex justify-center", disabled && "opacity-50 pointer-events-none")}>
        {unit === 'cm' ? (
          <div className="flex items-end gap-3 group relative">
            <input
              type="number"
              value={value === undefined || value === null ? '' : value}
              onChange={handleCmChange}
              disabled={disabled}
              placeholder="0"
              className="w-48 h-32 text-center text-7xl font-bold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-50 border-4 border-emerald-100 dark:border-slate-800 focus:border-emerald-400 dark:focus:border-emerald-500 focus:outline-none transition-all rounded-[2.5rem] shadow-sm hover:shadow-md focus:shadow-xl focus:-translate-y-1 placeholder:text-slate-200 dark:placeholder:text-slate-700"
              autoFocus
            />
            <span className="text-2xl font-bold text-slate-300 dark:text-slate-600 pb-4 select-none">cm</span>
          </div>
        ) : (
          <div className="flex items-end gap-6 justify-center w-full">
            <div className="flex items-end gap-3">
              <input
                type="number"
                value={localFt}
                onChange={(e) => handleFtChange(e.target.value, localIn)}
                disabled={disabled}
                placeholder="0"
                className="w-36 h-32 text-center text-7xl font-bold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-50 border-4 border-emerald-100 dark:border-slate-800 focus:border-emerald-400 dark:focus:border-emerald-500 focus:outline-none transition-all rounded-[2.5rem] shadow-sm hover:shadow-md focus:shadow-xl focus:-translate-y-1 placeholder:text-slate-200 dark:placeholder:text-slate-700"
                autoFocus
              />
              <span className="text-2xl font-bold text-slate-300 dark:text-slate-600 pb-4 select-none">ft</span>
            </div>
            <div className="flex items-end gap-3">
              <input
                type="number"
                value={localIn}
                onChange={(e) => handleFtChange(localFt, e.target.value)}
                disabled={disabled}
                placeholder="0"
                className="w-36 h-32 text-center text-7xl font-bold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-50 border-4 border-emerald-100 dark:border-slate-800 focus:border-emerald-400 dark:focus:border-emerald-500 focus:outline-none transition-all rounded-[2.5rem] shadow-sm hover:shadow-md focus:shadow-xl focus:-translate-y-1 placeholder:text-slate-200 dark:placeholder:text-slate-700"
              />
              <span className="text-2xl font-bold text-slate-300 dark:text-slate-600 pb-4 select-none">in</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
