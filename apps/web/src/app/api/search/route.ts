import { NextResponse } from 'next/server';

import { searchContent } from '@/lib/knowledge-engine';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  
  if (!q || q.length < 2) {
    return NextResponse.json([]);
  }

  const results = searchContent(q).slice(0, 5); // Return top 5 matches
  
  const formattedResults = results.map(r => ({
    id: r.id,
    title: r.title,
    type: r.type,
    category: r.category
  }));

  return NextResponse.json(formattedResults);
}
