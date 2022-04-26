import React from 'react';
import '../../App.css';
import Cards from '../Cards/Cards';
// import Cards from '../Cards';
import HeroSection from '../HeroSection/HeroSection';
// import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;