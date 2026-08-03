import React from 'react';
import { Briefcase, Info, Users, LineChart, Globe } from 'lucide-react';

export default function BusinessPage() {
  const benefits = [
    { title: 'Global Community', icon: <Globe className="w-6 h-6" />, description: 'Join a worldwide network of wellness coaches.' },
    { title: 'Financial Independence', icon: <LineChart className="w-6 h-6" />, description: 'Build your own business on your own terms.' },
    { title: 'Mentorship', icon: <Users className="w-6 h-6" />, description: 'Receive guidance from experienced business builders.' },
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
      {/* Coming Soon Banner */}
      <div className="bg-teal-600 text-white px-4 py-3 text-center text-sm font-medium">
        <span className="flex items-center justify-center gap-2">
          <Info className="w-4 h-4" />
          The business opportunity portal is coming soon.
        </span>
      </div>

      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center gap-3 text-teal-600 dark:text-teal-400 mb-4">
            <Briefcase className="w-6 h-6" />
            <span className="font-semibold tracking-widest uppercase text-sm">Business Opportunity</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-slate-50 mb-6 text-balance">
            Turn your passion into purpose.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed text-balance">
            Help others achieve their wellness goals while building a sustainable business of your own.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">The Wellness Opportunity</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  The wellness industry is growing rapidly, driven by people looking for holistic, science-backed solutions to improve their daily lives. By becoming a wellness coach, you are stepping into a role of leadership and care.
                </p>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 mt-4">
                  You don&apos;t just sell products; you guide individuals on their journey, interpreting their needs, and providing the support required to build lasting healthy habits.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">Why Join Us?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
                    <div className="p-4 bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full mb-4">
                      {benefit.icon}
                    </div>
                    <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Ready to start?</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Information regarding starter kits, compensation plans, and early training will be available here soon.
              </p>
              <button disabled className="w-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 font-medium px-6 py-3 rounded-full cursor-not-allowed">
                Join Now (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
