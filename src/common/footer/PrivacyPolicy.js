import React from 'react';
import { Link } from 'react-router-dom';
// import './PrivacyPolicy.css'; // Import your CSS stylesheet

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1 className="privacy-policy-heading">Privacy Policy</h1>
      <p className="policy-intro">
        This Privacy Policy outlines how [Your Company Name] ("we," "our," or "us") collects, uses, and protects your personal information. By using our services, you consent to the practices described in this policy.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect personal information, including but not limited to:
      </p>
      <ul>
        <li>Your name and contact details</li>
        <li>Information about your use of our software and services</li>
        <li>Payment information for subscription services</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We use your information for purposes including but not limited to:
      </p>
      <ul>
        <li>Providing and improving our software and services</li>
        <li>Processing payments and billing</li>
        <li>Communicating with you about updates and support</li>
      </ul>

      <h2>Security</h2>
      <p>
        We take security seriously and implement measures to protect your information. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Our software and services may include links to third-party websites or services. We are not responsible for the practices, content, or privacy policies of these third parties. Please review their policies before using their services.
      </p>

      <h2>Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy to reflect changes in our practices or legal requirements. Please check this page periodically for updates.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions or concerns about this Privacy Policy, please <Link to="/contact">contact us</Link>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
