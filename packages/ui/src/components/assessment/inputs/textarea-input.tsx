import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface TextareaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChangeValue: (value: string) => void;
}

export function TextareaInput({ value, onChangeValue, className, disabled, ...props }: Readonly<TextareaInputProps>) {
  return (
    <textarea
      value={value || ''}
      onChange={(e) => onChangeValue(e.target.value)}
      disabled={disabled}
      className={cn(
        'flex min-h-[120px] w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}
