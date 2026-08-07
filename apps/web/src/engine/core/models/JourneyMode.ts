export type ValidatedJourneyMode = 
  | 'Improvement'
  | 'Adaptation'
  | 'Comfort'
  | 'Recovery'
  | 'Independence'
  | 'Patience'
  | 'Meaning'
  | 'Discovery'
  | 'Growth';

export class JourneyMode {
  private _id: ValidatedJourneyMode;
  private _description: string;

  constructor(id: ValidatedJourneyMode, description: string) {
    this._id = id;
    this._description = description;
  }

  get id(): ValidatedJourneyMode {
    return this._id;
  }

  get description(): string {
    return this._description;
  }
}
