import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsConditions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white hover:text-gray-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Terms & Conditions
          </h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using our video editing services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                2. Service Description
              </h2>
              <p className="mb-4">
                We provide professional video editing services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Video editing and post-production</li>
                <li>Color grading and correction</li>
                <li>Audio editing and mixing</li>
                <li>Motion graphics and visual effects</li>
                <li>Video compression and optimization</li>
                <li>Project consultation and planning</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                3. Project Terms
              </h2>
              <p className="mb-4">
                When engaging our services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide clear project requirements and specifications</li>
                <li>Deliver source materials in acceptable formats</li>
                <li>Respond to feedback and revision requests promptly</li>
                <li>Pay agreed-upon fees within specified timeframes</li>
                <li>Respect project timelines and deadlines</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                4. Payment Terms
              </h2>
              <p className="mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>50% deposit required upon project initiation</li>
                <li>Remaining balance due upon project completion</li>
                <li>All payments are non-refundable once work begins</li>
                <li>Late payments may incur additional fees</li>
                <li>We accept payment through approved methods only</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                5. Intellectual Property
              </h2>
              <p className="mb-4">
                Intellectual property rights are governed as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You retain ownership of your original content</li>
                <li>We retain rights to our editing work until full payment</li>
                <li>Final deliverables transfer to you upon full payment</li>
                <li>We may use completed work in our portfolio (with permission)</li>
                <li>Stock footage and music licenses are your responsibility</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                6. Revisions and Changes
              </h2>
              <p>
                We provide a specified number of revision rounds based on your package. Additional 
                revisions may incur extra charges. Major changes to project scope may require 
                renegotiation of terms and pricing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                7. Cancellation Policy
              </h2>
              <p className="mb-4">
                Cancellation terms:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Projects may be cancelled before work begins with full refund</li>
                <li>Partial refunds available for work in progress</li>
                <li>No refunds for completed work</li>
                <li>We reserve the right to cancel projects for policy violations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                8. Limitation of Liability
              </h2>
              <p>
                Our liability is limited to the amount paid for services. We are not liable for 
                indirect, incidental, or consequential damages. We strive for quality but cannot 
                guarantee specific outcomes or results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                9. Confidentiality
              </h2>
              <p>
                We maintain strict confidentiality of your projects and materials. We will not share 
                your content or project details with third parties without your explicit consent, 
                except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                10. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting. Continued use of our services constitutes acceptance of 
                modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                11. Contact Information
              </h2>
              <p>
                For questions about these terms, please contact us at{' '}
                <a href="mailto:anmoltypebusiness@gmail.com" className="text-blue-600 hover:underline">
                  anmoltypebusiness@gmail.com
                </a>
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Last Updated:</strong> December 2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions; 