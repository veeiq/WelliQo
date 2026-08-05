export * from './articles';
export * from './recipes';
export * from './habits';
export * from './exercises';

import { articles } from './articles';
import { recipes } from './recipes';
import { habits } from './habits';
import { exercises } from './exercises';
import { KnowledgeContent } from '@/types/knowledge';

export const allKnowledgeContent: KnowledgeContent[] = [
  ...articles,
  ...recipes,
  ...habits,
  ...exercises
];
