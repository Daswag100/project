import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Excellence Award',
      description: 'Recognized for outstanding digital solutions'
    },
    {
      icon: Users,
      title: '50+ Happy Clients',
      description: 'Trusted by businesses worldwide'
    },
    {
      icon: Clock,
      title: '5+ Years Experience',
      description: 'Proven track record of success'
    },
    {
      icon: Target,
      title: '100% Success Rate',
      description: 'Every project delivered on time'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies to deliver future-ready solutions.'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to your growth and achievement.'
    },
    {
      title: 'Quality Driven',
      description: 'We maintain the highest standards in every project we undertake.'
    },
    {
      title: 'Transparent Process',
      description: 'Clear communication and regular updates throughout your project.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About VisionAura
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of digital experts dedicated to transforming your vision into digital success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Transforming Businesses Through Digital Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At VisionAura, we believe every business has a unique vision waiting to be transformed into digital success. 
              Our team of experienced developers, designers, and digital strategists work collaboratively to bring your 
              ideas to life through innovative mobile applications, responsive websites, compelling brand identities, 
              and effective SEO strategies.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We don't just build digital products – we create experiences that resonate with your audience and drive 
              meaningful results for your business. Our commitment to excellence, attention to detail, and client-focused 
              approach have made us a trusted partner for businesses looking to thrive in the digital landscape.
            </p>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 border-l-4 border-blue-500">
              <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-700">
                "We transform your vision into digital success by solving the challenges that keep you from reaching your potential."
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full"></div>
                </div>
                <h4 className="font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Photo Placeholder */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="h-64 md:h-80 bg-gradient-to-r from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Meet Our Team</h4>
                <p className="text-gray-600">Passionate professionals dedicated to your success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;