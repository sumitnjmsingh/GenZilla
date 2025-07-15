"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Effective Date: June 22, 2025
        </p>

        <section className="space-y-6 text-base leading-relaxed">
          <p>
            At <strong>GenZilla</strong>, your privacy is our top priority. This
            policy outlines how we collect, use, store, and protect your
            information when you interact with our generative AI tools and
            services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Basic user information (email, name) when you register</li>
            <li>Usage data (tool interactions, preferences, timestamps)</li>
            <li>Device data (browser, IP address, OS type)</li>
            <li>Anonymized analytics for platform optimization</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800">
            2. How We Use Your Information
          </h2>
          <p>We use collected data to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Improve GenZilla features and user experience</li>
            <li>Provide support and personalized recommendations</li>
            <li>Ensure security and prevent abuse</li>
            <li>Monitor system performance and uptime</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800">
            3. Data Sharing and Third Parties
          </h2>
          <p>
            We <strong>do not sell</strong> your personal data. We may share
            information with trusted infrastructure providers (e.g., cloud or
            analytics services) strictly for operational purposes under data
            processing agreements.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            4. Cookies & Tracking
          </h2>
          <p>
            We use minimal cookies to store preferences and session information.
            You can manage cookie settings through your browser.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            5. Data Retention & Security
          </h2>
          <p>
            Data is encrypted in transit and at rest. We retain data only as
            long as necessary for service operation, unless legally required
            otherwise.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            6. Your Rights
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Request access to your personal data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent for specific features</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800">
            7. Changes to This Policy
          </h2>
          <p>
            This privacy policy may be updated periodically. We&#39;ll notify users
            via email or in-app banners if major changes occur.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">8. Contact Us</h2>
          <p>
            If you have questions about this policy, reach out to us at{" "}
            <a
              href="mailto:privacy@genzilla.ai"
              className="text-blue-600 underline"
            >
              privacy@genzilla.ai
            </a>
            .
          </p>
        </section>

        <div className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} GenZilla Technologies Pvt. Ltd. All
          rights reserved.
        </div>
      </div>
    </main>
  );
}
