import { Metadata } from 'next';
import { LegalPage } from '@/components/layout/legal-page';

export const metadata: Metadata = {
  title: 'Cookie Policy | WelliQo',
  description: 'How WelliQo uses cookies and similar tracking technologies.',
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="August 8, 2026">
      <p>
        This Cookie Policy explains how WelliQo, operated by VeeiQ Technologies ("we", "us", or "our"), uses cookies and similar tracking technologies when you visit our website or use our application (the "Services"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
      </p>
      <p>
        Cookies set by the website owner (in this case, WelliQo) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., interactive content, authentication, and analytics).
      </p>

      <h2>2. Why do we use cookies?</h2>
      <p>
        We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Services to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Services.
      </p>

      <h2>3. Types of Cookies We Use</h2>
      
      <h3>A. Strictly Necessary Cookies</h3>
      <p>
        These cookies are essential to provide you with services available through our platform and to use some of its features, such as accessing secure areas that require login. Because these cookies are strictly necessary to deliver the Services, you cannot refuse them without impacting how our site functions.
      </p>
      <ul>
        <li><strong>Session Cookies:</strong> Used to maintain your authentication state as you navigate through the assessment and dashboard.</li>
        <li><strong>Security Cookies:</strong> Used to prevent fraudulent use of login credentials and protect user data from unauthorized parties.</li>
      </ul>

      <h3>B. Performance and Analytics Cookies</h3>
      <p>
        These cookies collect information that is used either in aggregate form to help us understand how our Services are being used, or how effective our marketing campaigns are, or to help us customize our Services for you.
      </p>
      <ul>
        <li>We may use tools like Google Analytics or PostHog to understand user flow, allowing us to improve UI/UX design. This data is anonymized.</li>
      </ul>

      <h3>C. Functionality Cookies</h3>
      <p>
        These cookies are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name, and remember your preferences.
      </p>
      <ul>
        <li><strong>Theme Preferences:</strong> Remembering if you prefer Light or Dark mode.</li>
        <li><strong>Language Preferences:</strong> Remembering your localized settings.</li>
      </ul>

      <h3>D. Targeting and Advertising Cookies</h3>
      <p>
        <strong>WelliQo does NOT use targeting or advertising cookies to sell your health data to third-party advertisers.</strong> We do not deploy Facebook Pixels or Google Ads retargeting scripts that track your health interactions. Your privacy is paramount.
      </p>

      <h2>4. Other Tracking Technologies</h2>
      <p>
        We and our third-party partners may use other, similar technologies from time to time, like web beacons, pixels (or "clear gifs") and local storage. These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Services or opened an email that we have sent them. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.
      </p>

      <h2>5. How can I control cookies?</h2>
      <p>
        You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Banner that appears upon your first visit.
      </p>
      <p>
        You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website (like secure dashboards) may be severely restricted or broken.
      </p>
      <p>
        To learn more about how to manage cookies on popular browsers, please visit their respective help pages:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
      </ul>

      <h2>6. Do Not Track (DNT) Signals</h2>
      <p>
        Some internet browsers incorporate a "Do Not Track" feature that signals to websites you visit that you do not want to have your online activity tracked. At this time, there is no uniform technological standard for recognizing and implementing DNT signals. Therefore, we do not currently respond to browser DNT signals. 
      </p>

      <h2>7. Changes to this Cookie Policy</h2>
      <p>
        We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about our use of cookies or other technologies, please email us at support@veeiq.com.
      </p>
    </LegalPage>
  );
}
