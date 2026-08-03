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
}
