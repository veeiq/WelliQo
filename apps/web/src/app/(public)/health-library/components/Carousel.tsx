import { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function Carousel({ children, title, subtitle }: CarouselProps) {
  return (
    <section className="w-full py-12">
      {title && (
        <div className="px-4 md:px-12 mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-400 font-normal text-base md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 md:px-12 pb-8 hide-scrollbar scroll-smooth">
        {children}
      </div>
    </section>
  );
}

