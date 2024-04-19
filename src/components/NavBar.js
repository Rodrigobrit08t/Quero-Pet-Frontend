import React, { useState, useEffect } from 'react'
import Logotipo from "../img/Logotipo.svg";
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <img src={Logotipo} alt="Logotipo" className='Logotipo'></img>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Início
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Pets' className='nav-links' onClick={closeMobileMenu}>
                                Pets
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Dashboard' className='nav-links' onClick={closeMobileMenu}>
                                Dashboard
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Entrar' className='nav-links' onClick={closeMobileMenu}>
                                Entrar
                            </Link>
                        </li>
                    </ul>


                    {button && <Button buttonStyle='btn--outline'>Cadastre-se</Button>}


                </div>
            </nav>
        </>
    );
}

export default NavBar
