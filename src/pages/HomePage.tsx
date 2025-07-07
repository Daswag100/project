import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio showAll={false} />
      <Testimonials isHomePage={true} />
    </>
  );
};

export default HomePage;