"use client";

import { KnowledgeContent } from "@/types/knowledge";
import { ContentCard } from "./ContentCard";

interface BentoHeroProps {
  content: KnowledgeContent[];
}

export function BentoHero({ content }: BentoHeroProps) {
  if (content.length < 4) return null;

  const hero = content[0]!;
  const second = content[1]!;
  const third = content[2]!;
  const fourth = content[3]!;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[600px] mb-20 px-4 md:px-12">
      {/* Primary Hero - Spans 8 columns on desktop */}
      <div className="md:col-span-8 h-full min-h-[400px]">
        <ContentCard content={hero} isHero={true} className="w-full h-full rounded-3xl" />
      </div>

      {/* Secondary Stack - Spans 4 columns on desktop */}
      <div className="md:col-span-4 flex flex-col gap-6 h-full">
        {/* Top Right */}
        <div className="flex-1 h-[250px] md:h-auto">
          <ContentCard content={second} className="w-full h-full rounded-3xl aspect-auto" />
        </div>
        
        {/* Bottom Right Grid */}
        <div className="flex-1 grid grid-cols-2 gap-6 h-[200px] md:h-auto">
          <ContentCard content={third} className="w-full h-full rounded-3xl aspect-auto" />
          <ContentCard content={fourth} className="w-full h-full rounded-3xl aspect-auto" />
        </div>
      </div>
    </div>
  );
}
