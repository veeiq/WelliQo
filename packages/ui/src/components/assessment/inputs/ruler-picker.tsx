import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface RulerPickerProps {
  min: number;
  max: number;
  value: number;
  onChange: (val: number) => void;
  formatValue?: (val: number) => string;
  unitLabel?: string;
  className?: string;
  renderManualInput?: (value: number, onChange: (val: number) => void) => React.ReactNode;
}

export function RulerPicker({
  min,
  max,
  value,
  onChange,
  formatValue = (v) => v.toString(),
  unitLabel = '',
  className,
  renderManualInput
}: Readonly<RulerPickerProps>) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const TICK_WIDTH = 12; 
  const totalTicks = max - min + 1;
  const numbers = Array.from({ length: totalTicks }, (_, i) => min + i);
  const [internalValue, setInternalValue] = React.useState(value);
  const scrollTimeoutRef = React.useRef<NodeJS.Timeout>();
  const [isManual, setIsManual] = React.useState(false);

  React.useEffect(() => {
    if (containerRef.current && !isManual) {
      const index = value - min;
      containerRef.current.scrollLeft = index * TICK_WIDTH;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isManual]);

  const handleScroll = () => {
    if (!containerRef.current) return;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    
    const scrollLeft = containerRef.current.scrollLeft;
    const index = Math.round(scrollLeft / TICK_WIDTH);
    const newValue = min + index;
    
    if (newValue !== internalValue && newValue >= min && newValue <= max) {
      setInternalValue(newValue);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      containerRef.current?.scrollTo({
        left: index * TICK_WIDTH,
        behavior: 'smooth'
      });
      onChange(newValue);
    }, 150);
  };

  const handleSelect = (num: number) => {
    const index = num - min;
    containerRef.current?.scrollTo({
      left: index * TICK_WIDTH,
      behavior: 'smooth'
    });
    setInternalValue(num);
    onChange(num);
  };

  if (isManual) {
    return (
      <div className={cn("flex flex-col items-center justify-center w-full max-w-sm mx-auto h-[240px] animate-in fade-in zoom-in-95 duration-500", className)}>
        {renderManualInput ? (
          renderManualInput(internalValue, (val) => {
             setInternalValue(val);
             onChange(val);
          })
        ) : (
          <div className="flex items-end gap-2">
            <input
              type="number"
              value={internalValue || ''}
              onChange={(e) => {
                const val = e.target.value ? Number(e.target.value) : min;
                setInternalValue(val);
                onChange(val);
              }}
              className="w-full text-center text-7xl md:text-8xl font-semibold bg-transparent text-slate-900 dark:text-slate-50 border-b-2 border-slate-200 dark:border-slate-800 focus:border-slate-900 dark:focus:border-slate-400 focus:outline-none transition-colors pb-2"
              autoFocus
            />
            {unitLabel && <span className="text-2xl font-medium text-slate-400 pb-4">{unitLabel}</span>}
          </div>
        )}
        <button
          onClick={() => setIsManual(false)}
          className="mt-8 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800"
        >
          ↔️ Switch to scale
        </button>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center w-full max-w-md mx-auto animate-in fade-in zoom-in-95 duration-500", className)}>
      <div className="mb-8 flex items-end gap-2 drop-shadow-sm">
        <span className="text-6xl md:text-7xl font-semibold text-slate-900 dark:text-slate-50">
          {formatValue(internalValue)}
        </span>
        {unitLabel && <span className="text-2xl font-medium text-slate-400 mb-1">{unitLabel}</span>}
      </div>

      <div className="relative flex items-center w-full h-[120px] rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden mb-6">
        {/* Center red needle / selection marker */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-emerald-500 -translate-x-1/2 z-20 pointer-events-none rounded-full drop-shadow-md" />
        <div className="absolute left-1/2 top-2 bottom-2 w-12 bg-emerald-500/10 -translate-x-1/2 z-0 pointer-events-none rounded-2xl" />

        <div 
          ref={containerRef}
          className="w-full h-full overflow-x-scroll snap-x snap-mandatory scroll-smooth z-10 [&::-webkit-scrollbar]:hidden flex items-end pb-8"
          onScroll={handleScroll}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Half width padding so first and last can reach center */}
          <div className="shrink-0 w-[50%] h-1" />
          
          {numbers.map(num => {
            const isMajor = num % 10 === 0;
            const isMedium = num % 5 === 0 && !isMajor;
            return (
              <div 
                key={num}
                onClick={() => handleSelect(num)}
                className="shrink-0 snap-center flex justify-center cursor-pointer transition-all duration-300 relative"
                style={{ width: TICK_WIDTH }}
              >
                <div 
                  className={cn(
                    "rounded-full transition-colors duration-300",
                    num === internalValue ? "bg-emerald-500 w-[3px]" : "bg-slate-300 dark:bg-slate-700 w-[2px]",
                    isMajor ? "h-14" : isMedium ? "h-10" : "h-6",
                    num === internalValue && "h-16"
                  )} 
                />
                {isMajor && (
                  <span className="absolute -top-7 text-xs font-semibold text-slate-400 dark:text-slate-500 transition-colors">
                    {num}
                  </span>
                )}
              </div>
            );
          })}
          
          <div className="shrink-0 w-[50%] h-1" />
        </div>
      </div>

      <button
        onClick={() => setIsManual(true)}
        className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800"
      >
        ⌨️ Type manually
      </button>
    </div>
  );
}
