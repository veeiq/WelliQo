import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface ScaleInputProps {
  value: number | undefined;
  onChangeValue: (value: number) => void;
  disabled?: boolean;
}

export function ScaleInput({ value, onChangeValue, disabled }: Readonly<ScaleInputProps>) {
  const scale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getColorClasses = (num: number, isSelected: boolean) => {
    const colors = [
      { base: 'text-red-600 dark:text-red-400 border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-950/30', active: 'bg-red-500 text-white border-red-500 dark:bg-red-600 dark:border-red-600' }, // 1
      { base: 'text-red-500 dark:text-red-400 border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-950/30', active: 'bg-red-500 text-white border-red-500 dark:bg-red-500 dark:border-red-500' }, // 2
      { base: 'text-orange-500 dark:text-orange-400 border-orange-200 dark:border-orange-900/50 hover:bg-orange-50 dark:hover:bg-orange-950/30', active: 'bg-orange-500 text-white border-orange-500 dark:bg-orange-500 dark:border-orange-500' }, // 3
      { base: 'text-amber-500 dark:text-amber-400 border-amber-200 dark:border-amber-900/50 hover:bg-amber-50 dark:hover:bg-amber-950/30', active: 'bg-amber-500 text-white border-amber-500 dark:bg-amber-500 dark:border-amber-500' }, // 4
      { base: 'text-yellow-600 dark:text-yellow-500 border-yellow-200 dark:border-yellow-900/50 hover:bg-yellow-50 dark:hover:bg-yellow-950/30', active: 'bg-yellow-500 text-white border-yellow-500 dark:bg-yellow-600 dark:border-yellow-600' }, // 5
      { base: 'text-lime-600 dark:text-lime-500 border-lime-200 dark:border-lime-900/50 hover:bg-lime-50 dark:hover:bg-lime-950/30', active: 'bg-lime-500 text-white border-lime-500 dark:bg-lime-600 dark:border-lime-600' }, // 6
      { base: 'text-green-500 dark:text-green-400 border-green-200 dark:border-green-900/50 hover:bg-green-50 dark:hover:bg-green-950/30', active: 'bg-green-500 text-white border-green-500 dark:bg-green-500 dark:border-green-500' }, // 7
      { base: 'text-emerald-500 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/30', active: 'bg-emerald-500 text-white border-emerald-500 dark:bg-emerald-500 dark:border-emerald-500' }, // 8
      { base: 'text-emerald-600 dark:text-emerald-500 border-emerald-200 dark:border-emerald-900/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/30', active: 'bg-emerald-600 text-white border-emerald-600 dark:bg-emerald-600 dark:border-emerald-600' }, // 9
      { base: 'text-teal-600 dark:text-teal-500 border-teal-200 dark:border-teal-900/50 hover:bg-teal-50 dark:hover:bg-teal-950/30', active: 'bg-teal-600 text-white border-teal-600 dark:bg-teal-600 dark:border-teal-600' }, // 10
    ];
    
    const style = colors[num - 1];
    return isSelected ? style?.active : `bg-white dark:bg-slate-900 border ${style?.base}`;
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center mt-4">
      {scale.map((num) => (
        <button
          key={num}
          type="button"
          disabled={disabled}
          onClick={() => onChangeValue(num)}
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-xl font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-sm active:scale-95',
            getColorClasses(num, value === num),
            disabled && 'pointer-events-none opacity-50',
          )}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
