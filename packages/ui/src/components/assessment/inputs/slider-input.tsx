import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface SliderInputProps {
  value: number;
  onChangeValue: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

export function SliderInput({ value = 0, onChangeValue, min = 0, max = 100, step = 1, disabled }: Readonly<SliderInputProps>) {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChangeValue(Number(e.target.value))}
        disabled={disabled}
        className="w-full accent-brand disabled:opacity-50"
      />
      <div className="flex justify-between text-sm text-muted">
        <span>{min}</span>
        <span className="font-medium text-foreground">{value}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
