import Link from 'next/link';
import { COACHES } from '@/lib/coaches';
import { User, MessageCircle, PhoneCall, Mail, Globe, Award, HeartPulse } from 'lucide-react';

export const metadata = {
  title: 'Our Wellness Coaches | WelliQo',
  description: 'Connect with expert wellness coaches to guide you on your health journey.',
};

export default function CoachesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'WelliQo Wellness Coaches',
    description: 'Directory of official WelliQo wellness coaches available for personal guidance.',
  };

  return (
    <main className="container py-16 max-w-5xl mx-auto px-4 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Meet Your Support System
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Knowledge is the foundation, but human support makes the journey easier. Connect with our
          official wellness coaches for personalized guidance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {COACHES.map((coach) => (
          <div key={coach.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -mr-16 -mt-16 z-0"></div>
            
            <div className="flex items-center gap-5 mb-6 relative z-10">
              <div className="w-24 h-24 rounded-full border-4 border-emerald-50 dark:border-emerald-900/30 overflow-hidden shrink-0 shadow-sm flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/50">
                {coach.avatarUrl ? (
                  <img src={coach.avatarUrl} alt={coach.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <User className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">{coach.name}</h3>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-500 text-sm font-semibold mt-1">
                  <HeartPulse className="w-4 h-4" />
                  {coach.expertise}
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8 text-sm relative z-10 flex-1">
              <p className="text-slate-600 dark:text-slate-400 italic mb-4">
                "{coach.shortIntro}"
              </p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{coach.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Globe className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="truncate">{coach.languages.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 col-span-2">
                  <User className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Available: {coach.timings}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 relative z-10 pt-6 border-t border-slate-100 dark:border-slate-800 mt-auto">
              <a 
                href={`https://wa.me/${coach.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-all shadow-md shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href={`tel:+${coach.phone}`}
                  className="flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call
                </a>
                <a 
                  href={`mailto:${coach.email}`}
                  className="flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Recruitment Card */}
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col h-full items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-3xl mb-6">
            ✨
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Become Our Next Coach
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm">
            Are you passionate about wellness? Join our network of independent coaches and help
            transform lives.
          </p>
          <a
            href="mailto:careers@welliqo.com"
            className="bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            Apply Now
          </a>
        </div>
      </div>
    </main>
  );
}
