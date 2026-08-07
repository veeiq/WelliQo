import * as fs from 'fs';
import * as path from 'path';

export class NutritionIntelligenceProvider {
  private mappingData: any;

  constructor() {
    this.mappingData = require('../../knowledge/nutrition/nutrient-mapping.json');
  }

  public generateIntelligence(
    dietPreference: string, 
    targets: { protein: number, calories: number, fiber: number, water: number }
  ) {
    const preference = (dietPreference || 'veg').toLowerCase().replace('-', '_');
    
    // For MVP, we estimate 'current' intake based on a typical unbalanced diet to show the gap concept.
    // In production, this would come from a detailed dietary recall in the assessment.
    const currentProtein = Math.round(targets.protein * 0.6); // 60% of target
    const currentFiber = Math.round(targets.fiber * 0.4); // 40% of target
    const proteinGap = targets.protein - currentProtein;
    const fiberGap = targets.fiber - currentFiber;

    const nutrients = [];

    // Process Protein
    if (this.mappingData.nutrients.protein) {
      const pData = this.mappingData.nutrients.protein;
      nutrients.push({
        id: pData.id,
        label: pData.label,
        target: `${targets.protein}g`,
        current: `${currentProtein}g`,
        gap: `${proteinGap}g`,
        status: proteinGap > (targets.protein * 0.3) ? 'red' : 'yellow', // Red if >30% missing
        whyItMatters: pData.whyItMatters,
        foods: pData.foods[preference] || pData.foods['veg'],
        companionSupport: pData.companionSupport
      });
    }

    // Process Fiber
    if (this.mappingData.nutrients.fiber) {
      const fData = this.mappingData.nutrients.fiber;
      nutrients.push({
        id: fData.id,
        label: fData.label,
        target: `${targets.fiber}g`,
        current: `${currentFiber}g`,
        gap: `${fiberGap}g`,
        status: fiberGap > (targets.fiber * 0.3) ? 'red' : 'yellow',
        whyItMatters: fData.whyItMatters,
        foods: fData.foods[preference] || fData.foods['veg'],
        companionSupport: fData.companionSupport
      });
    }

    // Hardcode Micronutrients for MVP demonstration (Target vs Current unknown for micros usually without blood tests)
    // We will show them as 'yellow' (Needs Attention) or 'red' (Deficient based on symptoms)
    const micros = ['calcium', 'vitamin_d', 'omega_3', 'iron', 'b12'];
    micros.forEach(m => {
      if (this.mappingData.nutrients[m]) {
        const mData = this.mappingData.nutrients[m];
        let status = 'yellow';
        // E.g., B12 is red for vegans unless tracking
        if (m === 'b12' && (preference === 'vegan' || preference === 'veg' || preference === 'jain')) status = 'red';
        if (m === 'vitamin_d') status = 'red'; // universally deficient
        
        nutrients.push({
          id: mData.id,
          label: mData.label,
          target: 'Optimal Level',
          current: 'Likely Low',
          gap: 'Evaluate',
          status: status as 'green' | 'yellow' | 'red',
          whyItMatters: mData.whyItMatters,
          foods: mData.foods[preference] || mData.foods['veg'],
          companionSupport: mData.companionSupport
        });
      }
    });

    return { nutrients };
  }

  public generateBlueprint(calories: number, protein: number) {
    // Basic macro splitting for 4 meals
    return {
      meals: [
        { name: "Breakfast", calories: Math.round(calories * 0.25), protein: Math.round(protein * 0.25) },
        { name: "Lunch", calories: Math.round(calories * 0.35), protein: Math.round(protein * 0.35) },
        { name: "Snack", calories: Math.round(calories * 0.15), protein: Math.round(protein * 0.10) },
        { name: "Dinner", calories: Math.round(calories * 0.25), protein: Math.round(protein * 0.30) }
      ]
    };
  }
}
