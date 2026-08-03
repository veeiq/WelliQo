import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface MultipleChoiceProps {
  options: { id: string; label: string; value: any; description?: string }[];
  value: any[];
  onChange: (value: any[]) => void;
  disabled?: boolean;
}

export function MultipleChoice({
  options,
  value = [],
  onChange,
  disabled,
}: Readonly<MultipleChoiceProps>) {
  const toggleOption = (optionValue: any) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  const extractEmoji = (text: string) => {
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
    <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 w-full" role="group">
      {options.map((option) => {
        const { emoji, text } = extractEmoji(option.label);
        const isChecked = value.includes(option.value);
        return (
          <button
            key={option.id}
            type="button"
            disabled={disabled}
            onClick={() => toggleOption(option.value)}
            role="checkbox"
            aria-checked={isChecked}
            className={cn(
              'group relative flex flex-col items-center justify-center gap-3 rounded-[2rem] p-6 text-center transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30 hover:shadow-xl hover:-translate-y-2 overflow-hidden aspect-square',
              isChecked
                ? 'bg-gradient-to-br from-indigo-400 to-violet-500 shadow-indigo-500/20 border-transparent text-white'
                : 'bg-white dark:bg-slate-900 shadow-sm border-2 border-slate-100 dark:border-slate-800 hover:border-transparent',
              disabled && 'pointer-events-none opacity-50',
            )}
          >
            {!isChecked && (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
            
            {emoji && (
              <span className={cn(
                "relative z-10 text-5xl transition-transform duration-500 ease-out group-hover:scale-125 animate-bounce-in",
                isChecked && "scale-110 drop-shadow-md"
              )}>
                {emoji}
              </span>
            )}

            <div className="relative z-10 flex flex-col gap-1 mt-2">
              <span
                className={cn(
                  'text-[17px] font-semibold tracking-tight transition-colors',
                  isChecked
                    ? 'text-white drop-shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-50',
                )}
              >
                {text}
              </span>
              {option.description && (
                <span
                  className={cn(
                    'text-[13px] leading-snug transition-colors font-medium',
                    isChecked
                      ? 'text-indigo-50 drop-shadow-sm'
                      : 'text-slate-500 dark:text-slate-400',
                  )}
                >
                  {option.description}
                </span>
              )}
            </div>
            
            {/* Multi-select indicator badge */}
            <div className={cn(
              "absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
              isChecked ? "border-white bg-white/20 text-white" : "border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100"
            )}>
              {isChecked && (
                <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5">
                  <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
