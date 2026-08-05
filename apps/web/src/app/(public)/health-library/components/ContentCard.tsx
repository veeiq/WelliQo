"use client";

import Link from "next/link";
import Image from "next/image";
import { KnowledgeContent } from "@/types/knowledge";
import { Bookmark, Clock, PlayCircle } from "lucide-react";
import { getTopicImage } from "@/lib/images";

interface ContentCardProps {
  content: KnowledgeContent;
  progress?: number; // 0-100
  isHero?: boolean;
}

export function ContentCard({ content, progress, isHero = false }: ContentCardProps) {
  const url = `/health-library/${content.type.toLowerCase()}/${content.id}`;
  const imageSrc = getTopicImage(content, isHero);
  
  return (
    <Link 
      href={url} 
      className={`group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-[#1A1A1A] border border-[#333] flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
        isHero ? 'w-full h-[60vh] md:h-[550px]' : 'w-[280px] md:w-[320px] aspect-[4/5]'
      }`}
    >
      <Image 
        src={imageSrc} 
        alt={content.title} 
        fill
        sizes={isHero ? "100vw" : "(max-width: 768px) 280px, 320px"}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 opacity-80 group-hover:opacity-100"
      />
      
      <div className={`absolute inset-0 bg-gradient-to-t from-black ${isHero ? 'via-black/40' : 'via-black/20'} to-transparent opacity-90`}></div>
      
      <button 
        className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-black/40 backdrop-blur-md text-white/70 hover:text-white hover:bg-emerald-500 transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white"
        onClick={(e) => {
          e.preventDefault();
        }}
        aria-label="Bookmark"
      >
        <Bookmark className="w-4 h-4" />
      </button>

      <div className={`relative z-10 p-6 ${isHero ? 'md:p-12 md:pb-16' : 'md:p-8'} flex flex-col gap-4 w-full max-w-4xl`}>
        <div className="flex items-center gap-4 text-xs font-medium text-emerald-500">
          <span className="uppercase tracking-widest">{content.type.replace('_', ' ')}</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5" />
            {content.estimatedMinutes}m
          </span>
        </div>
        
        <h3 className={`${isHero ? 'text-4xl md:text-5xl font-bold tracking-tight mb-2' : 'text-2xl font-bold tracking-tight'} text-white leading-tight`}>
          {content.title}
        </h3>
        
        {isHero && (
          <p className="text-slate-300 text-lg md:text-xl line-clamp-2 md:line-clamp-3 max-w-2xl font-normal leading-relaxed">
            {content.summary}
          </p>
        )}

        {isHero && (
          <div className="mt-8 flex items-center gap-4">
             <div className="flex items-center justify-center gap-2 bg-emerald-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-emerald-400 transition-colors duration-300">
               <PlayCircle className="w-5 h-5" />
               Start Now
             </div>
          </div>
        )}
      </div>

      {progress !== undefined && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#333] z-20">
          <div 
            className="h-full bg-emerald-500 rounded-r-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </Link>
  );
}
