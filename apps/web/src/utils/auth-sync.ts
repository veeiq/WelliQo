import { useAssessmentStore } from '../store/assessment-store';

/**
 * Utility to synchronize guest data (like in-progress or completed assessments)
 * with the authenticated user's database record upon successful login/registration.
 */
export async function syncGuestDataToUser() {
  const store = useAssessmentStore.getState();
  
  if (store.runtimeState === 'REPORT_READY' && store.clientReportId && !store.synced) {
    try {
      const payload = {
        clientReportId: store.clientReportId,
        assessmentId: store.data.assessmentId,
        answers: store.answers,
        calculatedMetrics: store.calculatedMetrics
      };

      const response = await fetch('/api/assessments/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        store.setSynced(true);
        console.log('Guest assessment successfully synced to authenticated user.');
      } else {
        console.error('Failed to sync guest assessment (server error)');
      }
    } catch (error) {
      console.error('Failed to sync guest assessment (network error):', error);
    }
  }
}
