import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does it take to develop a mobile app?',
      answer: 'The timeline depends on the app\'s complexity. Simple apps take 2-3 months, while complex apps with advanced features can take 4-6 months. We provide detailed timelines during our discovery phase.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer comprehensive support packages including maintenance, updates, bug fixes, and feature enhancements. We\'re committed to your long-term success.'
    },
    {
      question: 'What technologies do you use for development?',
      answer: 'We use cutting-edge technologies including React Native and Flutter for mobile apps, React/Next.js for websites, and modern design tools. We choose the best technology stack for each project.'
    },
    {
      question: 'Can you help with both iOS and Android development?',
      answer: 'Absolutely! We specialize in cross-platform development using React Native and Flutter, ensuring your app works seamlessly on both iOS and Android devices.'
    },
    {
      question: 'How do you ensure my project stays within budget?',
      answer: 'We provide detailed project estimates upfront and maintain transparent communication throughout. Any scope changes are discussed and approved before implementation.'
    },
    {
      question: 'What makes VisionAura different from other agencies?',
      answer: 'Our focus on understanding your business goals, transparent communication, proven track record, and commitment to delivering results that drive real business growth sets us apart.'
    },
    {
      question: 'Do you work with startups or only established businesses?',
      answer: 'We work with businesses of all sizes! From startups looking to launch their first product to established companies seeking digital transformation.'
    },
    {
      question: 'How do you handle project communication and updates?',
      answer: 'We provide regular updates through your preferred communication channels, weekly progress reports, and scheduled check-ins to ensure you\'re always informed about your project\'s status.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our services and process
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We'd love to help!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;