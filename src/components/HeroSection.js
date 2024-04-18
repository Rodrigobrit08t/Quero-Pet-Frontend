import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
      <div className='hero-container'>
        
        <h1>Sobre</h1>
        <p>O QueroPet é uma iniciativa que visa abordar os desafios enfrentados pelos animais abandonados e desabrigados, fornecendo uma plataforma centralizada e acessível 
          para facilitar o processo de adoção. Ao oferecer uma interface intuitiva e recursos abrangentes, o aplicativo QueroPet busca tornar a experiência de adoção de animais mais 
          transparente, eficiente e gratificante tanto para adotantes quanto para os próprios animais.
        </p>
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