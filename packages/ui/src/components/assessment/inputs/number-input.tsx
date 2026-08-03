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
    <input
      type="number"
      value={value === undefined ? '' : value}
      onChange={(e) => {
        const val = e.target.value;
        onChangeValue(val === '' ? undefined : Number(val));
      }}
      disabled={disabled}
      className={cn(
        'flex h-12 w-full rounded-md border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}
