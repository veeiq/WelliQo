import * as React from 'react';
import { cn } from '../../../lib/utils';
import { NumberInputProps, NumberInput } from './number-input';

export function WeightInput({ value, onChangeValue, disabled }: Readonly<NumberInputProps>) {
  const [unit, setUnit] = React.useState<'kg' | 'lb'>('kg');

  const currentKg = value ? Math.round(value) : 70; // default 70kg
  const currentLb = value ? Math.round(value * 2.20462) : 154; // default 154lbs

  const handleKgChange = (kg: number | undefined) => {
    if (kg === undefined) {
      onChangeValue(undefined);
      return;
    }
    onChangeValue(kg);
  };

  const handleLbChange = (lb: number | undefined) => {
    if (lb === undefined) {
      onChangeValue(undefined);
      return;
    }
    onChangeValue(lb / 2.20462);
  };

  return (
    <div className="flex flex-col items-center w-full animate-in fade-in zoom-in-95 duration-500 py-2 sm:py-4 gap-4 sm:gap-6">
      <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full relative shadow-inner mb-4">
        <button
          onClick={() => setUnit('kg')}
          className={cn(
            'px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 z-10',
            unit === 'kg'
              ? 'text-emerald-950 dark:text-emerald-50 bg-white dark:bg-slate-900 shadow-md'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200',
          )}
        >
          Kilograms
        </button>
        <button
          onClick={() => setUnit('lb')}
          className={cn(
            'px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 z-10',
            unit === 'lb'
              ? 'text-emerald-950 dark:text-emerald-50 bg-white dark:bg-slate-900 shadow-md'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200',
          )}
        >
          Pounds
        </button>
      </div>

      <div className="w-full flex flex-col items-center justify-center relative">
        <div className="absolute top-[40%] right-10 md:right-32 xl:right-1/3 -translate-y-1/2 text-2xl font-bold text-slate-300 dark:text-slate-600 select-none z-0">
          {unit}
        </div>
        
        {unit === 'kg' ? (
          <NumberInput
            min={40}
            max={200}
            value={currentKg}
            onChangeValue={handleKgChange}
            disabled={disabled}
          />
        ) : (
          <NumberInput
            min={88}
            max={440}
            value={currentLb}
            onChangeValue={handleLbChange}
            disabled={disabled}
          />
        )}
      </div>
    </div>
  );
}
