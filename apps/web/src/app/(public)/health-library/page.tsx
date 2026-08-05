import { searchContent } from "@/lib/knowledge-engine";
import Link from "next/link";
import { Search, Flame, Moon, Battery, Dumbbell, HeartPulse, Brain, Apple } from "lucide-react";
import { ContentCard } from "./components/ContentCard";
import { GoalCard } from "./components/GoalCard";
import { CollectionCard } from "./components/CollectionCard";
import { Carousel } from "./components/Carousel";

export default async function HealthLibraryPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const query = typeof searchParams.q === 'string' ? searchParams.q : '';
  const type = typeof searchParams.type === 'string' ? searchParams.type : 'ALL';
  const goal = typeof searchParams.goal === 'string' ? searchParams.goal : 'ALL';

  const isSearching = query !== '' || type !== 'ALL' || goal !== 'ALL';
  const results = searchContent(query, { type, goal });

  const allContent = searchContent('');
  const continueReading = allContent[0];
  const trending = allContent.slice(1, 6);
  const forYou = allContent.slice(6, 14);

  const goalsList = [
    { name: "Weight Loss", value: "weight-loss", icon: <Flame /> },
    { name: "Better Sleep", value: "better-sleep", icon: <Moon /> },
    { name: "More Energy", value: "energy", icon: <Battery /> },
    { name: "Muscle Gain", value: "muscle-gain", icon: <Dumbbell /> },
    { name: "Healthy Aging", value: "healthy-aging", icon: <HeartPulse /> },
    { name: "Stress Management", value: "stress-management", icon: <Brain /> },
    { name: "Gut Health", value: "gut-health", icon: <Apple /> },
  ];

  const collections = [
    {
      id: "immune-boost",
      title: "Immune Boosting Essentials",
      image: "/images/topics/gut-health-portrait.webp",
      stats: { articles: 5, recipes: 3, habits: 2 }
    },
    {
      id: "sleep-mastery",
      title: "Sleep Mastery Protocol",
      image: "/images/topics/sleep-portrait.webp",
      stats: { articles: 4, recipes: 0, habits: 4 }
    },
    {
      id: "plant-based",
      title: "Plant-Based Power",
      image: "/images/topics/nutrition-portrait.webp",
      stats: { articles: 2, recipes: 8, habits: 1 }
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] pt-24 pb-24 text-slate-50 selection:bg-emerald-500/30 font-sans">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Search Header */}
        <div className="px-4 md:px-12 mb-16 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Explore</h1>
            <p className="text-slate-400 font-normal text-lg">Insights and tools for your well-being.</p>
          </div>
          
          <form className="relative w-full md:w-[450px]">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              name="q"
              defaultValue={query}
              placeholder="Search topics, goals..." 
              className="w-full pl-16 pr-6 py-4 bg-[#1A1A1A] border border-[#333] hover:bg-[#222] rounded-full outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:border-transparent transition-colors duration-300 text-white placeholder-slate-500 text-lg"
            />
          </form>
        </div>

        {isSearching ? (
          <div className="px-4 md:px-12 mt-12">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-12">
              Results for "{query}"
            </h2>
            
            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {results.map(rec => (
                  <div key={rec.id} className="w-full flex justify-center">
                    <ContentCard content={rec} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-32 flex flex-col items-center justify-center max-w-lg mx-auto">
                <Search className="w-12 h-12 text-slate-600 mb-6" />
                <h3 className="text-2xl font-bold tracking-tight text-white mb-4">Nothing found</h3>
                <p className="text-slate-400 text-lg">We couldn't find any content matching your search. Try adjusting your keywords.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            
            {/* Hero / Continue Reading */}
            {continueReading && (
              <div className="px-4 md:px-12 mb-20">
                <h2 className="text-3xl font-bold tracking-tight text-white mb-8">Jump Back In</h2>
                <ContentCard content={continueReading} isHero={true} progress={45} />
              </div>
            )}

            <Carousel title="Browse by Goal" subtitle="Paths tailored for you">
              {goalsList.map(g => (
                <GoalCard key={g.value} goalId={g.value} label={g.name} icon={g.icon} />
              ))}
            </Carousel>

            <Carousel title="Trending" subtitle="Popular in the community">
              {trending.map(rec => (
                <ContentCard key={rec.id} content={rec} />
              ))}
            </Carousel>

            <Carousel title="Collections" subtitle="Curated deep dives">
              {collections.map(c => (
                <CollectionCard key={c.id} {...c} />
              ))}
            </Carousel>

            <div className="px-4 md:px-12 pt-12 pb-12">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-4">For You</h2>
              <p className="text-slate-400 font-normal text-lg mb-12">Based on your recent activity.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {forYou.map(rec => (
                  <div key={rec.id} className="w-full flex justify-center">
                    <ContentCard content={rec} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

