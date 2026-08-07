export type ConfidenceLevel = 'High' | 'Medium' | 'Low';

export class Finding {
  private _id: string;
  private _title: string;
  private _evidence: string[]; // List of evidence IDs or raw strings supporting this finding
  private _confidence: ConfidenceLevel;

  constructor(id: string, title: string, evidence: string[], confidence: ConfidenceLevel = 'High') {
    this._id = id;
    this._title = title;
    this._evidence = evidence;
    this._confidence = confidence;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get evidence(): string[] {
    return [...this._evidence];
  }

  get confidence(): ConfidenceLevel {
    return this._confidence;
  }

  /**
   * Adds new evidence to this finding.
   */
  public addEvidence(evidenceId: string): void {
    if (!this._evidence.includes(evidenceId)) {
      this._evidence.push(evidenceId);
    }
  }

  /**
   * Evaluates if this finding meets a minimum confidence threshold.
   */
  public meetsConfidence(threshold: ConfidenceLevel): boolean {
    const ranks = { High: 3, Medium: 2, Low: 1 };
    return ranks[this._confidence] >= ranks[threshold];
  }
}
