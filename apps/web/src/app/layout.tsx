import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Outfit } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { NextAuthProvider } from '@/components/session-provider';
import '@/env'; // Validate environment variables early
import './globals.css';
import { validateAssessments } from '@/assessments/validator';

// Fail fast: Validate assessment registry on server startup
validateAssessments();

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'WelliQo | Intelligent Wellness, Science-Informed',
    template: '%s | WelliQo'
  },
  description: 'Achieve your health goals with customized nutrition plans, expert coaching, and high-quality wellness products. Start your free wellness assessment today.',
  keywords: ['wellness', 'nutrition', 'weight loss', 'health coach', 'healthy aging', 'fitness'],
  openGraph: {
    title: 'WelliQo | Intelligent Wellness, Science-Informed',
    description: 'Discover your wellness baseline and get a customized nutrition plan.',
    type: 'website',
    images: ['/logo.jpg'],
  },
  manifest: '/manifest.json'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={outfit.variable}>
      <body className="font-sans antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-emerald-200 selection:text-emerald-900 min-h-screen flex flex-col print:block print:min-h-0 print:h-auto">
        <NextAuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <main className="flex-grow print:block print:h-auto">
              {children}
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
