import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesPath = path.resolve(__dirname, '../apps/web/src/data/knowledge/articles.ts');
const imageMappingPath = path.resolve(__dirname, '../apps/web/src/data/knowledge/image-mapping.ts');

let articlesContent = fs.readFileSync(articlesPath, 'utf8');

// We need to parse image-mapping.ts, but since it's just a simple JS object, we can extract it via regex
const mappingContent = fs.readFileSync(imageMappingPath, 'utf8');
const mappingMatch = mappingContent.match(/export const imageMapping: Record<string, string> = {([\s\S]*?)};/);

if (!mappingMatch) {
  console.error('Could not find imageMapping in image-mapping.ts');
  process.exit(1);
}

const mappingLines = mappingMatch[1].split('\n').filter(line => line.includes(':'));
const mapping = {};
mappingLines.forEach(line => {
  const parts = line.split(':');
  if (parts.length === 2) {
    const key = parts[0].trim().replace(/['"]/g, '');
    const value = parts[1].trim().replace(/['",]/g, '');
    mapping[key] = value;
  }
});

// Now we update articles.ts
// We'll look for `id: 'ART...'` and update the nearest `thumbnail: '...'` or `thumbnail: "..."` following it.
let updatedArticlesContent = articlesContent;

for (const [id, imagePath] of Object.entries(mapping)) {
  const idRegex = new RegExp(`id:\\s*['"]${id}['"]`);
  const idMatch = updatedArticlesContent.match(idRegex);
  
  if (idMatch) {
    const startIndex = idMatch.index;
    const nextObjectEnd = updatedArticlesContent.indexOf('}', startIndex);
    const objectContent = updatedArticlesContent.substring(startIndex, nextObjectEnd);
    
    // Replace thumbnail
    const updatedObjectContent = objectContent.replace(
      /thumbnail:\s*['"](https:\/\/images\.unsplash\.com[^'"]*)['"]/, 
      `thumbnail: '${imagePath}'`
    );
    
    updatedArticlesContent = updatedArticlesContent.substring(0, startIndex) + updatedObjectContent + updatedArticlesContent.substring(nextObjectEnd);
  }
}

fs.writeFileSync(articlesPath, updatedArticlesContent, 'utf8');
console.log('Successfully updated thumbnails in articles.ts');
