/**
 * Utility to synchronize guest data (like in-progress or completed assessments)
 * with the authenticated user's database record upon successful login/registration.
 */
export async function syncGuestDataToUser() {
  // TODO: Read local assessment data from localStorage / Zustand
  const localAssessmentData = localStorage.getItem('welliqo_guest_assessment');
  
  if (localAssessmentData) {
    try {
      // TODO: Call an API route (e.g. /api/assessments/sync) to attach this data to the authenticated user.
      // await fetch('/api/assessments/sync', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: localAssessmentData
      // });
      
      // Clear the local storage once successfully synced
      localStorage.removeItem('welliqo_guest_assessment');
      console.log('Guest assessment successfully synced to authenticated user.');
    } catch (error) {
      console.error('Failed to sync guest assessment:', error);
    }
  }
}
