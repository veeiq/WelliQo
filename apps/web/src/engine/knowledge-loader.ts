import { KnowledgeModuleSchema } from '../knowledge/schema';

import formulasModuleWM from '../knowledge/formulas/weight-management.json';
import findingsModuleWM from '../knowledge/findings/weight-management.json';
import recommendationsModuleWM from '../knowledge/recommendations/weight-management.json';
import evidenceModuleWM from '../knowledge/evidence/weight-management.json';
import rulesModuleWM from '../knowledge/rules/weight-management.json';
import synergyModuleWM from '../knowledge/synergy/weight-management.json';

import findingsModuleLW from '../knowledge/findings/lose-weight.json';
import recommendationsModuleLW from '../knowledge/recommendations/lose-weight.json';
import evidenceModuleLW from '../knowledge/evidence/lose-weight.json';
import rulesModuleLW from '../knowledge/rules/lose-weight.json';
import synergyModuleLW from '../knowledge/synergy/lose-weight.json';
import thresholdsModuleLW from '../knowledge/thresholds/lose-weight.json';

import findingsModuleHWG from '../knowledge/findings/healthy-weight-gain.json';
import recommendationsModuleHWG from '../knowledge/recommendations/healthy-weight-gain.json';
import evidenceModuleHWG from '../knowledge/evidence/healthy-weight-gain.json';
import rulesModuleHWG from '../knowledge/rules/healthy-weight-gain.json';
import synergyModuleHWG from '../knowledge/synergy/healthy-weight-gain.json';
import thresholdsModuleHWG from '../knowledge/thresholds/healthy-weight-gain.json';

import findingsModuleBMT from '../knowledge/findings/build-muscle-tone.json';
import recommendationsModuleBMT from '../knowledge/recommendations/build-muscle-tone.json';
import evidenceModuleBMT from '../knowledge/evidence/build-muscle-tone.json';
import rulesModuleBMT from '../knowledge/rules/build-muscle-tone.json';
import synergyModuleBMT from '../knowledge/synergy/build-muscle-tone.json';
import thresholdsModuleBMT from '../knowledge/thresholds/build-muscle-tone.json';
import formulasModuleBMT from '../knowledge/formulas/build-muscle-tone.json';

import findingsModuleFAL from '../knowledge/findings/fitness-active-lifestyle.json';
import recommendationsModuleFAL from '../knowledge/recommendations/fitness-active-lifestyle.json';
import evidenceModuleFAL from '../knowledge/evidence/fitness-active-lifestyle.json';
import rulesModuleFAL from '../knowledge/rules/fitness-active-lifestyle.json';
import synergyModuleFAL from '../knowledge/synergy/fitness-active-lifestyle.json';
import thresholdsModuleFAL from '../knowledge/thresholds/fitness-active-lifestyle.json';

import findingsModuleGW from '../knowledge/findings/general-wellness.json';
import recommendationsModuleGW from '../knowledge/recommendations/general-wellness.json';
import evidenceModuleGW from '../knowledge/evidence/general-wellness.json';
import rulesModuleGW from '../knowledge/rules/general-wellness.json';
import synergyModuleGW from '../knowledge/synergy/general-wellness.json';
import thresholdsModuleGW from '../knowledge/thresholds/general-wellness.json';
import metadataModuleGW from '../knowledge/metadata/general-wellness.json';

const modules: Record<string, KnowledgeModuleSchema> = {
  formulas_wm: formulasModuleWM as unknown as KnowledgeModuleSchema,
  findings_wm: findingsModuleWM as unknown as KnowledgeModuleSchema,
  recommendations_wm: recommendationsModuleWM as unknown as KnowledgeModuleSchema,
  evidence_wm: evidenceModuleWM as unknown as KnowledgeModuleSchema,
  rules_wm: rulesModuleWM as unknown as KnowledgeModuleSchema,
  synergy_wm: synergyModuleWM as unknown as KnowledgeModuleSchema,

  findings_lw: findingsModuleLW as unknown as KnowledgeModuleSchema,
  recommendations_lw: recommendationsModuleLW as unknown as KnowledgeModuleSchema,
  evidence_lw: evidenceModuleLW as unknown as KnowledgeModuleSchema,
  rules_lw: rulesModuleLW as unknown as KnowledgeModuleSchema,
  synergy_lw: synergyModuleLW as unknown as KnowledgeModuleSchema,
  thresholds_lw: thresholdsModuleLW as unknown as KnowledgeModuleSchema,

  findings_hwg: findingsModuleHWG as unknown as KnowledgeModuleSchema,
  recommendations_hwg: recommendationsModuleHWG as unknown as KnowledgeModuleSchema,
  evidence_hwg: evidenceModuleHWG as unknown as KnowledgeModuleSchema,
  rules_hwg: rulesModuleHWG as unknown as KnowledgeModuleSchema,
  synergy_hwg: synergyModuleHWG as unknown as KnowledgeModuleSchema,
  thresholds_hwg: thresholdsModuleHWG as unknown as KnowledgeModuleSchema,

  formulas_bmt: formulasModuleBMT as unknown as KnowledgeModuleSchema,
  findings_bmt: findingsModuleBMT as unknown as KnowledgeModuleSchema,
  recommendations_bmt: recommendationsModuleBMT as unknown as KnowledgeModuleSchema,
  evidence_bmt: evidenceModuleBMT as unknown as KnowledgeModuleSchema,
  rules_bmt: rulesModuleBMT as unknown as KnowledgeModuleSchema,
  synergy_bmt: synergyModuleBMT as unknown as KnowledgeModuleSchema,
  thresholds_bmt: thresholdsModuleBMT as unknown as KnowledgeModuleSchema,

  findings_fal: findingsModuleFAL as unknown as KnowledgeModuleSchema,
  recommendations_fal: recommendationsModuleFAL as unknown as KnowledgeModuleSchema,
  evidence_fal: evidenceModuleFAL as unknown as KnowledgeModuleSchema,
  rules_fal: rulesModuleFAL as unknown as KnowledgeModuleSchema,
  synergy_fal: synergyModuleFAL as unknown as KnowledgeModuleSchema,
  thresholds_fal: thresholdsModuleFAL as unknown as KnowledgeModuleSchema,

  findings_gw: findingsModuleGW as unknown as KnowledgeModuleSchema,
  recommendations_gw: recommendationsModuleGW as unknown as KnowledgeModuleSchema,
  evidence_gw: evidenceModuleGW as unknown as KnowledgeModuleSchema,
  rules_gw: rulesModuleGW as unknown as KnowledgeModuleSchema,
  synergy_gw: synergyModuleGW as unknown as KnowledgeModuleSchema,
  thresholds_gw: thresholdsModuleGW as unknown as KnowledgeModuleSchema,
  metadata_gw: metadataModuleGW as unknown as KnowledgeModuleSchema,
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
