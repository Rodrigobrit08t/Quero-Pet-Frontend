import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Sidebar({openSidebarToggle, OpenSidebar}) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <h1 className='icon_header'>Titulo</h1>
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to='/Add_Pet'>
                        Adicionar Pet
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to='/Remove_Pet'>
                        Remover Pet
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to='/Edit_Pet'>
                        Editar Pet
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;
