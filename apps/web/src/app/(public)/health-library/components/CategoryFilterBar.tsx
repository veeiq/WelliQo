"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export function CategoryFilterBar() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'All';

  const categories = [
    "All",
    "Nutrition & Fuel",
    "Movement & Muscle",
    "Sleep & Recovery",
    "Mind & Lifestyle",
    "Energy & Metabolism"
  ];

  return (
    <div className="sticky top-24 z-40 w-full flex justify-center mb-12 px-4 pointer-events-none">
      <div className="flex items-center gap-2 p-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl overflow-x-auto max-w-full hide-scrollbar pointer-events-auto">
        {categories.map((category) => {
          const isActive = currentCategory === category;
          const href = category === 'All' 
            ? '/health-library' 
            : `/health-library?category=${encodeURIComponent(category)}`;

          return (
            <Link
              key={category}
              href={href}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-bold tracking-wide whitespace-nowrap transition-all duration-300",
                isActive 
                  ? "bg-white text-black shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              )}
            >
              {category}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
