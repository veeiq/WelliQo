import { KnowledgeModuleSchema } from '../knowledge/schema';

import formulasModule from '../knowledge/formulas/weight-management.json';
import findingsModule from '../knowledge/findings/weight-management.json';
import recommendationsModule from '../knowledge/recommendations/weight-management.json';
import evidenceModule from '../knowledge/evidence/weight-management.json';
import rulesModule from '../knowledge/rules/weight-management.json';
import synergyModule from '../knowledge/synergy/weight-management.json';

const modules: Record<string, KnowledgeModuleSchema> = {
  formulas: formulasModule as unknown as KnowledgeModuleSchema,
  findings: findingsModule as unknown as KnowledgeModuleSchema,
  recommendations: recommendationsModule as unknown as KnowledgeModuleSchema,
  evidence: evidenceModule as unknown as KnowledgeModuleSchema,
  rules: rulesModule as unknown as KnowledgeModuleSchema,
  synergy: synergyModule as unknown as KnowledgeModuleSchema,
};

export class KnowledgeRepositoryLoader {
  private static instance: KnowledgeRepositoryLoader;
  private loadedModules: Map<string, KnowledgeModuleSchema> = new Map();

  private constructor() {
    this.initialize();
  }

  public static getInstance(): KnowledgeRepositoryLoader {
    if (!KnowledgeRepositoryLoader.instance) {
      KnowledgeRepositoryLoader.instance = new KnowledgeRepositoryLoader();
    }
    return KnowledgeRepositoryLoader.instance;
  }

  private initialize() {
    Object.keys(modules).forEach(key => {
      const mod = modules[key];
      if (mod) {
        this.loadedModules.set(key, mod);
      }
    });
  }

  public getModule(moduleId: string): KnowledgeModuleSchema {
    const mod = this.loadedModules.get(moduleId);
    if (!mod) {
      throw new Error(`Knowledge module ${moduleId} not found in repository.`);
    }
    return mod;
  }

  public getAllModules(): KnowledgeModuleSchema[] {
    return Array.from(this.loadedModules.values());
  }
}
