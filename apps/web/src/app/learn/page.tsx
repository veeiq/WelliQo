import Link from 'next/link';
import { BookOpen, TrendingUp, Sparkles, Clock } from 'lucide-react';

export default function LearnIndexPage() {
  const categories = [
    { title: 'Sleep & Recovery', count: 12 },
    { title: 'Nutrition Fundamentals', count: 24 },
    { title: 'Mental Wellbeing', count: 18 },
    { title: 'Movement & Fitness', count: 15 },
  ];

  const featuredGuides = [
    {
      title: 'Morning Energy Protocols',
      description: 'Start your day with natural energy by aligning with your circadian rhythm.',
      readTime: '5 min read',
      href: '/learn/morning-energy',
      category: 'Sleep & Recovery',
    },
    {
      title: 'The Circadian Rhythm',
      description: 'Understanding your body\'s natural internal clock and sleep-wake cycle.',
      readTime: '8 min read',
      href: '/learn/circadian-rhythm',
      category: 'Science & Concepts',
    },
    {
      title: 'Morning Sunlight Habit',
      description: 'How 10 minutes of morning sunlight can transform your daily energy and sleep quality.',
      readTime: '4 min read',
      href: '/learn/morning-sunlight',
      category: 'Daily Habits',
    },
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 mb-4">
            <BookOpen className="w-6 h-6" />
            <span className="font-semibold tracking-widest uppercase text-sm">Knowledge Library</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-slate-50 mb-6 text-balance">
            Explore wellness wisdom.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed text-balance">
            Discover articles, expert guides, and practical protocols to elevate your daily habits.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Featured Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Featured Guides</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredGuides.slice(0, 2).map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="group flex flex-col bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-emerald-200 transition-all duration-300"
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
                      {guide.category}
                    </span>
                    <h3 className="text-xl font-medium text-slate-900 dark:text-slate-100 mb-3 group-hover:text-emerald-600 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
                      {guide.description}
                    </p>
                    <div className="flex items-center text-sm text-slate-400 dark:text-slate-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {guide.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Popular Concepts */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Popular Right Now</h2>
              </div>
              <div className="space-y-4">
                {featuredGuides.map((guide) => (
                  <Link
                    key={guide.title}
                    href={guide.href}
                    className="group flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-200 transition-all duration-300"
                  >
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{guide.category}</p>
                    </div>
                    <div className="hidden sm:flex items-center text-sm text-slate-400">
                      <Clock className="w-4 h-4 mr-1.5" />
                      {guide.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-6">Categories</h3>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat.title}>
                    <Link href="/learn" className="group flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400 group-hover:text-emerald-600 transition-colors">
                        {cat.title}
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs px-2.5 py-1 rounded-full">
                        {cat.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
