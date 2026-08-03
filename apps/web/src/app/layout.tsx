import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Outfit } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WelliQo | Personalized Wellness & Nutrition',
  description: 'Achieve your health goals with customized nutrition plans, expert coaching, and high-quality wellness products. Start your free wellness assessment today.',
  keywords: ['wellness', 'nutrition', 'weight loss', 'herbalife', 'health coach', 'healthy aging', 'fitness'],
  openGraph: {
    title: 'WelliQo | Personalized Wellness Assessment',
    description: 'Discover your wellness baseline and get a customized nutrition plan.',
    type: 'website',
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={outfit.variable}>
      <body className="font-sans antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-emerald-200 selection:text-emerald-900 min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Global Herbalife Compliance Footer */}
          <footer className="w-full bg-slate-900 text-slate-400 py-8 px-4 text-xs leading-relaxed border-t border-slate-800 mt-auto">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="space-y-2 max-w-3xl text-left">
                <p>
                  <strong>Independent Herbalife Associate:</strong> Alok Kumar Mahapatra
                </p>
                <p>
                  These products are not intended to diagnose, treat, cure, or prevent any disease. Results are not typical. Individual results will vary depending on starting point, goals, and effort. 
                </p>
                <p>
                  © {new Date().getFullYear()} WelliQo. All rights reserved. This website is operated by independent associates and is not the official Herbalife corporate website.
                </p>
              </div>
              <div className="flex-shrink-0 text-slate-500 md:text-right">
                <p>Built with ❤️ in India by <a href="https://veeiq.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 font-medium">VeeiQ</a>.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
