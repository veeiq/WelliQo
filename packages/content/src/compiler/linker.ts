import { ParsedFile } from './parser';
import { CompiledContentIndex, ContentManifest, BaseContent } from '../schemas';

export function linkAndValidateContent(parsedFiles: ParsedFile[]): { index: CompiledContentIndex, manifest: ContentManifest } {
  const index: CompiledContentIndex = {
    nodes: {},
    byType: {},
    byDomain: {},
  };

  const nodesByType: Record<string, number> = {};
  let relationshipCount = 0;
  let orphanNodesCount = 0;

  // 1. Build Index Map
  for (const file of parsedFiles) {
    const { content } = file;
    
    if (index.nodes[content.id]) {
      throw new Error(`Duplicate content ID detected: ${content.id}`);
    }
    
    index.nodes[content.id] = content;
    
    // Group by Type
    if (!index.byType[content.type]) {
      index.byType[content.type] = [];
      nodesByType[content.type] = 0;
    }
    index.byType[content.type]!.push(content.id);
    nodesByType[content.type]!++;
    
    // Group by Domain
    if (!index.byDomain[content.domain]) {
      index.byDomain[content.domain] = [];
    }
    index.byDomain[content.domain]!.push(content.id);
  }

  // 2. Referential Integrity Validation
  const nodeIds = new Set(Object.keys(index.nodes));
  const referencedTargetIds = new Set<string>();

  for (const file of parsedFiles) {
    const { content } = file;
    
    if (content.relationships) {
      for (const [relationshipType, targetIds] of Object.entries(content.relationships)) {
        for (const targetId of targetIds) {
          if (!nodeIds.has(targetId)) {
            throw new Error(
              `Referential Integrity Error in '${content.id}': ` +
              `Relationship '${relationshipType}' references non-existent node '${targetId}'.`
            );
          }
          referencedTargetIds.add(targetId);
          relationshipCount++;
        }
      }
    }
  }

  // 3. Detect Orphans (Nodes that are not referenced by anything, and don't reference anything, maybe?)
  // Actually, an orphan is a node that is never the target of any relationship.
  // We can just count them for the manifest.
  for (const id of nodeIds) {
    if (!referencedTargetIds.has(id)) {
      orphanNodesCount++;
    }
  }

  const manifest: ContentManifest = {
    version: '1.0.0',
    generatedAt: new Date().toISOString(),
    nodeCount: parsedFiles.length,
    relationshipCount,
    nodesByType,
    brokenLinks: 0, // Must be 0 because we throw on broken links
    orphanNodes: orphanNodesCount
  };

  return { index, manifest };
}
