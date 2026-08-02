import type { Journey } from './types';
import type { JourneyRegistry } from './registry';

export function loadJourneyConfig(
  registry: JourneyRegistry,
  config: unknown
): Journey {
  // In a robust implementation, this would use Zod to validate the JSON structure
  const journey = config as Journey;
  registry.register(journey);
  return journey;
}
