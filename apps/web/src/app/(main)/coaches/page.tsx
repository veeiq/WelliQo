import Link from 'next/link';
import { COACHES } from '@/lib/coaches';

export const metadata = {
  title: 'Our Wellness Coaches | WelliQo',
  description: 'Connect with expert wellness coaches to guide you on your health journey.',
};

export default function CoachesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "WelliQo Wellness Coaches",
    "description": "Directory of official WelliQo wellness coaches available for personal guidance."
  };

  return (
    <main className="container py-16 max-w-6xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
          Meet Your Support System
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          Knowledge is the foundation, but human support makes the journey easier. Connect with our official wellness coaches for personalized guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {COACHES.map((coach) => (
          <div key={coach.id} className="bg-[var(--color-background-secondary)] rounded-3xl p-8 border border-[var(--color-border-subtle)] flex flex-col h-full hover:shadow-lg transition-all hover:border-[var(--color-accent-primary)]">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-3xl font-bold text-indigo-700 dark:text-indigo-300 shrink-0">
                {coach.photo}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">{coach.name}</h2>
                <p className="text-[var(--color-accent-primary)] font-medium mb-3">{coach.expertise}</p>
                <div className="flex flex-wrap gap-2 text-xs text-[var(--color-text-secondary)]">
                  <span className="bg-[var(--color-background-tertiary)] px-2 py-1 rounded-md">
                    🗣 {coach.languages.join(', ')}
                  </span>
                  {coach.city && (
                    <span className="bg-[var(--color-background-tertiary)] px-2 py-1 rounded-md">
                      📍 {coach.city}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <p className="text-[var(--color-text-secondary)] mb-8 flex-1">
              {coach.shortIntro}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Link 
                href={`/coaches/${coach.slug}`}
                className="flex-1 text-center bg-[var(--color-accent-primary)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors shadow-sm"
              >
                Request Callback
              </Link>
              <Link 
                href={`/coaches/${coach.slug}`}
                className="flex-1 text-center bg-[var(--color-background-tertiary)] text-[var(--color-text-primary)] px-6 py-3 rounded-xl font-semibold hover:bg-[var(--color-border-subtle)] transition-colors"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}

        {/* Recruitment Card */}
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col h-full items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-3xl mb-6">
            ✨
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Become Our Next Coach</h2>
          <p className="text-[var(--color-text-secondary)] mb-8">
            Are you passionate about wellness? Join our network of independent coaches and help transform lives.
          </p>
          <a href="mailto:careers@welliqo.com" className="bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
            Apply Now
          </a>
        </div>
      </div>
    </main>
  );
}
