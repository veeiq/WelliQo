import React from 'react';
import { contentAdapter } from '@/lib/content';
import { notFound } from 'next/navigation';
import { BookOpen, ArrowLeft } from 'lucide-react';

export default async function LearnPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // The content adapter resolves the knowledge node
  const node = contentAdapter.getNode(slug);
  
  if (!node) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-50 selection:bg-indigo-200 dark:selection:bg-indigo-900">
      
      {/* Navigation Bar */}
      <nav className="w-full border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <a href="/" className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-3xl mx-auto px-6 pt-16 pb-12">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8">
          <BookOpen className="w-8 h-8" />
        </div>
        
        <span className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 block">
          {node.topic || node.type}
        </span>
        
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6 text-balance tracking-tight">
          {node.title}
        </h1>
      </section>

      {/* Content Section (Sprint 6 will render MDX here) */}
      <section className="w-full max-w-3xl mx-auto px-6 pb-24">
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p className="lead text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            This is a placeholder for the rich MDX content. In Sprint 6, this page will beautifully render the authored markdown, including embedded components, diagrams, and typography.
          </p>
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-medium mb-2">Technical Note for Sprint 5.1</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm m-0">
              The Knowledge Graph has successfully resolved node: <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-indigo-600 dark:text-indigo-400">{slug}</code>. We can access its frontmatter and relationships instantly.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
