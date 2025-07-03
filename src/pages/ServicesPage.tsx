import React from 'react';
import Services from '../components/Services';
import Process from '../components/Process';
import FAQ from '../components/FAQ';

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <Services />
      <Process />
      <FAQ />
    </div>
  );
};

export default ServicesPage;