import { getKnowledgeContentById } from "@/lib/knowledge-engine";
import { notFound } from "next/navigation";
import { Bookmark, Clock, CheckCircle2, ChevronLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { BookmarkButton } from "./BookmarkButton";
import { ShareButton } from "./ShareButton";
import { DownloadButton } from "./DownloadButton";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from 'next';
import { MDXComponents } from "@/components/mdx/MDXComponents";
import { searchContent } from "@/lib/knowledge-engine";
import { ArrowRight } from "lucide-react";
import { getTopicImage } from "@/lib/images";

export async function generateMetadata(props: { params: Promise<{ type: string, id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const content = await getKnowledgeContentById(params.id);
  
  if (!content) {
    return {
      title: 'Not Found | WelliQo',
    };
  }

  return {
    title: `${content.title} | WelliQo Health Library`,
    description: content.summary,
    openGraph: {
      title: content.title,
      description: content.summary,
      images: [{ url: content.thumbnail }],
      type: 'article',
    },
    alternates: {
      canonical: `https://welliqo.com/health-library/${content.type.toLowerCase()}/${content.id}`,
    }
  };
}

export default async function KnowledgeDetailPage(props: { params: Promise<{ type: string, id: string }> }) {
  const params = await props.params;
  const content = await getKnowledgeContentById(params.id);
  
  if (!content) {
    notFound();
  }

  const session = await auth();
  const userId = session?.user?.id;

  let isSaved = false;
  if (userId) {
    const existing = await prisma.savedResource.findUnique({
      where: {
        userId_resourceId: {
          userId,
          resourceId: content.id,
        }
      }
    });
    isSaved = !!existing;
  }

  // Fetch related articles
  const primaryTag = content.tags[0];
  const relatedContent = primaryTag ? searchContent(primaryTag).filter(c => c.id !== content.id).slice(0, 3) : [];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Back navigation */}
        <div>
          <Link href="/health-library" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Library
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 relative">
          <div className="aspect-video md:aspect-[21/9] bg-slate-100 dark:bg-slate-800 relative">
            <img src={content.thumbnail || getTopicImage(content, true)} alt={content.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-emerald-600 rounded-full text-xs font-bold uppercase tracking-wider">
                  {content.category}
                </span>
                <span className="flex items-center gap-1 text-sm font-medium text-slate-200">
                  <Clock className="w-4 h-4" /> {content.estimatedMinutes} min read
                </span>
                {content.difficulty && (
                  <span className="flex items-center gap-1 text-sm font-medium text-slate-200 capitalize">
                    Difficulty: {content.difficulty.toLowerCase()}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
                {content.title}
              </h1>
              <p className="text-slate-200 text-lg md:text-xl max-w-2xl line-clamp-2">
                {content.summary}
              </p>
            </div>
          </div>
          
          <div className="p-4 md:px-10 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900">
             <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                {content.articleData?.author && (
                  <div>By {content.articleData.author}</div>
                )}
             </div>
             
             <div className="flex items-center gap-2">
               <ShareButton title={content.title} text={content.summary} />
               {content.type === 'RECIPE' || content.type === 'EXERCISE_GUIDE' ? (
                 <DownloadButton title={content.title} type={content.type} />
               ) : null}
               <BookmarkButton resourceId={content.id} resourceType={content.type} initialSaved={isSaved} userId={userId} />
             </div>
          </div>

          <div className="p-6 md:p-10 prose prose-slate dark:prose-invert max-w-none prose-emerald">
            {/* Specific Type Rendering */}
            
            {content.articleData?.htmlContent && (
               <MDXRemote source={content.articleData.htmlContent} components={MDXComponents} />
            )}

            {content.type === 'RECIPE' && content.recipeData && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-center">
                     <div className="text-sm text-slate-500 mb-1">Calories</div>
                     <div className="font-bold text-xl">{content.recipeData.calories}</div>
                   </div>
                   <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-center">
                     <div className="text-sm text-slate-500 mb-1">Protein</div>
                     <div className="font-bold text-xl">{content.recipeData.proteinGrams}g</div>
                   </div>
                   <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-center">
                     <div className="text-sm text-slate-500 mb-1">Carbs</div>
                     <div className="font-bold text-xl">{content.recipeData.carbsGrams}g</div>
                   </div>
                   <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-center">
                     <div className="text-sm text-slate-500 mb-1">Fats</div>
                     <div className="font-bold text-xl">{content.recipeData.fatsGrams}g</div>
                   </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl h-fit">
                    <h3 className="text-emerald-900 dark:text-emerald-300 mt-0">Ingredients</h3>
                    <ul className="space-y-2 m-0 p-0 list-none">
                      {content.recipeData.ingredients.map((ing, i) => (
                        <li key={i} className="flex items-start gap-2 border-b border-emerald-100 dark:border-emerald-900/30 pb-2 last:border-0 last:pb-0">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300">{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="mt-0">Instructions</h3>
                    <ol className="space-y-4">
                      {content.recipeData.instructions.map((inst, i) => (
                        <li key={i} className="pl-2">
                           <span className="text-slate-700 dark:text-slate-300">{inst}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {content.type === 'HABIT' && content.habitData && (
              <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/30">
                 <h2 className="text-emerald-900 dark:text-emerald-300 mt-0">How to build this habit</h2>
                 <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">{content.habitData.instructions}</p>
                 <div className="grid grid-cols-2 gap-4 mt-6">
                   <div className="bg-white dark:bg-slate-900 p-4 rounded-xl">
                      <div className="text-sm text-slate-500 mb-1">Frequency</div>
                      <div className="font-bold">{content.habitData.frequency}</div>
                   </div>
                   <div className="bg-white dark:bg-slate-900 p-4 rounded-xl">
                      <div className="text-sm text-slate-500 mb-1">Best Time</div>
                      <div className="font-bold">{content.habitData.timeOfDay}</div>
                   </div>
                 </div>
              </div>
            )}

            {content.type === 'EXERCISE_GUIDE' && content.exerciseData && (
              <div className="space-y-6">
                 {content.exerciseData.videoUrl && (
                    <div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                       [Video Placeholder]
                    </div>
                 )}
                 <h3>Instructions</h3>
                 <p>{content.exerciseData.instructions}</p>
                 
                 <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-semibold">
                      Targets: {content.exerciseData.targetMuscleGroup.join(", ")}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-semibold">
                      Equipment: {content.exerciseData.equipmentNeeded.join(", ")}
                    </span>
                 </div>
              </div>
            )}
          </div>
        </div>

        {/* Conversion Zone */}
        <div className="space-y-12 mt-12 border-t border-slate-200 dark:border-slate-800 pt-12">
          {relatedContent.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Continue Reading</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedContent.map(item => (
                  <Link href={`/health-library/${item.type.toLowerCase()}/${item.id}`} key={item.id} className="group block bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                    <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                      <img src={item.thumbnail || getTopicImage(item, false)} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">{item.category}</div>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{item.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="bg-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
             <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to take control of your health?</h2>
               <p className="text-emerald-100 text-lg mb-8">Take our free comprehensive assessment to get a personalized action plan tailored to your exact goals and symptoms.</p>
               <Link href="/assessment" className="inline-flex items-center justify-center gap-2 bg-white text-emerald-900 font-bold py-4 px-8 rounded-full hover:bg-emerald-50 transition-colors text-lg">
                 Start Free Assessment <ArrowRight className="w-5 h-5" />
               </Link>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
