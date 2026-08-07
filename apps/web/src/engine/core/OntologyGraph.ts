import { Finding } from './models/Finding';
import { Relationship, RelationshipType } from './models/Relationship';

export class OntologyGraph {
  private _findings: Map<string, Finding> = new Map();
  private _relationships: Relationship[] = [];

  /**
   * Adds a finding to the graph.
   */
  public addFinding(finding: Finding): void {
    if (this._findings.has(finding.id)) {
      throw new Error(`Finding with ID ${finding.id} already exists in the graph.`);
    }
    this._findings.set(finding.id, finding);
  }

  /**
   * Adds a relationship between findings in the graph.
   */
  public addRelationship(relationship: Relationship): void {
    this._relationships.push(relationship);
  }

  /**
   * Retrieves a finding by ID.
   */
  public getFinding(id: string): Finding | undefined {
    return this._findings.get(id);
  }

  /**
   * Returns all relationships.
   */
  public getAllRelationships(): Relationship[] {
    return [...this._relationships];
  }

  /**
   * Returns all findings.
   */
  public getAllFindings(): Finding[] {
    return Array.from(this._findings.values());
  }

  /**
   * Gets all findings that have a specific relationship type directed towards the target finding.
   * e.g., "What supports Poor Sleep?" -> getIncomingRelations('poor_sleep', RelationshipType.SUPPORTS)
   */
  public getIncomingRelations(targetFindingId: string, type: RelationshipType): Finding[] {
    return this._relationships
      .filter(rel => rel.targetFindingId === targetFindingId && rel.type === type)
      .map(rel => this._findings.get(rel.sourceFindingId))
      .filter((finding): finding is Finding => finding !== undefined);
  }

  /**
   * Validates the graph for broken references (relationships pointing to non-existent findings).
   */
  public validateReferences(): string[] {
    const errors: string[] = [];
    for (const rel of this._relationships) {
      if (!this._findings.has(rel.sourceFindingId)) {
        errors.push(`Broken Reference: Source finding '${rel.sourceFindingId}' does not exist.`);
      }
      if (!this._findings.has(rel.targetFindingId)) {
        errors.push(`Broken Reference: Target finding '${rel.targetFindingId}' does not exist.`);
      }
    }
    return errors;
  }

  /**
   * Detects orphan findings (findings with no relationships).
   */
  public getOrphanFindings(): Finding[] {
    return Array.from(this._findings.values()).filter(finding => 
      !this._relationships.some(rel => rel.involves(finding.id))
    );
  }

  /**
   * Detects circular dependencies (cycles) in the graph.
   * Uses Depth First Search (DFS).
   */
  public hasCycles(): boolean {
    const visited = new Set<string>();
    const recursionStack = new Set<string>();

    const dfs = (nodeId: string): boolean => {
      visited.add(nodeId);
      recursionStack.add(nodeId);

      // Get all outgoing edges from this node
      const outgoingEdges = this._relationships.filter(rel => rel.sourceFindingId === nodeId);
      
      for (const edge of outgoingEdges) {
        const targetId = edge.targetFindingId;
        
        if (!visited.has(targetId)) {
          if (dfs(targetId)) return true;
        } else if (recursionStack.has(targetId)) {
          return true; // Cycle detected
        }
      }

      recursionStack.delete(nodeId);
      return false;
    };

    for (const findingId of this._findings.keys()) {
      if (!visited.has(findingId)) {
        if (dfs(findingId)) return true;
      }
    }

    return false;
  }
}
