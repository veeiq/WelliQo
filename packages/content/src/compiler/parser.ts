import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BaseContentSchema, BaseContent } from '../schemas';

export interface ParsedFile {
  content: BaseContent;
  rawBody: string;
  filePath: string;
}

export function parseContentFiles(dataDirectory: string): ParsedFile[] {
  const parsedFiles: ParsedFile[] = [];

  function walkDir(currentPath: string) {
    if (!fs.existsSync(currentPath)) return;
    
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.isFile() && fullPath.endsWith('.mdx')) {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content: rawBody } = matter(fileContents);
        
        try {
          const validatedData = BaseContentSchema.parse({ ...data, rawBody });
          parsedFiles.push({
            content: validatedData,
            rawBody,
            filePath: fullPath
          });
        } catch (error) {
          throw new Error(`Failed to validate frontmatter in ${fullPath}: ${error}`);
        }
      }
    }
  }

  walkDir(dataDirectory);
  return parsedFiles;
}
