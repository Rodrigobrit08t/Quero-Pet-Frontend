import React, {useState} from 'react'
import Logotipo from "../img/Logotipo.svg";
import {Link} from 'react-router-dom';

function NavBar() {
    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <img src={Logotipo} alt="Logotipo"></img>

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
                        <Link to='/Adotar' className='nav-links' onClick={closeMobileMenu}>
                            Adotar
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/ONG' className='nav-links' onClick={closeMobileMenu}>
                            ONG
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Entrar' className='nav-links' onClick={closeMobileMenu}>
                            Entrar
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    </>
  )
}

export default NavBar
