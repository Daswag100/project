import React from 'react';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <About />
      <Process />
      <div id="testimonials">
        <Testimonials isHomePage={false} />
      </div>
    </div>
  );
};

export default AboutPage;