export type ContextState = 'Active' | 'Inactive' | 'PendingReview';

export class Context {
  private _id: string;
  private _state: ContextState;
  private _detectedFindings: string[]; // Finding IDs that triggered this context

  constructor(id: string, state: ContextState, detectedFindings: string[] = []) {
    this._id = id;
    this._state = state;
    this._detectedFindings = detectedFindings;
  }

  get id(): string {
    return this._id;
  }

  get state(): ContextState {
    return this._state;
  }

  get detectedFindings(): string[] {
    return [...this._detectedFindings];
  }

  public activate(findings: string[]): void {
    this._state = 'Active';
    // Merge new findings ensuring uniqueness
    this._detectedFindings = Array.from(new Set([...this._detectedFindings, ...findings]));
  }

  public deactivate(): void {
    this._state = 'Inactive';
  }

  public isActive(): boolean {
    return this._state === 'Active';
  }
}
