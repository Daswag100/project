import React from 'react';
import Portfolio from '../components/Portfolio';

const PortfolioPage = () => {
  return (
    <div className="pt-20">
      <Portfolio showAll={true} />
    </div>
  );
};

export default PortfolioPage;