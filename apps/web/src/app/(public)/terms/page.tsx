import { Metadata } from 'next';
import { LegalPage } from '@/components/layout/legal-page';

export const metadata: Metadata = {
  title: 'Terms of Service | WelliQo',
  description: 'Terms and conditions governing your use of WelliQo services.',
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="August 8, 2026">
      <p>
        Please read these Terms of Service ("Terms") carefully before using the WelliQo website, application, or services (collectively, the "Services") operated by VeeiQ Technologies ("we", "us", or "our").
      </p>
      <p>
        By accessing or using the Services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Services.
      </p>

      <h2>1. Nature of the Service</h2>
      <p>
        WelliQo is a digital wellness platform designed to provide personalized insights, habit tracking, and general nutrition information based on user-provided data and algorithms. 
      </p>
      <p><strong>CRITICAL NOTICE:</strong> WelliQo is NOT a medical device, nor are we a healthcare provider. The Service is for educational and informational purposes only. It is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare professional before making significant changes to your diet, exercise routine, or lifestyle, especially if you have pre-existing medical conditions.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old to use the Services. By agreeing to these Terms, you represent and warrant that you are at least 18 years of age and that your use of the Services does not violate any applicable law or regulation.
      </p>

      <h2>3. Account Registration and Security</h2>
      <ul>
        <li>You must provide accurate, complete, and current information when creating an account. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</li>
        <li>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</li>
        <li>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
      </ul>

      <h2>4. User Content & Assessment Data</h2>
      <p>
        Our Service allows you to submit, post, link, store, and otherwise make available certain information regarding your health, lifestyle, and preferences ("User Content"). You retain all rights to your User Content. By submitting User Content, you grant us a license to process, analyze, and use this data strictly in accordance with our Privacy Policy to generate your reports and provide the Services.
      </p>

      <h2>5. Subscription, Billing, and Refunds</h2>
      <p>
        Certain aspects of the Services (e.g., Premium Coaching, Advanced Reports) may be billed on a subscription basis ("Subscriptions"). 
      </p>
      <ul>
        <li><strong>Billing Cycle:</strong> Subscriptions are billed in advance on a recurring and periodic basis (e.g., monthly or annually).</li>
        <li><strong>Auto-Renewal:</strong> Unless you cancel your Subscription before the end of the current billing cycle, it will automatically renew under the exact same conditions.</li>
        <li><strong>Refunds:</strong> Except when required by law, paid Subscription fees are non-refundable. We may, at our sole discretion, offer refunds on a case-by-case basis.</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        The Service and its original content (excluding User Content), features, algorithms, UI/UX design, and functionality are and will remain the exclusive property of VeeiQ Technologies and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of VeeiQ Technologies.
      </p>

      <h2>7. Acceptable Use and Restrictions</h2>
      <p>You agree NOT to engage in any of the following prohibited activities:</p>
      <ul>
        <li>Copying, distributing, or disclosing any part of the Service in any medium, including by automated or non-automated "scraping".</li>
        <li>Using any automated system, including "robots," "spiders," or "offline readers," to access the Service.</li>
        <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Service.</li>
        <li>Uploading invalid data, viruses, worms, or other software agents through the Service.</li>
        <li>Reverse engineering, decompiling, or disassembling any aspect of the Service algorithms.</li>
      </ul>

      <h2>8. Termination</h2>
      <p>
        We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        In no event shall VeeiQ Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
      </p>
      <ul>
        <li>Your access to or use of or inability to access or use the Service.</li>
        <li>Any conduct or content of any third party on the Service.</li>
        <li>Any personal injury, physical harm, or medical condition allegedly resulting from your reliance on the Service's general wellness insights.</li>
      </ul>
      <p>
        Our total liability in any matter arising out of or related to these terms is limited to the amount you paid us for the Service during the 12 months preceding the event giving rise to the liability.
      </p>

      <h2>10. Disclaimer of Warranties</h2>
      <p>
        Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
      </p>

      <h2>12. Contact Information</h2>
      <p>
        If you have any questions about these Terms, please contact us at terms@veeiq.com.
      </p>
    </LegalPage>
  );
}
