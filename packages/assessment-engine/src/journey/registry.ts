import { Journey } from './types';

export class JourneyRegistry {
  private journeys = new Map<string, Journey>();

  register(journey: Journey): void {
    this.journeys.set(journey.id, journey);
  }

  get(id: string): Journey | undefined {
    return this.journeys.get(id);
  }

  getAll(): Journey[] {
    return Array.from(this.journeys.values());
  }

  remove(id: string): boolean {
    return this.journeys.delete(id);
  }

  clear(): void {
    this.journeys.clear();
  }
}
