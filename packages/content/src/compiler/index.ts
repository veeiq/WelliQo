import { parseContentFiles } from './parser';
import { linkAndValidateContent } from './linker';
import { CompiledContentIndex, ContentManifest } from '../schemas';

export interface CompilerResult {
  index: CompiledContentIndex;
  manifest: ContentManifest;
}

export function compileContent(dataDirectory: string): CompilerResult {
  const parsedFiles = parseContentFiles(dataDirectory);
  return linkAndValidateContent(parsedFiles);
}
