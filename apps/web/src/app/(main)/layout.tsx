import type { ReactNode } from 'react';
import { AppShell } from '@/components/layout/app-shell';
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp';

export default function MainLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <AppShell>{children}</AppShell>
      <FloatingWhatsApp />
    </>
  );
}
