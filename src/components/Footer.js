import React from 'react'
import './Footer.css';
import Logotipo from "../img/Logotipo.svg";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>

            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Sobre Nós</h2>
                        <Link to='/Produto'>Produto</Link>
                        <Link to='/Proposito'>Propósito</Link>
                        <Link to='/Contato'>Contato</Link>
                        <Link to='/Termos'>Termos de Uso</Link>
                    </div>
                </div>
            </div>
            <section class='bottom'>
                <div class='bottom-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src={Logotipo} alt="Logotipo" height="100px" width="100px"></img>
                        </Link>
                    </div>
                    <small class='website-rights'>QueroPet © 2024</small>
                </div>
            </section>
        </div>
    )
}

export default Footer
