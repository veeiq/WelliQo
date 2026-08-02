import React from 'react';
import { contentAdapter } from '@/lib/content';
import { ActionHubContainer } from '@welliqo/ui/components/action-hub';
import { notFound } from 'next/navigation';

export default async function ActionHubPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // The content adapter resolves the Action Hub from the compiled JSON index
  const actionHub = contentAdapter.buildActionHub(slug);
  
  if (!actionHub) {
    notFound();
  }

  return (
    <main>
      <ActionHubContainer actionHub={actionHub} />
    </main>
  );
}
