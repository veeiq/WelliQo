import type { Journey } from './types';
import type { JourneyRegistry } from './registry';

import { validateJourneyConfig } from '../config/validator';

export function loadJourneyConfig(
  registry: JourneyRegistry,
  config: unknown
): Journey {
  const validatedJourney = validateJourneyConfig(config);
  registry.register(validatedJourney);
  return validatedJourney;
}
