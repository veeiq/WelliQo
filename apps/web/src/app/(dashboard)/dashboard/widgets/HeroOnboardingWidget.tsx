import React from 'react';
import Link from 'next/link';
import { Sparkles, Clock, LayoutGrid, ShieldCheck } from 'lucide-react';
import { WidgetCard } from './WidgetCard';

export function HeroOnboardingWidget() {
  return (
    <WidgetCard className="lg:col-span-3 bg-slate-900 border-0 p-8 md:p-12 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M45.7,-76.3C58.8,-69.3,68.8,-55.8,76.5,-41.2C84.1,-26.6,89.4,-11,87.6,3.8C85.7,18.5,76.7,32.3,66.6,44.2C56.6,56.1,45.4,66,31.7,73.1C18,80.3,1.8,84.7,-13.7,82.4C-29.2,80.1,-43.9,71.2,-55.5,60.1C-67.1,49,-75.6,35.6,-81.1,20.8C-86.5,5.9,-88.9,-10.4,-84.6,-24.8C-80.4,-39.2,-69.5,-51.7,-56.3,-59.5C-43.1,-67.3,-27.6,-70.4,-12.3,-72.1C3,-73.8,18,-74,32.6,-75.2C45.7,-76.3,45.7,-76.3,45.7,-76.3Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-emerald-400 text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Your wellness journey starts here</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          No Wellness Score Yet
        </h2>
        
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
          Discover your baseline and unlock a personalized health roadmap tailored entirely to your unique biology, lifestyle, and goals.
        </p>

        <Link href="/assessments" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg hover:shadow-emerald-500/25 mb-12">
          Start Your First Assessment
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl pt-8 border-t border-white/10">
          <div className="flex flex-col items-center">
            <Clock className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="font-semibold text-white mb-1">3 Minutes</h4>
            <p className="text-sm text-slate-400">Quick, targeted questions</p>
          </div>
          <div className="flex flex-col items-center">
            <LayoutGrid className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="font-semibold text-white mb-1">40+ Assessments</h4>
            <p className="text-sm text-slate-400">Covering every aspect of health</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="font-semibold text-white mb-1">Science-Backed</h4>
            <p className="text-sm text-slate-400">Clinical-grade engine</p>
          </div>
        </div>
      </div>
    </WidgetCard>
  );
}
