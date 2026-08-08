import { searchContent } from "@/lib/knowledge-engine";
import { ContentCard } from "./components/ContentCard";
import { BentoHero } from "./components/BentoHero";
import { CategoryFilterBar } from "./components/CategoryFilterBar";
import { InfiniteTagTicker } from "./components/InfiniteTagTicker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health Library | WelliQo',
  description: 'Explore premium insights, guides, and tools for your ultimate well-being.',
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i] as T;
    shuffled[i] = shuffled[j] as T;
    shuffled[j] = temp;
  }
  return shuffled;
}

export default async function HealthLibraryPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const categoryParam = typeof searchParams.category === 'string' ? searchParams.category : 'All';
  const query = typeof searchParams.q === 'string' ? searchParams.q : '';

  const isFiltering = categoryParam !== 'All' || query !== '';
  
  // Search content with explicit typing to match engine
  const content = shuffleArray(searchContent(query, { 
    category: categoryParam !== 'All' ? categoryParam : undefined 
  }));

  // Collect top content for the Bento Hero (always show top 4 when not filtering)
  const allContent = shuffleArray(searchContent('', {}));
  const heroContent = allContent.slice(0, 4);
  
  // Collect unique tags for the infinite ticker (grab up to 25 unique tags)
  const uniqueTags = Array.from(new Set(allContent.flatMap(c => c.tags))).slice(0, 25);

  return (
    <div className="min-h-screen bg-[#000000] text-slate-50 font-sans selection:bg-emerald-500/30">
      
      {/* 1. Infinite Tag Ticker (Marquee) */}
      <InfiniteTagTicker tags={uniqueTags} />

      {/* 2. Sticky Glassmorphic Filter Bar */}
      <CategoryFilterBar />

      <div className="max-w-[1600px] mx-auto pb-32">
        {isFiltering ? (
          <div className="px-4 md:px-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-white">
               {query ? `Results for "${query}"` : `${categoryParam} Collection`}
             </h2>
             
             {content.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                 {content.map(item => (
                   <ContentCard key={item.id} content={item} />
                 ))}
               </div>
             ) : (
               <div className="text-center py-32 flex flex-col items-center justify-center max-w-lg mx-auto">
                 <h3 className="text-2xl font-bold tracking-tight text-white mb-4">Nothing found</h3>
                 <p className="text-slate-400 text-lg">We couldn't find any content matching your criteria. Try exploring another category.</p>
               </div>
             )}
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
             {/* 3. Dynamic Bento Box Hero */}
             <BentoHero content={heroContent} />

             {/* 4. The Knowledge Matrix Grid */}
             <div className="px-4 md:px-12 mt-24">
               <div className="flex items-center justify-between mb-10">
                 <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Latest Discoveries</h2>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                 {allContent.slice(4).map(item => (
                   <ContentCard key={item.id} content={item} />
                 ))}
               </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
