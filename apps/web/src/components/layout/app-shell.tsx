import type { ReactNode } from 'react';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/site-header';
import { SkipLink } from '@welliqo/ui/components/skip-link';
import { auth } from '@/auth';
import { AssessmentRegistry } from '@/assessments/registry';
import { Instagram, Youtube, Facebook, Check } from 'lucide-react';

export async function AppShell({ children }: Readonly<{ children: ReactNode }>) {
  const session = await auth();
  
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SkipLink targetId="main-content" />
      <SiteHeader user={session?.user} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      
      <footer className="w-full bg-slate-950 text-slate-400 py-6 px-4 md:px-8 text-sm leading-relaxed border-t border-slate-900 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Left Column (Brand & Socials) */}
          <div className="lg:col-span-5 space-y-6 pr-8 flex flex-col h-full">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-12 w-12 flex items-center justify-center group">
                  <img src="/logo.jpg" alt="WelliQo" className="w-full h-full object-contain rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="font-semibold text-2xl tracking-tight text-white">
                  Welli<span className="text-emerald-500">Q</span>o
                </span>
              </div>
              
              <p className="text-emerald-500 text-[17px] leading-relaxed max-w-sm font-medium mb-4">
                Helping people understand their bodies before trying to change them.
              </p>

              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-[13px] text-slate-400 font-medium max-w-sm">
                <div className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /> Science-informed</div>
                <div className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /> Personalized guidance</div>
                <div className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /> Privacy-first</div>
                <div className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /> No spam</div>
              </div>
            </div>

            <div className="pt-4 mt-auto">
              <p className="text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-4">Connect With Us</p>
              <div className="flex gap-4 items-center">
                <a href="https://x.com/WelliQo" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-black transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:border-slate-700 active:scale-95">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.076H5.036z" /></svg>
                </a>
                <a href="https://instagram.com/WelliQo" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-transparent transition-all group relative active:scale-95">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300 -z-10" />
                  <Instagram className="w-[20px] h-[20px] relative z-10" />
                </a>
                <a href="https://facebook.com/WelliQo" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all hover:shadow-[0_0_15px_rgba(24,119,242,0.3)] active:scale-95">
                  <Facebook className="w-[20px] h-[20px]" />
                </a>
                <a href="https://youtube.com/@WelliQo" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] active:scale-95">
                  <Youtube className="w-[22px] h-[22px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Menus & CTA) */}
          <div className="lg:col-span-7 flex flex-col h-full pt-2">
            
            {/* Menus Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="text-white font-medium mb-4 tracking-wide">Explore</h3>
                <ul className="space-y-4">
                  <li><Link href={AssessmentRegistry.getDirectoryRoute()} className="text-slate-400 hover:text-emerald-400 transition-colors">Assessments</Link></li>
                  <li><Link href="/goals" className="text-slate-400 hover:text-emerald-400 transition-colors">Goals</Link></li>
                  <li><Link href="/health-library" className="text-slate-400 hover:text-emerald-400 transition-colors">Library</Link></li>
                  <li><Link href="/coaches" className="text-slate-400 hover:text-emerald-400 transition-colors">Coaches</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-medium mb-4 tracking-wide">Company</h3>
                <ul className="space-y-4">
                  <li><Link href="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">About</Link></li>
                  <li><Link href="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-medium mb-4 tracking-wide">Resources</h3>
                <ul className="space-y-4">
                  <li><Link href="/privacy-policy" className="text-slate-400 hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-slate-400 hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
                  <li><Link href="/medical-disclaimer" className="text-slate-400 hover:text-emerald-400 transition-colors">Medical Disclaimer</Link></li>
                  <li><Link href="/cookie-policy" className="text-slate-400 hover:text-emerald-400 transition-colors">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>

            {/* Inline CTA (next to socials, below menus) */}
            <div className="mt-auto pt-4 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <h4 className="text-lg font-semibold text-white mb-1.5">Still thinking about your health?</h4>
                <p className="text-slate-400 text-sm">Take the free 5-minute assessment and get your baseline.</p>
              </div>
              <Link 
                href={AssessmentRegistry.getDirectoryRoute()}
                className="group flex-shrink-0 relative flex h-11 items-center justify-center overflow-hidden rounded-full bg-emerald-600 px-6 font-medium text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
              >
                <span className="relative z-10 text-sm">Start Assessment</span>
                <span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform duration-300 text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-slate-800 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="max-w-xl space-y-3">
            <p className="text-slate-300 text-[15px] font-medium leading-relaxed">
              WelliQo doesn't replace your doctor. It helps you better understand your daily habits so you can make informed decisions about your health.
            </p>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Any wellness or nutritional recommendations provided by WelliQo are intended to support a healthy lifestyle. They are not intended to diagnose, treat, cure, or prevent any disease, and should not replace professional medical advice. Individual results vary based on your starting point, goals, consistency, and lifestyle.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
            <p className="text-slate-500 text-[13px] font-medium">© {new Date().getFullYear()} WelliQo. All rights reserved.</p>
            <p className="text-slate-500 text-[13px]">
              Designed & Built with <span className="text-red-500 animate-pulse inline-block mx-0.5">❤️</span> in India by <a href="https://veeiq.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors">VeeiQ Technologies</a>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
