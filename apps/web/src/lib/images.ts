import type { KnowledgeContent } from '@/types/knowledge';

export function getTopicImage(content: Pick<KnowledgeContent, 'category' | 'tags' | 'goals'>, isHero: boolean = false): string {
  const aspect = isHero ? 'landscape' : 'portrait';
  const str = (content.category + ' ' + content.tags.join(' ') + ' ' + content.goals.join(' ')).toLowerCase();
  
  if (str.includes('protein') || str.includes('nutrition') || str.includes('diet') || str.includes('carb') || str.includes('sugar')) {
    return `/images/topics/nutrition-${aspect}.webp`;
  }
  if (str.includes('sleep') || str.includes('recovery')) {
    return `/images/topics/sleep-${aspect}.webp`;
  }
  if (str.includes('stress') || str.includes('mind') || str.includes('mental')) {
    return `/images/topics/mental-health-${aspect}.webp`;
  }
  if (str.includes('heart') || str.includes('hydration') || str.includes('sodium') || str.includes('blood')) {
    return `/images/topics/heart-${aspect}.webp`;
  }
  if (str.includes('gut') || str.includes('fiber') || str.includes('digestion')) {
    return `/images/topics/gut-health-${aspect}.webp`;
  }
  if (str.includes('exercise') || str.includes('fitness') || str.includes('muscle')) {
    return `/images/topics/fitness-${aspect}.webp`;
  }
  
  return `/images/topics/nutrition-${aspect}.webp`; // Fallback
}
