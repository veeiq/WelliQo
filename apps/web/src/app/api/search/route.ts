import { NextResponse } from 'next/server';
import { contentAdapter } from '@/lib/content';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');

  if (!q) {
    return NextResponse.json([]);
  }

  const results = contentAdapter.search(q);

  // Return just the lightweight search index payload for speed
  const searchIndex = results.map((node) => ({
    id: node.id,
    title: node.title,
    type: node.type,
    slug: node.slug,
    goals: node.goals,
    domain: node.domain,
    category: node.category,
  }));

  return NextResponse.json(searchIndex);
}
