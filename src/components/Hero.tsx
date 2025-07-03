import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-600/5"></div>
      
      {/* Animated background elements - Straight line animation */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200/30 rounded-full" style={{
        animation: 'float 3s ease-in-out infinite'
      }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-orange-200/30 rounded-full animate-pulse"></div>

      {/* Custom CSS for straight floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Digital Agency Excellence
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Turning Vision into{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Digital Success
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              We transform your vision into digital success by solving the challenges that keep you from reaching your potential. Expert mobile app development with React Native and Flutter, responsive website design, professional branding, and local SEO optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
                aria-label="Start your digital transformation project with VisionAura"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 group"
                aria-label="View VisionAura's portfolio of successful projects"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                View Our Work
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Visual Element - Enhanced with VisionAura branding */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main card with VisionAura logo integration */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center p-3">
                      <img 
                        src="/Vision Aura WT PNG_054343.png" 
                        alt="VisionAura Logo" 
                        className="w-full h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Your Vision</h3>
                    <p className="text-gray-600">Transformed into Reality</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements with straight animations */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg" style={{
                animation: 'float 2s ease-in-out infinite'
              }}>
                <span className="text-white font-bold">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;