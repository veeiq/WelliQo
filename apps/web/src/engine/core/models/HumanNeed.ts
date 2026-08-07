export type UniversalNeed = 
  | 'Hope'
  | 'Routine'
  | 'Validation'
  | 'Permission'
  | 'Balance'
  | 'Independence'
  | 'Patience'
  | 'Meaning'
  | 'Clarity'
  | 'Growth'
  | 'Autonomy'
  | 'Control'
  | 'Acceptance';

export class HumanNeed {
  private _id: UniversalNeed;
  private _description: string;

  constructor(id: UniversalNeed, description: string) {
    this._id = id;
    this._description = description;
  }

  get id(): UniversalNeed {
    return this._id;
  }

  get description(): string {
    return this._description;
  }
}
