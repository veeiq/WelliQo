import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AppShell } from '@/components/layout/app-shell';
import { ThemeProvider } from '@/components/theme-provider';
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp';
import './globals.css';

export const metadata: Metadata = {
  title: 'WelliQo | Wellness Companion Platform',
  description: 'Your personalized companion for circadian health, metabolic wellness, and daily energy.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppShell>{children}</AppShell>
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
