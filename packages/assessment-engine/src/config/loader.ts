import { validateJourneyConfig, ConfigurationError } from './validator';
import type { ValidatedJourney } from './types';

export interface ConfigLoaderAdapter {
  fetchJourneyConfig(journeyId: string): Promise<unknown>;
}

export class JourneyConfigLoader {
  constructor(private adapter: ConfigLoaderAdapter) {}

  async loadJourney(journeyId: string): Promise<ValidatedJourney> {
    try {
      const rawConfig = await this.adapter.fetchJourneyConfig(journeyId);
      return validateJourneyConfig(rawConfig);
    } catch (error) {
      if (error instanceof ConfigurationError) {
        throw error;
      }
      throw new ConfigurationError(`Failed to fetch journey config for id: ${journeyId}. ${error}`);
    }
  }
}
