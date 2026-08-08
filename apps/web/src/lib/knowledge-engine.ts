import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { prisma } from '@/lib/prisma';
import { KnowledgeContent, KnowledgeType, JourneyStage } from '@/types/knowledge';
import { ContentFrontmatterSchema } from '@/data/content/schema';

// Helper to get all MDX content
export function getAllKnowledgeContent(): KnowledgeContent[] {
  const contentDir = path.join(process.cwd(), 'src/data/content/mdx');
  const allContent: KnowledgeContent[] = [];
  
  if (!fs.existsSync(contentDir)) return [];

  const folders = ['articles', 'guides', 'recipes', 'habits', 'exercises'];
  
  for (const folder of folders) {
    const folderPath = path.join(contentDir, folder);
    if (!fs.existsSync(folderPath)) continue;
    
    const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.mdx'));
    
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      try {
        const frontmatter = ContentFrontmatterSchema.parse(data);
        
        allContent.push({
          id: file.replace('.mdx', ''), // Use filename as ID
          title: frontmatter.title,
          type: frontmatter.type as KnowledgeType,
          category: frontmatter.category,
          summary: frontmatter.summary,
          thumbnail: frontmatter.thumbnail || '',
          tags: frontmatter.tags,
          goals: frontmatter.goals,
          findings: frontmatter.findings,
          medicalConditions: frontmatter.medicalConditions,
          foodPreferences: frontmatter.foodPreferences,
          assessmentIds: frontmatter.assessmentIds,
          priority: frontmatter.priority as any,
          journeyStage: frontmatter.journeyStage as any,
          estimatedMinutes: frontmatter.estimatedMinutes,
          evidenceLevel: frontmatter.evidenceLevel as any,
          difficulty: frontmatter.difficulty as any,
          featured: frontmatter.featured,
          published: frontmatter.published,
          relatedContent: frontmatter.relatedContent,
          coachRecommended: frontmatter.coachRecommended,
          version: frontmatter.version,
          status: 'PUBLISHED',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          articleData: {
            author: frontmatter.author,
            readTimeMinutes: frontmatter.estimatedMinutes,
            htmlContent: content // For now, passing raw markdown to be handled by MDX renderer
          }
        });
      } catch (e) {
        console.error(`Error parsing frontmatter for ${file}:`, e);
      }
    }
  }
  
  return allContent;
}

export async function getRecommendationsForUser(userId: string, limit: number = 10): Promise<KnowledgeContent[]> {
  const allKnowledgeContent = getAllKnowledgeContent();
  const profile = await prisma.profile.findUnique({ where: { userId } });
  
  if (!profile) {
    return allKnowledgeContent.slice(0, limit);
  }

  const scored = allKnowledgeContent.map(content => {
    let score = 0;
    
    if (content.goals.some(g => profile.goals.includes(g))) score += 10;
    if (content.foodPreferences.some(f => profile.foodPreferences.includes(f))) score += 5;
    if (content.medicalConditions.some(m => profile.medicalConditions.includes(m))) score += 10;
    if (content.journeyStage.includes(profile.journeyStage as JourneyStage)) score += 3;
    
    if (content.priority === 'CRITICAL') score += 5;
    if (content.priority === 'HIGH') score += 3;
    
    return { content, score };
  });

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.content.featured && !a.content.featured) return 1;
    if (!b.content.featured && a.content.featured) return -1;
    return 0;
  });
  
  return scored.slice(0, limit).map(s => s.content);
}

export async function getRecommendationsForAssessment(goals: string[], findings: string[]): Promise<KnowledgeContent[]> {
  const allKnowledgeContent = getAllKnowledgeContent();
  const scored = allKnowledgeContent.map(content => {
    let score = 0;
    if (content.goals.some(g => goals.includes(g))) score += 10;
    if (content.tags.some(t => findings.some(f => f.toLowerCase().includes(t.toLowerCase())))) score += 5;
    if (content.priority === 'CRITICAL') score += 5;
    if (content.priority === 'HIGH') score += 3;
    return { content, score };
  });

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.content.featured && !a.content.featured) return 1;
    if (!b.content.featured && a.content.featured) return -1;
    return 0;
  });
  
  const results: KnowledgeContent[] = [];
  const addTop = (type: KnowledgeType) => {
    const top = scored.find(s => s.content.type === type);
    if (top) results.push(top.content);
  };

  addTop('ARTICLE');
  addTop('RECIPE');
  addTop('HABIT');
  addTop('EXERCISE_GUIDE');

  return results;
}

export async function getDailyFocus(userId: string) {
  const allKnowledgeContent = getAllKnowledgeContent();
  const profile = await prisma.profile.findUnique({ where: { userId } });
  const goals = profile?.goals || [];
  const primaryGoal = goals.length > 0 ? goals[0] : null;
  
  const findBest = (type: KnowledgeType) => {
    const pool = allKnowledgeContent.filter(c => c.type === type);
    if (!primaryGoal) return pool[Math.floor(Math.random() * pool.length)] || null;
    
    const matches = pool.filter(c => c.goals.includes(primaryGoal));
    if (matches.length > 0) return matches[Math.floor(Math.random() * matches.length)];
    return pool[0] || null;
  };

  return {
    article: findBest('ARTICLE'),
    recipe: findBest('RECIPE'),
    habit: findBest('HABIT')
  };
}

export function searchContent(query?: string, filters?: { type?: string, goal?: string, category?: string }) {
  const allKnowledgeContent = getAllKnowledgeContent();
  let results = allKnowledgeContent;
  
  if (query) {
    const q = query.toLowerCase();
    results = results.filter(c => c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q) || c.tags.some(t => t.toLowerCase().includes(q)));
  }
  
  if (filters?.type && filters.type !== 'ALL') {
    results = results.filter(c => c.type === filters.type);
  }
  
  if (filters?.goal && filters.goal !== 'ALL') {
    results = results.filter(c => c.goals.includes(filters.goal!));
  }
  
  if (filters?.category && filters.category !== 'ALL') {
    results = results.filter(c => c.category === filters.category);
  }
  
  return results;
}

export async function getKnowledgeContentById(id: string) {
  const allKnowledgeContent = getAllKnowledgeContent();
  return allKnowledgeContent.find(c => c.id === id) || null;
}
