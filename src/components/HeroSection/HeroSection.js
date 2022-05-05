import React from 'react';
import '../../App.css';
import { Button } from '../Button/button';
import './HeroSection.css';
// import { GoPlay } from 'react-icons/go';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/buildings.mp4' autoPlay loop muted />
      <h1>Frenzel Law</h1>
      <p className='small-title'>Established 2010</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          About
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Contact 
          {/* <span><GoPlay /></span> */}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;