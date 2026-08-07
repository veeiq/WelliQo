import { Metadata } from 'next';
import { LegalPage } from '@/components/layout/legal-page';

export const metadata: Metadata = {
  title: 'Privacy Policy | WelliQo',
  description: 'How WelliQo collects, uses, and protects your personal and health data.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="August 8, 2026">
      <p>
        At WelliQo, operated by VeeiQ Technologies ("we", "us", "our"), we take your privacy and the security of your personal and health-related information extremely seriously. We believe that your health data belongs to you. This Privacy Policy details everything you need to know about how we collect, use, store, process, transfer, and protect your information when you use our website, mobile applications, assessments, and related services (collectively, the "Services").
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        To provide you with personalized wellness insights, we collect information in the following categories:
      </p>
      <h3>A. Information You Provide Directly</h3>
      <ul>
        <li><strong>Account Information:</strong> Name, email address, password, phone number, date of birth, and biological sex (for physiological baseline calculations).</li>
        <li><strong>Assessment Data:</strong> Self-reported health metrics, lifestyle habits, dietary preferences, stress levels, sleep patterns, physical activity, and historical wellness data provided through our 5-minute assessment or ongoing check-ins.</li>
        <li><strong>Biometric & Wearable Data (Optional):</strong> If you choose to connect third-party devices (e.g., Apple Health, Google Fit, Oura, Garmin), we collect data such as heart rate variability (HRV), resting heart rate, sleep stages, steps, and activity minutes.</li>
        <li><strong>Communication Data:</strong> Messages, feedback, or support requests sent to our customer service or coaching team.</li>
      </ul>
      <h3>B. Information Collected Automatically</h3>
      <ul>
        <li><strong>Device & Usage Data:</strong> IP addresses, browser types, operating systems, device identifiers, referring URLs, pages viewed, time spent on pages, and interaction data (e.g., clicks, scrolls) to help us improve our UI/UX.</li>
        <li><strong>Location Data:</strong> General geographic location based on your IP address or explicit location permissions (for localized coach matching).</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We do not sell your personal data. We use the information we collect solely to:</p>
      <ul>
        <li>Generate your personalized WelliQo baseline report and daily habit recommendations.</li>
        <li>Operate, maintain, and improve our Services, including our proprietary behavioral and nutrition algorithms.</li>
        <li>Match you with appropriate wellness coaches (if you opt-in to coaching services).</li>
        <li>Communicate with you regarding updates, security alerts, and administrative messages.</li>
        <li>Detect, investigate, and prevent fraudulent transactions, abuse, or security incidents.</li>
        <li>Comply with legal obligations and enforce our Terms of Service.</li>
      </ul>

      <h2>3. Data Sharing and Disclosure</h2>
      <p>Your privacy is paramount. We only share your data under strict conditions:</p>
      <ul>
        <li><strong>With Your Consent:</strong> We will share your data with your chosen WelliQo coach only when you explicitly authorize the connection.</li>
        <li><strong>Service Providers:</strong> We employ trusted third-party companies (e.g., secure cloud hosting providers like AWS, database providers, email delivery services) to facilitate our Services. These providers are bound by strict data processing agreements and are prohibited from using your data for their own purposes.</li>
        <li><strong>Legal Requirements:</strong> We may disclose information if required to do so by law, court order, or governmental request, or to protect the safety, rights, or property of WelliQo, our users, or the public.</li>
        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, user data may be transferred, subject to the acquiring entity adhering to this Privacy Policy.</li>
      </ul>

      <h2>4. Data Security & Storage</h2>
      <p>
        We implement enterprise-grade security measures to protect your data. All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Our databases are secured within Virtual Private Clouds (VPCs) with strict access controls. 
      </p>
      <p>
        While we strive to use commercially acceptable means to protect your Personal Information, no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee absolute security but commit to prompt notification in the highly unlikely event of a breach.
      </p>

      <h2>5. Your Rights and Choices</h2>
      <p>Depending on your jurisdiction (including GDPR in Europe and CCPA in California), you possess specific rights regarding your personal data:</p>
      <ul>
        <li><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.</li>
        <li><strong>Right to Rectification:</strong> You can update or correct inaccurate data in your account settings.</li>
        <li><strong>Right to Erasure (Right to be Forgotten):</strong> You can request the complete deletion of your account and associated health data at any time. Upon request, we will securely wipe your data from our active databases within 30 days.</li>
        <li><strong>Right to Opt-Out:</strong> You may opt out of non-essential communications and analytics tracking.</li>
      </ul>

      <h2>6. HIPAA Disclaimer (United States)</h2>
      <p>
        WelliQo is a wellness platform, not a healthcare provider or a "Covered Entity" under the Health Insurance Portability and Accountability Act (HIPAA). However, we voluntarily adopt HIPAA-inspired security frameworks to ensure your health information is treated with the highest degree of confidentiality and security.
      </p>

      <h2>7. Children's Privacy</h2>
      <p>
        Our Services are strictly intended for individuals who are 18 years of age or older. We do not knowingly collect personal data from anyone under the age of 18. If we become aware that we have collected data from a minor, we will take immediate steps to delete that information.
      </p>

      <h2>8. International Data Transfers</h2>
      <p>
        WelliQo is built and operated in India by VeeiQ Technologies, but utilizes global cloud infrastructure. If you access our Services from outside India (e.g., USA, EU), your data may be transferred to, stored, and processed in jurisdictions that may not have data protection laws equivalent to those in your home country. By using our Services, you consent to this transfer.
      </p>

      <h2>9. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes via email or a prominent notice on our website prior to the change becoming effective.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact our Data Protection Officer at:
      </p>
      <p>
        <strong>Email:</strong> support@veeiq.com<br />
        <strong>Mailing Address:</strong> VeeiQ Technologies, Legal & Privacy Dept, India.
      </p>
    </LegalPage>
  );
}
