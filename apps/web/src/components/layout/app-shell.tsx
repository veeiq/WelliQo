import type { ReactNode } from 'react';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/site-header';
import { SkipLink } from '@welliqo/ui/components/skip-link';
import { auth } from '@/auth';
import { AssessmentRegistry } from '@/assessments/registry';

export async function AppShell({ children }: Readonly<{ children: ReactNode }>) {
  const session = await auth();
  
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SkipLink targetId="main-content" />
      <SiteHeader user={session?.user} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <footer className="w-full bg-slate-900 text-slate-400 py-16 px-4 text-sm leading-relaxed border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 flex items-center justify-center">
                <img src="/logo.jpg" alt="WelliQo" className="w-full h-full object-contain rounded-xl shadow-lg" />
              </div>
              <span className="font-semibold text-2xl tracking-tight text-white">
                Welli<span className="text-emerald-500">Q</span>o
              </span>
            </div>
            <p className="text-emerald-400 font-medium">Intelligent Wellness, Science-Informed</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Personalized wellness assessments, evidence-informed insights, and practical guidance to help you build healthier habits for life.
            </p>

          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href={AssessmentRegistry.getDirectoryRoute()} className="hover:text-emerald-400 transition-colors">Assessments</Link></li>
              <li><Link href="/goals" className="hover:text-emerald-400 transition-colors">Goals</Link></li>
              <li><span className="text-slate-600 cursor-not-allowed">Reports</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link></li>
              <li><Link href="/coaches" className="hover:text-emerald-400 transition-colors">Coaches</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
              <li><Link href="/health-library" className="hover:text-emerald-400 transition-colors">Library</Link></li>
              <li><Link href="/faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/medical-disclaimer" className="hover:text-emerald-400 transition-colors">Medical Disclaimer</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-emerald-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs text-center md:text-left max-w-2xl">
            Any wellness or nutritional recommendations provided by WelliQo are intended to support a healthy lifestyle. They are not intended to diagnose, treat, cure, or prevent any disease, and should not replace professional medical advice. Individual results vary based on your starting point, goals, consistency, and lifestyle.
          </p>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-slate-500">© {new Date().getFullYear()} WelliQo. All rights reserved.</p>
            <p className="text-slate-600">Built with ❤️ in India by <a href="https://veeiq.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-500 font-medium transition-colors">VeeiQ</a>.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
