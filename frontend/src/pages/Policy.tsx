import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import privacy from "../assets/privacy.png";
import terms from "../assets/terms.png";
import cookie from "../assets/cookie.png";

function Policy() {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.title='Style Share | Secret policies 🤫'

    scrollToHash();
  }, [location]);

  return (
    <div className="w-full text-[#000435] bg-white dark:text-white dark:bg-[#000435] py-16 px-4 lg:px-16 mx-auto">
      <div className="flex flex-col items-start">
        <div className="flex items-center mb-8 w-full">
          <div className="flex flex-col">
          <div className="flex items-center mb-4">
               <h1 id="privacy-policy" className="text-3xl font-bold">Privacy Policy</h1>
              <img src={privacy} alt="Privacy" className="rounded-full mr-4 h-12 w-12 ml-2 hover:scale-110 transition-transform duration-300" />
          </div>
            <section>
              <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information when you use our website.</p>
              <h3 className="text-xl font-semibold mt-4">1. Information We Collect</h3>
              <ul className="list-disc list-inside ml-4">
                <li><strong>Personal Information:</strong> When you create an account or contribute content, we may collect personal information such as your name, email address, and any other information you provide.</li>
                <li><strong>Usage Data:</strong> We collect information about your interactions with our website, such as the pages you visit, the features you use, and the time you spend on the site.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to track your activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4">2. How We Use Your Information</h3>
              <ul className="list-disc list-inside ml-4">
                <li><strong>To Provide and Improve Our Services:</strong> We use your information to operate and improve our website, provide customer support, and enhance your user experience.</li>
                <li><strong>To Communicate With You:</strong> We may use your contact information to send you updates, newsletters, marketing materials, and other information that may be of interest to you.</li>
                <li><strong>To Protect Our Services:</strong> We may use your information to detect, prevent, and address technical issues, security breaches, and fraudulent activities.</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4">3. Sharing Your Information</h3>
              <ul className="list-disc list-inside ml-4">
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers to perform functions and provide services to us.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your personal information may be transferred as a business asset.</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4">4. Data Security</h3>
              <p>We take reasonable measures to protect your personal information from unauthorized access, use, alteration, or destruction. However, no internet or email transmission is ever fully secure or error-free.</p>
              <h3 className="text-xl font-semibold mt-4">5. Your Rights</h3>
              <p>You have the right to access, correct, or delete your personal information. You can also object to or restrict our processing of your personal information.</p>
              <h3 className="text-xl font-semibold mt-4">6. Changes to This Privacy Policy</h3>
              <p>We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.</p>
            </section>
          </div>
        </div>

        <div className="flex items-center mb-8 w-full">
          <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <h1 id="terms-and-conditions" className="text-3xl font-bold mb-4 scroll-margin-top">Terms and Conditions</h1>
            <img src={terms} alt="Terms" className="rounded-full mr-4  h-12 w-12 ml-2 mb-3 hover:scale-110 transition-transform duration-300" />
          </div>
            <section>
              <p>Please read these terms and conditions carefully before using our website.</p>
              <h3 className="text-xl font-semibold mt-4">1. Acceptance of Terms</h3>
              <p>By accessing or using our website, you agree to be bound by these terms and conditions. If you disagree with any part of the terms, then you may not access the website.</p>
              <h3 className="text-xl font-semibold mt-4">2. Use of the Website</h3>
              <ul className="list-disc list-inside ml-4">
                <li><strong>Eligibility:</strong> You must be at least 13 years old to use our website.</li>
                <li><strong>Account Registration:</strong> You may need to create an account to access certain features of our website. You are responsible for maintaining the confidentiality of your account information.</li>
                <li><strong>User Conduct:</strong> You agree not to use our website for any unlawful or prohibited activities. You also agree not to interfere with or disrupt the website or servers.</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4">3. Contributions</h3>
              <ul className="list-disc list-inside ml-4">
                <li><strong>Content Ownership:</strong> You retain ownership of any content you create or contribute to our website. However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content.</li>
                <li><strong>Content Standards:</strong> You agree that your contributions will not contain any material that is defamatory, obscene, or otherwise objectionable.</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4">4. Intellectual Property</h3>
              <ul className="list-disc list-inside ml-4">
                <li><strong>Website Content:</strong> The content on our website, including text, graphics, logos, and software, is the property of [Website Name] and is protected by copyright and other intellectual property laws.</li>
                <li><strong>Trademarks:</strong> All trademarks, logos, and service marks displayed on our website are the property of their respective owners.</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4">5. Limitation of Liability</h3>
              <p>Our website is provided on an "as is" and "as available" basis. We do not warrant that the website will be uninterrupted or error-free. In no event shall we be liable for any damages arising out of or in connection with your use of the website.</p>
              <h3 className="text-xl font-semibold mt-4">6. Governing Law</h3>
              <p>These terms and conditions are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>
              <h3 className="text-xl font-semibold mt-4">7. Changes to Terms and Conditions</h3>
              <p>We may update our terms and conditions from time to time. We will notify you of any changes by posting the new terms and conditions on this page. You are advised to review these terms periodically for any changes.</p>
            </section>
          </div>
        </div>

        <div className="flex items-center mb-8 w-full">
          <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <h1 id="cookie-policy" className="text-3xl font-bold mb-4 scroll-margin-top">Cookie Policy</h1>
            <img src={cookie} alt="Cookie" className="rounded-full mr-4  h-12 w-12 ml-2 mb-3 hover:scale-110 transition-transform duration-300" />
          </div>
            <section>
              <p>This cookie policy explains how we use cookies and similar technologies on our website.</p>
              <h3 className="text-xl font-semibold mt-4">1. What Are Cookies?</h3>
              <p>Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the site owners.</p>
              <h3 className="text-xl font-semibold mt-4">2. How We Use Cookies</h3>
              <p>We use cookies to:</p>
              <ul className="list-disc list-inside ml-4">
                <li><strong>Enhance Your Experience:</strong> Cookies help us remember your preferences and settings.</li>
                <li><strong>Analyze Usage:</strong> Cookies allow us to understand how visitors interact with our website, helping us improve our content and services.</li>
                <li><strong>Marketing and Advertising:</strong> Cookies may be used to deliver relevant advertisements to you.</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4">3. Types of Cookies We Use</h3>
              <ul className="list-disc list-inside ml-4">
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They cannot be switched off in our systems.</li>
                <li><strong>Performance Cookies:</strong> These cookies collect information about how you use our website, such as which pages you visit most often. This information is used to improve the website's performance.</li>
                <li><strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personalized features.</li>
                <li><strong>Targeting Cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests.</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4">4. Managing Cookies</h3>
              <p>You can control and/or delete cookies as you wish. For more information on how to manage cookies, please visit <a href="https://www.aboutcookies.org" className="text-blue-500">aboutcookies.org</a>. Note that if you choose to disable cookies, some parts of our website may not function properly.</p>
              <h3 className="text-xl font-semibold mt-4">5. Changes to This Cookie Policy</h3>
              <p>We may update our cookie policy from time to time. We will notify you of any changes by posting the new cookie policy on this page. You are advised to review this policy periodically for any changes.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policy;
