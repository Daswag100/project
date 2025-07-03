import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Globe, Palette, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS and Android applications built with React Native and Flutter. From concept to app store deployment with cross-platform compatibility.',
      features: ['React Native Development', 'Flutter Development', 'Cross-Platform Solutions', 'App Store Optimization'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Responsive, modern websites that convert visitors into customers. E-commerce platforms, real estate websites, and portfolio sites with SEO optimization.',
      features: ['E-commerce Websites', 'Real Estate Platforms', 'Portfolio Websites', 'Custom Web Applications'],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      iconBg: 'bg-teal-500'
    },
    {
      icon: Palette,
      title: 'Branding & Design',
      description: 'Complete brand identity packages including professional logo design, visual assets, brand guidelines, and marketing materials.',
      features: ['Logo Design', 'Brand Identity', 'Visual Assets', 'Marketing Materials'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Local SEO & GMB',
      description: 'Google My Business optimization and local search engine optimization to help customers find your business and improve local rankings.',
      features: ['Google My Business Setup', 'Local SEO Optimization', 'Review Management', 'Local Citations'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Digital Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to transform your business and accelerate growth through innovative technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <article
                key={index}
                className={`${service.bgColor} rounded-2xl p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`h-1 bg-gradient-to-r ${service.color} rounded-full`}></div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            aria-label="Contact VisionAura to discuss your digital project"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;