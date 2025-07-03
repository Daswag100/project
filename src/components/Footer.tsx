import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, MessageSquare, Instagram, Mail, ArrowUp } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { NewsletterSubscriber } from '../lib/supabase';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setSubscribeMessage('Please enter your email address.');
      return;
    }

    setIsSubscribing(true);

    try {
      // Check if email already exists
      const { data: existingSubscriber } = await supabase
        .from('newsletter_subscribers')
        .select('email')
        .eq('email', email)
        .single();

      if (existingSubscriber) {
        setSubscribeMessage('You\'re already subscribed to our newsletter!');
        setEmail('');
        setTimeout(() => setSubscribeMessage(''), 3000);
        return;
      }

      // Insert new subscriber
      const subscriberData: NewsletterSubscriber = {
        email: email
      };

      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([subscriberData]);

      if (error) {
        throw error;
      }

      setSubscribeMessage('Successfully subscribed! Thank you for joining our newsletter.');
      setEmail('');
      
      // Clear message after 3 seconds
      setTimeout(() => {
        setSubscribeMessage('');
      }, 3000);

    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubscribeMessage('There was an error subscribing. Please try again later.');
      
      // Clear error message after 3 seconds
      setTimeout(() => {
        setSubscribeMessage('');
      }, 3000);
    } finally {
      setIsSubscribing(false);
    }
  };

  const services = [
    'Mobile App Development',
    'Website Development',
    'Branding & Design',
    'Local SEO & GMB'
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 group"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform duration-200" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                VisionAura
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Turning Vision into Digital Success. We transform your business vision into digital reality through innovative mobile apps, websites, branding, and SEO solutions.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://wa.me/message/C4HYOIP5NGZKA1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/visionaura.tech?igsh=bXljZTh2eGs2aDRr&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:visionauradigital@gmail.com"
                className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates on digital trends and exclusive insights.
            </p>
            
            {subscribeMessage && (
              <div className={`mb-4 p-3 rounded-lg ${
                subscribeMessage.includes('error') || subscribeMessage.includes('Error')
                  ? 'bg-red-600 text-white'
                  : 'bg-green-600 text-white'
              }`}>
                <p className="text-sm">{subscribeMessage}</p>
              </div>
            )}
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={isSubscribing}
              />
              <button 
                type="submit"
                disabled={isSubscribing}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium rounded-lg hover:shadow-lg transition-shadow duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 VisionAura. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy-policy" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookie-policy" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;