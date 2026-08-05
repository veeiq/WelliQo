import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ASSESSMENTS } from '@/assessments/registry';
import { Metadata } from 'next';
import { ArrowRight, Clock, Target, Users, Activity, FileText, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export async function generateStaticParams() {
  return ASSESSMENTS.filter(a => a.enabled).map((assessment) => ({
    slug: assessment.id,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const assessment = ASSESSMENTS.find((a) => a.id === params.slug);
  
  if (!assessment || !assessment.enabled) {
    return { title: 'Assessment Not Found' };
  }

  return {
    title: `${assessment.title} Assessment`,
    description: assessment.description,
    openGraph: {
      title: `${assessment.title} | WelliQo Assessment`,
      description: assessment.description,
      type: 'website',
    },
  };
}

export default async function AssessmentDetailsPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const assessment = ASSESSMENTS.find((a) => a.id === params.slug);

  if (!assessment || !assessment.enabled) {
    notFound();
  }

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/50 via-white to-white dark:from-emerald-900/20 dark:via-slate-900 dark:to-slate-900"></div>
        <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center flex flex-col items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100 dark:bg-slate-800 text-4xl shadow-inner mb-8">
            {assessment.emoji}
          </div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-800/50 px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400">
            {assessment.category}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
            {assessment.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10">
            {assessment.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href={`/assessment?id=${assessment.id}`}
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-emerald-500 hover:scale-105 shadow-xl shadow-emerald-500/20"
            >
              Start Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium bg-white dark:bg-slate-800 px-6 py-4 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
              <Clock className="h-5 w-5" />
              <span>Takes ~3 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="container mx-auto px-4 py-20 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2 space-y-16">
            {/* 2. PURPOSE */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Purpose</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                This assessment is designed to establish a comprehensive baseline for your {assessment.title.toLowerCase()}. 
                By understanding your current habits, symptoms, and lifestyle factors, our AI engine can identify specific 
                areas for improvement and generate a highly personalized action plan tailored to your body's unique needs.
              </p>
            </div>

            {/* 3. WHO SHOULD TAKE IT */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Who should take this?</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                  <span className="text-lg text-slate-600 dark:text-slate-400">Individuals looking to optimize their {assessment.title.toLowerCase()} and overall well-being.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                  <span className="text-lg text-slate-600 dark:text-slate-400">Anyone experiencing early signs of fatigue, imbalance, or plateaus in their health journey.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                  <span className="text-lg text-slate-600 dark:text-slate-400">Those seeking science-backed, data-driven recommendations rather than generic advice.</span>
                </li>
              </ul>
            </div>

            {/* 4. WHAT IS MEASURED */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                  <Activity className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">What is measured</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Generic placeholders based on standard assessment structure */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Current Symptoms</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Frequency and severity of related symptoms.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Lifestyle Habits</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Dietary choices, sleep patterns, and physical activity.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Historical Data</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Past interventions, medical context, and family history.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Goals & Readiness</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Your specific targets and readiness for change.</p>
                </div>
              </div>
            </div>

          </div>
          
          {/* SIDEBAR */}
          <div className="space-y-8">
            {/* 6. SAMPLE REPORT PREVIEW */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <FileText className="h-10 w-10 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">What you'll get</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  Overall Wellness Score
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  Risk factor analysis
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  Nutritional guidance
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  Supplement recommendations
                </li>
              </ul>
              <Link
                href={`/assessment?id=${assessment.id}`}
                className="flex items-center justify-between w-full bg-white text-slate-900 px-6 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Start Now
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>

            {/* 7. FAQ COMPACT */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="h-6 w-6 text-slate-400" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Quick FAQ</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">Is this assessment free?</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Yes, the assessment and initial AI report are completely free.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">How accurate is the AI?</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Our engine uses rules and logic built by certified wellness experts and is science-informed.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">Do I need to fast?</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">No fasting or lab work is required to take this initial lifestyle assessment.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. RELATED ASSESSMENTS */}
      <section className="bg-slate-100 dark:bg-slate-900/50 py-20 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">You might also be interested in</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ASSESSMENTS.filter(a => a.id !== assessment.id && a.enabled).slice(0, 3).map(related => (
              <Link 
                key={related.id} 
                href={`/assessments/${related.id}`}
                className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl">
                    {related.emoji}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {related.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                  {related.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
