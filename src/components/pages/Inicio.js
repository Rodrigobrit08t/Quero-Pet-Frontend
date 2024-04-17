import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

function Inicio(){
    return(
        <>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Inicio;