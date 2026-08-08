import type { KnowledgeContent } from '@/types/knowledge';

export function getTopicImage(content: KnowledgeContent, isHero: boolean = false): string {
  // If the content already has a thumbnail defined (from the MDX frontmatter), use it.
  if (content.thumbnail) {
    return content.thumbnail;
  }

  // Fallback map for when a specific thumbnail isn't provided.
  // These are all strictly locally hosted files in /public/images/topics/
  const map: Record<string, string> = {
    "Nutrition & Fuel": "/images/topics/nutrition-landscape.webp",
    "Sleep & Recovery": "/images/topics/sleep-landscape.webp",
    "Movement & Physiology": "/images/topics/fitness-landscape.webp",
    "Mind & Neuroscience": "/images/topics/mental-health-landscape.webp",
    "General": "/images/topics/general-landscape.webp"
  };

  return map[content.category] || "/images/topics/general-landscape.webp";
}
