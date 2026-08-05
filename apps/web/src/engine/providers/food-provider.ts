import * as fs from 'fs';
import * as path from 'path';

export class FoodProvider {
  private foodsData: any;
  private dietMapping: any;

  constructor() {
    this.foodsData = require('../../knowledge/nutrition/foods.json');
    this.dietMapping = require('../../knowledge/nutrition/diet-mapping.json');
  }

  public getRecommendedFoods(dietPreference: string): string[] {
    const preference = (dietPreference || 'non_vegetarian').toLowerCase().replace('-', '_');
    const mapping = this.dietMapping.mappings[preference] || this.dietMapping.mappings['non_vegetarian'];
    
    const result: string[] = [];
    mapping.forEach((foodId: string) => {
      // Find food name
      for (const catKey of Object.keys(this.foodsData.categories)) {
        const cat = this.foodsData.categories[catKey];
        const food = cat.foods.find((f: any) => f.id === foodId);
        if (food) {
          result.push(food.name);
          break;
        }
      }
    });
    
    return result.slice(0, 5); // Return top 5
  }
}
