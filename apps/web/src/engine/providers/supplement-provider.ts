import * as fs from 'fs';
import * as path from 'path';

export interface SupplementRecommendation {
  state: 'RECOMMENDED' | 'OPTIONAL' | 'NOT_RECOMMENDED';
  reason?: string;
  products: string[];
}

export class SupplementProvider {
  private supplementsData: any;
  private assessmentMapping: any;
  private contraindications: any;

  constructor() {
    this.supplementsData = require('../../knowledge/nutrition/supplements.json');
    this.assessmentMapping = require('../../knowledge/nutrition/assessment-mapping.json');
    this.contraindications = require('../../knowledge/nutrition/contraindications.json');
  }

  public getRecommendedSupplements(
    assessmentId: string, 
    brand: string = 'generic',
    medicalConditions: string[] = []
  ): SupplementRecommendation {
    const mapping = this.assessmentMapping.mappings[assessmentId];
    if (!mapping) return { state: 'NOT_RECOMMENDED', products: [] };
    
    let candidateIds = mapping[brand] || mapping['generic'] || [];
    
    // Process contraindications
    const avoidTags = new Set<string>();
    const avoidProducts = new Set<string>();
    let haltReason: string | undefined = undefined;
    
    for (const condition of medicalConditions) {
      const rule = this.contraindications.rules.find((r: any) => r.condition === condition);
      if (rule) {
        if (rule.haltRecommendations) {
          return {
            state: 'NOT_RECOMMENDED',
            reason: rule.haltReason || "Please consult your healthcare provider.",
            products: []
          };
        }
        if (rule.avoidTags) rule.avoidTags.forEach((t: string) => avoidTags.add(t));
        if (rule.avoidProducts) rule.avoidProducts.forEach((p: string) => avoidProducts.add(p));
      }
    }

    const result: string[] = [];
    const brandData = this.supplementsData.brands[brand] || this.supplementsData.brands['generic'];
    
    candidateIds.forEach((id: string) => {
      if (avoidProducts.has(id)) return; // Skip if explicitly contraindicated
      
      const product = brandData.products.find((p: any) => p.id === id);
      if (product) {
        // Check tags
        const hasBadTag = product.tags.some((t: string) => avoidTags.has(t));
        if (!hasBadTag) {
          result.push(product.name);
        }
      }
    });

    return {
      state: result.length > 0 ? 'RECOMMENDED' : 'OPTIONAL',
      products: result.slice(0, 5) // Max 5 products
    };
  }
}
