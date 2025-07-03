import React from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We dive deep into your business goals, target audience, and project requirements to create a solid foundation.',
      features: ['Business Analysis', 'User Research', 'Competitor Analysis', 'Project Planning']
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Our designers create stunning visuals and user experiences that align with your brand and engage your audience.',
      features: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Brand Integration']
    },
    {
      icon: Code,
      title: 'Develop',
      description: 'Our developers bring designs to life using cutting-edge technologies and best practices for optimal performance.',
      features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Integration']
    },
    {
      icon: Rocket,
      title: 'Deploy',
      description: 'We launch your project and provide ongoing support to ensure continued success and growth.',
      features: ['Testing & QA', 'Deployment', 'Performance Optimization', 'Ongoing Support']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures your project is delivered on time, within budget, and exceeds expectations
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-teal-300 to-orange-300"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-center">
                      {step.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow (Hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 z-20">
                      <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[6px] border-l-blue-400 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Statistics */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Typical Project Timeline
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1-2</div>
              <div className="text-gray-600">Weeks Discovery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">2-3</div>
              <div className="text-gray-600">Weeks Design</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4-8</div>
              <div className="text-gray-600">Weeks Development</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
              <div className="text-gray-600">Week Deployment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;