import type { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const buttonVariants = cva(
  'inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-white hover:bg-brand/90',
        secondary: 'border bg-card text-foreground hover:bg-black/5 dark:hover:bg-white/10',
      },
    },
    defaultVariants: { variant: 'primary' },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, type = 'button', ...props }: Readonly<ButtonProps>) {
  return <button className={cn(buttonVariants({ variant }), className)} type={type} {...props} />;
}
