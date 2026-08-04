import { KnowledgeRepositoryLoader } from './knowledge-loader';
import { FormulaSchema } from '../knowledge/schema';

export class FormulaRegistry {
  private static instance: FormulaRegistry;
  private loader: KnowledgeRepositoryLoader;
  private formulas: Map<string, FormulaSchema> = new Map();

  private constructor() {
    this.loader = KnowledgeRepositoryLoader.getInstance();
    this.initialize();
  }

  public static getInstance(): FormulaRegistry {
    if (!FormulaRegistry.instance) {
      FormulaRegistry.instance = new FormulaRegistry();
    }
    return FormulaRegistry.instance;
  }

  private initialize() {
    const modules = this.loader.getAllModules();
    modules.forEach(mod => {
      if (mod.formulas) {
        mod.formulas.forEach(formula => {
          this.formulas.set(formula.id, formula);
        });
      }
    });
  }

  public getFormula(id: string): FormulaSchema {
    const formula = this.formulas.get(id);
    if (!formula) {
      throw new Error(`Formula ${id} not found in registry`);
    }
    return formula;
  }

  /**
   * Executes a formula safely using the provided variables.
   */
  public evaluate(formulaId: string, variables: Record<string, number | string>): number {
    const formula = this.getFormula(formulaId);
    
    // Check missing variables
    const missing = formula.variables.filter(v => variables[v] === undefined);
    if (missing.length > 0) {
      throw new Error(`Cannot evaluate ${formulaId}. Missing variables: ${missing.join(', ')}`);
    }

    try {
      // Build safe execution context by destructuring variables
      const paramNames = Object.keys(variables);
      const paramValues = Object.values(variables);
      
      // Create a function that takes the variable names as arguments
      const func = new Function(...paramNames, `return ${formula.expression};`);
      
      const result = func(...paramValues);
      
      if (typeof result !== 'number' || isNaN(result)) {
        throw new Error(`Evaluation of ${formulaId} did not return a valid number`);
      }
      
      return result;
    } catch (e) {
      console.error(`Error evaluating formula ${formulaId}:`, e);
      throw e;
    }
  }

  /**
   * Calculate a batch of formulas that are strictly numeric and dependency free
   */
  public batchEvaluate(formulaIds: string[], variables: Record<string, number | string>): Record<string, number> {
    const results: Record<string, number> = {};
    for (const id of formulaIds) {
      results[id] = this.evaluate(id, variables);
      // Optional: Feed the result back into variables so dependent formulas can run
      // For now we assume variables contains everything. If a formula depends on another, it must be evaluated sequentially.
      variables[id.toLowerCase().replace('formula_', '')] = results[id];
    }
    return results;
  }
}
