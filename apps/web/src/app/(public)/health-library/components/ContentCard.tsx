"use client";

import Link from "next/link";
import Image from "next/image";
import { KnowledgeContent } from "@/types/knowledge";
import { Bookmark, Clock, ArrowUpRight } from "lucide-react";
import { getTopicImage } from "@/lib/images";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  content: KnowledgeContent;
  className?: string;
  isHero?: boolean;
}

export function ContentCard({ content, className, isHero = false }: ContentCardProps) {
  const url = `/health-library/${content.type.toLowerCase()}/${content.id}`;
  
  // Use the actual thumbnail if it exists in the frontmatter, otherwise fallback to topic image
  const imageSrc = content.thumbnail || getTopicImage(content, isHero);
  
  // Dynamic glow color based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Nutrition & Fuel': return 'group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]';
      case 'Movement & Muscle': return 'group-hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]';
      case 'Sleep & Recovery': return 'group-hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]';
      case 'Mind & Lifestyle': return 'group-hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]';
      case 'Energy & Metabolism': return 'group-hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)]';
      default: return 'group-hover:shadow-emerald-500/20';
    }
  };

  return (
    <Link 
      href={url} 
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 transition-all duration-700 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
        getCategoryColor(content.category),
        className || (isHero ? 'w-full aspect-video md:aspect-[21/9]' : 'w-full aspect-[4/5]')
      )}
    >
      {/* Background Image with Cinematic Zoom */}
      <Image 
        src={imageSrc} 
        alt={content.title} 
        fill
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
      />
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
      
      {/* Top Bar (Bookmark + Difficulty) */}
      <div className="absolute top-6 w-full px-6 flex justify-between items-start z-20">
        <div className="flex gap-2">
           {content.difficulty && (
             <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white/90 uppercase tracking-widest border border-white/10">
               {content.difficulty}
             </span>
           )}
        </div>
        <button 
          className="p-2.5 rounded-full bg-black/40 backdrop-blur-md text-white/70 hover:text-white hover:bg-emerald-500 transition-colors duration-300 border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={(e) => { e.preventDefault(); }}
        >
          <Bookmark className="w-4 h-4" />
        </button>
      </div>

      {/* Content Content with Slide-up Reveal */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col gap-3 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="flex items-center gap-3 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">
          <span>{content.category}</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="flex items-center gap-1.5 text-white/70">
            <Clock className="w-3.5 h-3.5" />
            {content.estimatedMinutes}m
          </span>
        </div>
        
        <h3 className={cn(
          "font-bold text-white leading-tight",
          isHero ? 'text-3xl md:text-5xl' : 'text-2xl line-clamp-2 md:line-clamp-3'
        )}>
          {content.title}
        </h3>
        
        <p className={cn(
          "text-white/60 font-normal leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100",
          isHero ? 'text-lg md:text-xl line-clamp-2 max-w-2xl mt-2' : 'text-sm line-clamp-2 mt-1'
        )}>
          {content.summary}
        </p>

        {isHero && (
          <div className="mt-6 flex items-center gap-2 text-white font-semibold group-hover:text-emerald-400 transition-colors">
            Read Article <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        )}
      </div>
    </Link>
  );
}
