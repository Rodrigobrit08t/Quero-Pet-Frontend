import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
      <div className='hero-container'>
        
        <h1>Titulo Teste</h1>
        <p>Texto Teste</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            COMEÇAR!
          </Button>
        </div>
      </div>
    );
  }
  
  export default HeroSection;