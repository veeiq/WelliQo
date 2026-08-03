import React from 'react';
import { contentAdapter } from '@/lib/content';
import { ActionHubContainer, DiscoveryBlock } from '@welliqo/ui/components/action-hub';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const actionHub = contentAdapter.buildActionHub(slug);
  if (!actionHub) return {};
  
  const content = actionHub.primaryContent;
  return {
    title: content.seoTitle || `${content.title} | WelliQo Action Hub`,
    description: content.seoDescription || content.summary || `Discover ${content.title} on WelliQo.`,
  };
}

export default async function ActionHubPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // The content adapter resolves the Action Hub from the compiled JSON index
  const actionHub = contentAdapter.buildActionHub(slug);

  if (!actionHub) {
    notFound();
  }

  const recommendations = contentAdapter.getDiscoveryRecommendations(actionHub.primaryContent.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": actionHub.primaryContent.title,
    "datePublished": actionHub.primaryContent.createdAt || new Date().toISOString(),
    "dateModified": actionHub.primaryContent.updatedAt || new Date().toISOString()
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ActionHubContainer actionHub={actionHub} />
      <DiscoveryBlock recommendations={recommendations} />
    </main>
  );
}
