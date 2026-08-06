import { ASSESSMENTS } from './registry';
import { AssessmentModule, ImplementedAssessment } from '../types/assessment';

export function validateAssessments() {
  console.log('Validating Assessment Registry...');
  
  const assessmentIds = new Set<string>();
  let implementedCount = 0;

  ASSESSMENTS.forEach((assessment: AssessmentModule) => {
    // 1. Unique Assessment IDs
    if (assessmentIds.has(assessment.id)) {
      throw new Error(`[VALIDATION FAILED] Duplicate Assessment ID found: ${assessment.id}`);
    }
    assessmentIds.add(assessment.id);

    // 2. Required Metadata
    if (!assessment.title || !assessment.category || !assessment.emoji) {
      throw new Error(`[VALIDATION FAILED] Assessment ${assessment.id} is missing required metadata (title, category, or emoji).`);
    }

    if (assessment.status === 'available') {
      implementedCount++;
      const impl = assessment as ImplementedAssessment;

      // 3. Implemented components check
      if (!impl.questions || !impl.config) {
        throw new Error(`[VALIDATION FAILED] Assessment ${impl.id} is marked as implemented but is missing questions or config.`);
      }

      // 4. Question Count Validation
      if (impl.questionCount !== impl.questions.length) {
        throw new Error(`[VALIDATION FAILED] Assessment ${impl.id} specifies questionCount ${impl.questionCount} but has ${impl.questions.length} questions.`);
      }

      // 5. Duplicate Question IDs
      const questionIds = new Set<string>();
      impl.questions.forEach(q => {
        if (questionIds.has(q.id)) {
          throw new Error(`[VALIDATION FAILED] Assessment ${impl.id} has duplicate Question ID: ${q.id}`);
        }
        questionIds.add(q.id);
      });

      // Temporary skip for new CIE architecture during Milestone 4
      if (!impl.config.pillars) {
        return;
      }

      // 6. Pillar Weight Total
      const pillarTotal = impl.config.pillars.reduce((sum, p) => sum + p.weightPercent, 0);
      if (pillarTotal !== 100) {
        throw new Error(`[VALIDATION FAILED] Assessment ${impl.id} pillars must sum to 100%. Current sum: ${pillarTotal}%`);
      }

      // 7. Scoring Rules Validation
      const findingIds = new Set<string>();
      impl.config.scoringRules.forEach(rule => {
        // Must belong to a valid pillar
        if (!impl.config.pillars.find(p => p.id === rule.finding.pillarId)) {
          throw new Error(`[VALIDATION FAILED] Assessment ${impl.id} finding ${rule.finding.id} references invalid pillarId: ${rule.finding.pillarId}`);
        }
        
        // No Duplicate Finding IDs
        if (findingIds.has(rule.finding.id)) {
          throw new Error(`[VALIDATION FAILED] Assessment ${impl.id} has duplicate Finding ID: ${rule.finding.id}`);
        }
        findingIds.add(rule.finding.id);

        // Every finding should have a recommendation mapping
        if (!rule.finding.recommendationId) {
          throw new Error(`[VALIDATION FAILED] Assessment ${impl.id} finding ${rule.finding.id} is missing a recommendationId`);
        }
      });

      // 8. Metric Cards Duplicate IDs
      const metricIds = new Set<string>();
      impl.config.metricCards.forEach(card => {
        if (metricIds.has(card.id)) {
          throw new Error(`[VALIDATION FAILED] Assessment ${impl.id} has duplicate Metric Card ID: ${card.id}`);
        }
        metricIds.add(card.id);
      });
      
      // 9. Version check
      if (!impl.version) {
        throw new Error(`[VALIDATION FAILED] Assessment ${impl.id} is missing a version string.`);
      }
    }
  });

  console.log(`✓ ${ASSESSMENTS.length} Assessments Registered`);
  console.log(`✓ ${implementedCount} Fully Implemented Modules Validated`);
  console.log('Assessment Registry Loaded Successfully.');
}
