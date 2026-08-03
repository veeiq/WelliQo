import { CompiledContentIndex, BaseContent } from './schemas';

export interface ActionHub {
  primaryContent: BaseContent;
  supportingNodes: BaseContent[];
  prerequisites: BaseContent[];
  explanations: BaseContent[];
  related: BaseContent[];
}

export class ContentAdapter {
  private index: CompiledContentIndex;

  constructor(index: CompiledContentIndex) {
    this.index = index;
  }

  public getContentById(id: string): BaseContent | undefined {
    return this.index.nodes[id];
  }

  public buildActionHub(targetContentId: string): ActionHub | null {
    const primary = this.getContentById(targetContentId);
    if (!primary) {
      return null;
    }

    const hub: ActionHub = {
      primaryContent: primary,
      supportingNodes: [],
      prerequisites: [],
      explanations: [],
      related: [],
    };

    if (primary.relationships) {
      const getNodes = (ids?: string[]) => {
        if (!ids) return [];
        return ids.map((id) => this.getContentById(id)).filter((n): n is BaseContent => !!n);
      };

      hub.supportingNodes = getNodes(primary.relationships['supports']);
      hub.prerequisites = getNodes(primary.relationships['requires']);
      hub.explanations = getNodes(primary.relationships['explains']);
      hub.related = getNodes(primary.relationships['related_to']);
    }

    return hub;
  }

  public getNodesByGoal(goalId: string): BaseContent[] {
    const ids = this.index.byGoal[goalId] || [];
    return ids.map((id) => this.getContentById(id)).filter((n): n is BaseContent => !!n);
  }

  public search(query: string): BaseContent[] {
    if (!query || query.trim() === '') return [];

    const lowerQuery = query.toLowerCase();
    const results: { node: BaseContent; score: number }[] = [];

    for (const node of Object.values(this.index.nodes)) {
      if (node.status !== 'published') continue;

      let score = 0;

      if (node.title.toLowerCase().includes(lowerQuery)) score += 10;
      if (node.topic && node.topic.toLowerCase().includes(lowerQuery)) score += 5;
      if (node.category && node.category.toLowerCase().includes(lowerQuery)) score += 3;
      if (node.rawBody && node.rawBody.toLowerCase().includes(lowerQuery)) score += 1;

      if (score > 0) {
        results.push({ node, score });
      }
    }

    return results.sort((a, b) => b.score - a.score).map((r) => r.node);
  }

  public getDiscoveryRecommendations(currentContentId?: string): BaseContent[] {
    const current = currentContentId ? this.getContentById(currentContentId) : null;

    const scoredNodes = Object.values(this.index.nodes)
      .filter((n) => n.id !== currentContentId && n.status === 'published')
      .map((node) => {
        let score = 0;
        if (current) {
          if (current.goals && node.goals) {
            const overlap = current.goals.filter((g) => node.goals!.includes(g)).length;
            score += overlap * 3;
          }
          if (current.topic && current.topic === node.topic) score += 2;
          if (current.category && current.category === node.category) score += 1;
          if (current.domain && current.domain === node.domain) score += 1;
        }

        // Add tiny random jitter to break ties dynamically
        score += Math.random() * 0.5;
        return { node, score };
      });

    return scoredNodes
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
      .map((n) => n.node);
  }
}
