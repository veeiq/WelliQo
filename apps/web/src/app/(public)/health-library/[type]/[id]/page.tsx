import { getKnowledgeContentById } from "@/lib/knowledge-engine";
import { notFound } from "next/navigation";
import { Bookmark, Clock, CheckCircle2, ChevronLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { BookmarkButton } from "./BookmarkButton";
import { ShareButton } from "./ShareButton";
import { DownloadButton } from "./DownloadButton";

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { type: string, id: string } }): Promise<Metadata> {
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

export default async function KnowledgeDetailPage({
  params
}: {
  params: { type: string, id: string }
}) {
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
            <img src={content.thumbnail} alt={content.title} className="w-full h-full object-cover" />
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
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(content.createdAt).toLocaleDateString()}
                </div>
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
            
            {content.type === 'ARTICLE' && content.articleData && (
               <div dangerouslySetInnerHTML={{ __html: content.articleData.htmlContent }} />
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

      </div>
    </div>
  );
}
