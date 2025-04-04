import React from 'react';
import './HeroSection.css';
import SearchBar from './SearchBar.tsx';


const HeroSection: React.FC = () => {
  return (
      <div className="hero-section">
        <SearchBar />
      </div>
  );
};

export default HeroSection;
