import { describe, it, expect, beforeEach } from 'vitest';
import { OntologyGraph } from './OntologyGraph';
import { Finding } from './models/Finding';
import { Relationship, RelationshipType } from './models/Relationship';

describe('OntologyGraph', () => {
  let graph: OntologyGraph;

  beforeEach(() => {
    graph = new OntologyGraph();
  });

  it('should detect broken references (missing nodes)', () => {
    const f1 = new Finding('f1', 'Finding 1', ['ev1']);
    graph.addFinding(f1);

    // Add a relationship where target 'f2' does not exist in graph
    graph.addRelationship(new Relationship('f1', 'f2', RelationshipType.CAUSES));

    const errors = graph.validateReferences();
    expect(errors.length).toBe(1);
    expect(errors[0]).toContain("Target finding 'f2' does not exist");
  });

  it('should detect duplicate IDs', () => {
    const f1 = new Finding('f1', 'Finding 1', ['ev1']);
    graph.addFinding(f1);

    expect(() => {
      const f1Duplicate = new Finding('f1', 'Duplicate Finding 1', ['ev2']);
      graph.addFinding(f1Duplicate);
    }).toThrowError(/already exists/);
  });

  it('should detect orphan findings', () => {
    const f1 = new Finding('f1', 'Finding 1', ['ev1']);
    const f2 = new Finding('f2', 'Finding 2', ['ev2']);
    const f3 = new Finding('f3', 'Orphan Finding', ['ev3']);

    graph.addFinding(f1);
    graph.addFinding(f2);
    graph.addFinding(f3);

    graph.addRelationship(new Relationship('f1', 'f2', RelationshipType.SUPPORTS));

    const orphans = graph.getOrphanFindings();
    expect(orphans.length).toBe(1);
    expect(orphans[0].id).toBe('f3');
  });

  it('should detect circular dependencies (acyclic validation)', () => {
    const f1 = new Finding('f1', 'Finding 1', ['ev1']);
    const f2 = new Finding('f2', 'Finding 2', ['ev2']);
    const f3 = new Finding('f3', 'Finding 3', ['ev3']);

    graph.addFinding(f1);
    graph.addFinding(f2);
    graph.addFinding(f3);

    // Create a cycle: f1 -> f2 -> f3 -> f1
    graph.addRelationship(new Relationship('f1', 'f2', RelationshipType.CAUSES));
    graph.addRelationship(new Relationship('f2', 'f3', RelationshipType.CAUSES));
    graph.addRelationship(new Relationship('f3', 'f1', RelationshipType.CAUSES));

    expect(graph.hasCycles()).toBe(true);
  });

  it('should return correct findings when queried by RelationshipType', () => {
    const stress = new Finding('stress', 'High Stress', ['ev1']);
    const lateEating = new Finding('late_eating', 'Late Eating', ['ev2']);
    const poorSleep = new Finding('poor_sleep', 'Poor Sleep', ['ev3']);

    graph.addFinding(stress);
    graph.addFinding(lateEating);
    graph.addFinding(poorSleep);

    graph.addRelationship(new Relationship('stress', 'poor_sleep', RelationshipType.SUPPORTS));
    graph.addRelationship(new Relationship('late_eating', 'poor_sleep', RelationshipType.SUPPORTS));

    const supporters = graph.getIncomingRelations('poor_sleep', RelationshipType.SUPPORTS);
    
    expect(supporters.length).toBe(2);
    const ids = supporters.map(s => s.id);
    expect(ids).toContain('stress');
    expect(ids).toContain('late_eating');
  });
});
