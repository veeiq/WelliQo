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
  ...props
}: Readonly<TextInputProps>) {
  return (
    <input
      type={type}
      value={value || ''}
      onChange={(e) => onChangeValue(e.target.value)}
      disabled={disabled}
      className={cn(
        'flex h-12 w-full rounded-md border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}
