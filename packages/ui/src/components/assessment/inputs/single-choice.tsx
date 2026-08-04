import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface SingleChoiceProps {
  options: { id: string; label: string; value: any; description?: string }[];
  value: any;
  onChange: (value: any) => void;
  disabled?: boolean;
}

export function SingleChoice({ options, value, onChange, disabled }: Readonly<SingleChoiceProps>) {
  const extractEmoji = (text: string) => {
    // A robust emoji regex to extract the first emoji found
    const match = text.match(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u);
    if (match) {
      return {
        emoji: match[0],
        text: text.replace(match[0], '').trim()
      };
    }
    return { emoji: null, text };
  };

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 w-full"
      role="radiogroup"
    >
      {options.map((option) => {
        const { emoji, text } = extractEmoji(option.label);
        const isSelected = value === option.value;
        
        return (
          <button
            key={option.id}
            type="button"
            disabled={disabled}
            onClick={() => onChange(option.value)}
            role="radio"
            aria-checked={isSelected}
            className={cn(
              'group relative flex flex-row items-center justify-start gap-3 md:gap-4 rounded-[1.25rem] p-4 text-left transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30 hover:shadow-md hover:-translate-y-1 overflow-hidden min-h-[72px]',
              isSelected
                ? 'bg-gradient-to-br from-emerald-400 to-teal-500 shadow-emerald-500/20 border-transparent text-white'
                : 'bg-white dark:bg-slate-900 shadow-sm border-2 border-slate-100 dark:border-slate-800 hover:border-transparent',
              disabled && 'pointer-events-none opacity-50',
            )}
          >
            {!isSelected && (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
            
            {emoji && (
              <span className={cn(
                "relative z-10 text-3xl md:text-4xl transition-transform duration-500 ease-out group-hover:scale-110 shrink-0 animate-bounce-in",
                isSelected && "scale-110 drop-shadow-md"
              )}>
                {emoji}
              </span>
            )}

            <div className="relative z-10 flex flex-col justify-center min-w-0">
              <span
                className={cn(
                  'text-[15px] md:text-base font-semibold tracking-tight transition-colors truncate',
                  isSelected
                    ? 'text-white drop-shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-50',
                )}
              >
                {text}
              </span>
              {option.description && (
                <span
                  className={cn(
                    'text-[12px] md:text-[13px] leading-snug transition-colors font-medium truncate',
                    isSelected
                      ? 'text-teal-50 drop-shadow-sm'
                      : 'text-slate-500 dark:text-slate-400',
                  )}
                >
                  {option.description}
                </span>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
