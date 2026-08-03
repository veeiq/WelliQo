import { notFound } from 'next/navigation';
import Link from 'next/link';
import { contentAdapter } from '@/lib/content';
import { MDXRenderer } from '@welliqo/ui/components/action-hub';

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Find the coach node by slug
  // The adapter's index contains nodes. We can iterate to find the coach.
  const nodes = Object.values(contentAdapter['index'].nodes);
  const coachNode = nodes.find((n) => n.type === 'coach' && n.slug === slug);

  if (!coachNode) {
    notFound();
  }

  // Find content written by this author
  const authoredContent = nodes.filter((n) => n.author === coachNode.title && n.type !== 'coach');

  return (
    <div className="container py-12 max-w-4xl mx-auto">
      <Link
        href="/learn"
        className="text-[var(--color-accent-primary)] hover:underline mb-8 inline-block font-medium"
      >
        &larr; Back to Knowledge
      </Link>

      <div className="bg-[var(--color-background-secondary)] p-8 rounded-3xl border border-[var(--color-border-subtle)] mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-[var(--color-accent-primary)] flex items-center justify-center text-white text-3xl font-bold">
            {coachNode.title.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">
              {coachNode.title}
            </h1>
            <p className="text-[var(--color-text-secondary)]">{coachNode.topic}</p>
          </div>
        </div>

        {coachNode.rawBody && (
          <div className="prose dark:prose-invert max-w-none">
            <MDXRenderer source={coachNode.rawBody} />
          </div>
        )}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
          Articles & Guides by {coachNode.title}
        </h2>

        {authoredContent.length === 0 ? (
          <p className="text-[var(--color-text-secondary)] italic">
            This author hasn't published any content yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {authoredContent.map((node) => (
              <Link
                key={node.id}
                href={`/action-hub/${node.slug}`}
                className="flex flex-col bg-[var(--color-background-secondary)] rounded-xl border border-[var(--color-border-subtle)] p-5 hover:border-[var(--color-accent-primary)] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold px-2 py-1 bg-[var(--color-background-tertiary)] text-[var(--color-text-secondary)] rounded-md capitalize">
                    {node.type}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent-primary)] transition-colors">
                  {node.title}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
