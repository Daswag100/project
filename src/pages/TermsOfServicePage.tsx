import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: January 15, 2024</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using VisionAura's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              VisionAura provides digital services including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Mobile application development (React Native, Flutter)</li>
              <li>Website development and design</li>
              <li>Branding and visual identity services</li>
              <li>Local SEO and Google My Business optimization</li>
              <li>Digital marketing and consultation services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Project Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All projects are subject to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Written agreements outlining scope, timeline, and deliverables</li>
              <li>Payment terms as specified in individual contracts</li>
              <li>Intellectual property rights as defined in project agreements</li>
              <li>Revision limits and change request procedures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment terms include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Project deposits are required before work begins</li>
              <li>Milestone payments as outlined in project agreements</li>
              <li>Final payment due upon project completion</li>
              <li>Late payment fees may apply as specified in contracts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              Upon full payment, clients receive ownership rights to custom work created specifically for their project. VisionAura retains rights to general methodologies, techniques, and pre-existing intellectual property used in delivering services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              VisionAura's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              Either party may terminate services with written notice. Termination terms, including payment for completed work and intellectual property rights, are outlined in individual project agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions regarding these terms, contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <p className="text-gray-700">
                Email: <a href="mailto:visionauradigital@gmail.com" className="text-blue-600 hover:text-blue-700">visionauradigital@gmail.com</a><br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;