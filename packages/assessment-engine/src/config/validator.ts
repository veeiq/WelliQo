import { JourneySchema } from './schemas';
import type { ValidatedJourney } from './types';
import { ZodError } from 'zod';

export class ConfigurationError extends Error {
  constructor(message: string, public readonly validationErrors?: unknown) {
    super(message);
    this.name = 'ConfigurationError';
  }
}

export function validateJourneyConfig(config: unknown): ValidatedJourney {
  try {
    return JourneySchema.parse(config);
  } catch (error) {
    if (error instanceof ZodError) {
      const messages = error.issues.map(
        (err: any) => `${err.path.join('.')}: ${err.message}`
      ).join(', ');
      throw new ConfigurationError(`Journey validation failed: ${messages}`, error.issues);
    }
    throw new ConfigurationError('An unknown error occurred during journey validation.');
  }
}
