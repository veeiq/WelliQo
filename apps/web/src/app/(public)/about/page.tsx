import React from 'react';
import Link from 'next/link';
import { AssessmentRegistry } from '@/assessments/registry';
import { ArrowDown } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | WelliQo',
  description: 'Health advice is everywhere. Understanding your body is rare.',
};

export default function AboutPage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen font-sans selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* HERO SECTION */}
      <section className="px-4 py-32 md:py-48 max-w-5xl mx-auto text-center flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1] text-balance">
          Health advice is everywhere.<br/>
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">Understanding your body is rare.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl font-light leading-relaxed text-balance">
          WelliQo wasn't built to tell everyone the same thing.<br/>
          It was built to understand one person at a time.
        </p>
      </section>

      {/* BUILT BY ALOK */}
      <section className="px-4 py-24 max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-12 shadow-2xl shadow-emerald-900/20">
          <img 
            src="/alok.jpg" 
            alt="Alok" 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
          />
        </div>
        <h2 className="text-3xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6">
          Hi, I'm Alok.
        </h2>
        <div className="text-xl md:text-3xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl space-y-8">
          <p>
            I spent years watching people receive generic advice that rarely fit their lives.
          </p>
          <p>
            I wanted to build something different.<br/>
            Something that listens before it teaches.
          </p>
          <p className="text-sm md:text-base text-slate-500 pt-12 uppercase tracking-widest font-semibold text-balance">
            Built by Alok.<br/>For everyone who's tired of generic wellness advice.
          </p>
        </div>
      </section>

      {/* WHY WELLIQO EXISTS */}
      <section className="px-4 py-32 md:py-48 max-w-5xl mx-auto">
        <h2 className="text-sm font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-500 mb-16 text-center">Why WelliQo Exists</h2>
        <div className="space-y-24 md:space-y-32 text-center md:text-left">
          <div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-500 dark:text-slate-400 mb-4 text-balance">Most health advice starts with answers.</h3>
            <p className="text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 dark:text-white text-balance">We start with questions.</p>
          </div>
          <div className="md:text-right">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-500 dark:text-slate-400 mb-4 text-balance">Most apps track numbers.</h3>
            <p className="text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 dark:text-white text-balance">We explain patterns.</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-500 dark:text-slate-400 mb-4 text-balance">Most plans tell you what to do.</h3>
            <p className="text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 dark:text-white text-balance">We help you understand why.</p>
          </div>
        </div>
      </section>

      {/* HOW WELLIQO THINKS */}
      <section className="px-4 py-32 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-500 mb-20">How WelliQo Thinks</h2>
          
          <div className="flex flex-col items-center space-y-8 text-2xl md:text-4xl font-light text-slate-800 dark:text-slate-200">
            <div className="font-medium text-slate-900 dark:text-white">You</div>
            <ArrowDown className="w-8 h-8 text-emerald-300 dark:text-emerald-800" strokeWidth={1.5} />
            <div>Assessment</div>
            <ArrowDown className="w-8 h-8 text-emerald-400 dark:text-emerald-700" strokeWidth={1.5} />
            <div>Understanding</div>
            <ArrowDown className="w-8 h-8 text-emerald-500 dark:text-emerald-600" strokeWidth={1.5} />
            <div>Body Intelligence</div>
            <ArrowDown className="w-8 h-8 text-emerald-600 dark:text-emerald-500" strokeWidth={1.5} />
            <div>Nutrition Intelligence</div>
            <ArrowDown className="w-8 h-8 text-emerald-700 dark:text-emerald-400" strokeWidth={1.5} />
            <div>Daily Blueprint</div>
            <ArrowDown className="w-8 h-8 text-emerald-800 dark:text-emerald-300" strokeWidth={1.5} />
            <div>Small Habits</div>
            <ArrowDown className="w-8 h-8 text-emerald-900 dark:text-emerald-200" strokeWidth={1.5} />
            <div className="font-medium text-emerald-600 dark:text-emerald-400">Long-term Health</div>
          </div>
        </div>
      </section>

      {/* OUR PRINCIPLES */}
      <section className="px-4 py-32 md:py-48 max-w-4xl mx-auto">
        <h2 className="text-sm font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-500 mb-20 text-center">Our Principles</h2>
        
        <div className="space-y-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-medium text-slate-900 dark:text-white mb-4">Evidence before opinion.</h3>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light">Every recommendation should have a reason.</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-medium text-slate-900 dark:text-white mb-4">Compassion before motivation.</h3>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light text-balance">People don't change because they are judged.</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-medium text-slate-900 dark:text-white mb-4">Progress before perfection.</h3>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light">Small improvements matter.</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-medium text-slate-900 dark:text-white mb-4">Privacy by design.</h3>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light">Your health belongs to you.</p>
          </div>
        </div>
      </section>

      {/* THE TECHNOLOGY */}
      <section className="px-4 py-32 bg-slate-900 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest uppercase text-emerald-400 mb-16">The Intelligence Behind WelliQo</h2>
          
          <h3 className="text-3xl md:text-5xl font-light leading-tight mb-16 text-balance">
            WelliQo combines
          </h3>
          
          <div className="flex flex-col items-center gap-6 text-2xl md:text-4xl font-medium mb-16">
            <div className="flex items-center gap-4"><span className="text-emerald-500 font-light">✓</span> behavioral science</div>
            <div className="flex items-center gap-4"><span className="text-emerald-500 font-light">✓</span> nutrition science</div>
            <div className="flex items-center gap-4"><span className="text-emerald-500 font-light">✓</span> health mathematics</div>
            <div className="flex items-center gap-4"><span className="text-emerald-500 font-light">✓</span> personalized reasoning</div>
          </div>
          
          <p className="text-2xl md:text-4xl font-light text-slate-400 text-balance">
            to produce one report built specifically for you.
          </p>
        </div>
      </section>

      {/* DEFINING SENTENCE */}
      <section className="px-4 py-32 md:py-48 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-slate-900 dark:text-white leading-[1.2] text-balance">
          "We don't tell you what's healthy.<br/>
          <span className="text-emerald-600 dark:text-emerald-500 font-normal italic">We help you understand what's healthy for you.</span>"
        </h2>
      </section>

      {/* OUR PROMISE */}
      <section className="px-4 py-32 bg-white dark:bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-500 mb-20">Our Promise</h2>
          
          <div className="text-2xl md:text-4xl font-light text-slate-800 dark:text-slate-200 leading-relaxed space-y-12">
            <p>We will never sell your health data.</p>
            <p>We will never recommend something because it pays us.</p>
            <p>We will never replace medical professionals.</p>
            <p className="font-medium text-slate-900 dark:text-white text-balance">We will always try to help you understand yourself better than yesterday.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-32 md:py-48 text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-12">
          Ready to understand your body?
        </h2>
        <Link 
          href={AssessmentRegistry.getDirectoryRoute()}
          className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-emerald-500/20"
        >
          Start Free Assessment
        </Link>
      </section>

    </div>
  );
}
