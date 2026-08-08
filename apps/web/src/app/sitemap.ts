import { MetadataRoute } from 'next';
import { getAllKnowledgeContent } from '@/lib/knowledge-engine';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://welliqo.com';

  // Base static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/health-library`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // Dynamic knowledge content routes
  const allContent = getAllKnowledgeContent();
  const contentRoutes: MetadataRoute.Sitemap = allContent.map((content) => {
    let urlType = 'article';
    if (content.type === 'ARTICLE') urlType = 'article';
    else if (content.type === 'GUIDE') urlType = 'guide';
    else if (content.type === 'RECIPE') urlType = 'recipe';
    else if (content.type === 'HABIT') urlType = 'habit';
    else if (content.type === 'EXERCISE_GUIDE') urlType = 'exercise-guide';

    return {
      url: `${baseUrl}/health-library/${urlType}/${content.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    };
  });

  return [...staticRoutes, ...contentRoutes];
}
