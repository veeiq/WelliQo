import Link from 'next/link';
import { BookOpen, ArrowLeft } from 'lucide-react';

export default async function LearnPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-50 selection:bg-indigo-200 dark:selection:bg-indigo-900">
      {/* Navigation Bar */}
      <nav className="w-full border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/"
            className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-3xl mx-auto px-6 pt-16 pb-12">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8">
          <BookOpen className="w-8 h-8" />
        </div>

        <span className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 block">
          Topic: {slug.replace(/-/g, ' ')}
        </span>

        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6 text-balance tracking-tight capitalize">
          {slug.replace(/-/g, ' ')}
        </h1>
      </section>

      {/* Empty State for Future Supabase Content */}
      <section className="w-full max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50 rounded-3xl p-10 text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-3">
            Content Coming Soon
          </h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
            We are preparing premium, evidence-based content for this topic. Check back soon or connect with a coach to learn more.
          </p>
          <Link
            href="/coaches"
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors shadow-sm"
          >
            Speak to a Coach
          </Link>
        </div>
      </section>
    </main>
  );
}
