import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number | undefined;
  onChangeValue: (value: number | undefined) => void;
  min?: number;
  max?: number;
}

export function NumberInput({
  value,
  onChangeValue,
  className,
  disabled,
  min = 1,
  max = 120,
  ...props
}: Readonly<NumberInputProps>) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const ITEM_HEIGHT = 80; 
  const numbers = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  const [internalValue, setInternalValue] = React.useState(value ?? (min + 20)); // Default to roughly 21 if no value
  const scrollTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isManual, setIsManual] = React.useState(false);

  // Initialize scroll position once on mount
  React.useEffect(() => {
    if (containerRef.current && !isManual) {
      const startValue = value ?? internalValue;
      const index = startValue - min;
      containerRef.current.scrollTop = index * ITEM_HEIGHT;
      if (value === undefined) {
         onChangeValue(startValue);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isManual]);

  const handleScroll = () => {
    if (!containerRef.current) return;
    
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    
    const scrollTop = containerRef.current.scrollTop;
    const index = Math.round(scrollTop / ITEM_HEIGHT);
    const newValue = min + index;
    
    if (newValue !== internalValue && newValue >= min && newValue <= max) {
      setInternalValue(newValue);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      containerRef.current?.scrollTo({
        top: index * ITEM_HEIGHT,
        behavior: 'smooth'
      });
      onChangeValue(newValue);
    }, 150);
  };

  const handleSelect = (num: number) => {
    const index = num - min;
    containerRef.current?.scrollTo({
      top: index * ITEM_HEIGHT,
      behavior: 'smooth'
    });
    setInternalValue(num);
    onChangeValue(num);
  };

  if (isManual) {
    return (
      <div className={cn("flex flex-col items-center justify-center w-full max-w-sm mx-auto h-[280px] animate-in fade-in zoom-in-95 duration-500", className)}>
        <input
          type="number"
          value={internalValue || ''}
          onChange={(e) => {
            const val = e.target.value ? Number(e.target.value) : undefined;
            if (val !== undefined) setInternalValue(val);
            onChangeValue(val);
          }}
          disabled={disabled}
          className="w-full text-center text-7xl md:text-8xl font-semibold bg-transparent text-slate-900 dark:text-slate-50 border-b-2 border-slate-200 dark:border-slate-800 focus:border-slate-900 dark:focus:border-slate-400 focus:outline-none transition-colors pb-2 placeholder:text-slate-200 dark:placeholder:text-slate-800"
          autoFocus
          {...props}
        />
        <button
          onClick={() => setIsManual(false)}
          className="mt-8 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800"
        >
          ↕️ Switch to scroll wheel
        </button>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center w-full max-w-sm mx-auto animate-in fade-in zoom-in-95 duration-500", className)}>
      <div className="relative flex justify-center w-full h-[240px]">
        {/* Center highlight glass bar */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[80px] rounded-3xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-slate-800 pointer-events-none z-0 shadow-sm" />
        
        <div 
          ref={containerRef}
          className="w-full h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth z-10 [&::-webkit-scrollbar]:hidden"
          onScroll={handleScroll}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="h-[80px]" /> 
          {numbers.map(num => {
            const isSelected = num === internalValue;
            return (
              <div 
                key={num}
                onClick={() => handleSelect(num)}
                className={cn(
                  "h-[80px] snap-center flex items-center justify-center cursor-pointer transition-all duration-300 select-none",
                  isSelected 
                    ? "text-6xl md:text-7xl font-semibold text-slate-900 dark:text-slate-50 scale-100 drop-shadow-sm" 
                    : "text-4xl md:text-5xl font-light text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 scale-75 opacity-50 hover:opacity-100"
                )}
              >
                {num}
              </div>
            );
          })}
          <div className="h-[80px]" />
        </div>
      </div>
      
      <button
        onClick={() => setIsManual(true)}
        className="mt-6 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800"
      >
        ⌨️ Type manually
      </button>
      
      <input type="hidden" value={value || ''} {...props} />
    </div>
  );
}
