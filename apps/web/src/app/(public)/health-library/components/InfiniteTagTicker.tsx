"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface InfiniteTagTickerProps {
  tags: string[];
}

export function InfiniteTagTicker({ tags }: InfiniteTagTickerProps) {
  // Duplicate the tags array to create a seamless infinite loop
  const duplicatedTags = [...tags, ...tags, ...tags];

  // A palette of vibrant, premium colors for the ribbons
  const colors = [
    "bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/30",
    "bg-indigo-500/20 text-indigo-400 border-indigo-500/30 hover:bg-indigo-500/30",
    "bg-rose-500/20 text-rose-400 border-rose-500/30 hover:bg-rose-500/30",
    "bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30",
    "bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30",
    "bg-purple-500/20 text-purple-400 border-purple-500/30 hover:bg-purple-500/30"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black/40 py-8 border-y border-white/5 mb-20 flex items-center">
      {/* Left/Right Gradient Masks for smooth fading edge effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#000000] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#000000] to-transparent z-10" />
      
      {/* Slower animation: 80s */}
      <div className="flex w-max animate-[marquee_80s_linear_infinite] hover:[animation-play-state:paused]">
        {duplicatedTags.map((tag, index) => {
          const colorClass = colors[index % colors.length];
          return (
            <Link
              key={`${tag}-${index}`}
              href={`/health-library?q=${encodeURIComponent(tag)}`}
              className={cn(
                "mx-3 px-6 py-3 border rounded-full whitespace-nowrap transition-all duration-300 font-bold uppercase tracking-widest text-xs cursor-pointer shadow-lg backdrop-blur-sm",
                colorClass
              )}
            >
              {tag}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
