export enum RelationshipType {
  CAUSES = 'CAUSES',
  SUPPORTS = 'SUPPORTS',
  AMPLIFIES = 'AMPLIFIES',
  REDUCES = 'REDUCES',
  PROTECTS = 'PROTECTS',
  CONFLICTS = 'CONFLICTS',
  MASKS = 'MASKS',
  REQUIRES = 'REQUIRES',
  PRECEDES = 'PRECEDES',
  FOLLOWS = 'FOLLOWS'
}

export class Relationship {
  private _sourceFindingId: string;
  private _targetFindingId: string;
  private _type: RelationshipType;
  private _weight: number; // For future confidence propagation (0.0 - 1.0)

  constructor(
    sourceFindingId: string, 
    targetFindingId: string, 
    type: RelationshipType = RelationshipType.CAUSES,
    weight: number = 1.0
  ) {
    if (sourceFindingId === targetFindingId) {
      throw new Error("A finding cannot have a relationship with itself.");
    }
    this._sourceFindingId = sourceFindingId;
    this._targetFindingId = targetFindingId;
    this._type = type;
    this._weight = weight;
  }

  get sourceFindingId(): string {
    return this._sourceFindingId;
  }

  get targetFindingId(): string {
    return this._targetFindingId;
  }

  get type(): RelationshipType {
    return this._type;
  }

  get weight(): number {
    return this._weight;
  }

  /**
   * Checks if this relationship involves a specific finding ID.
   */
  public involves(findingId: string): boolean {
    return this._sourceFindingId === findingId || this._targetFindingId === findingId;
  }
}
