import React from 'react';
import { Link } from 'react-router-dom';
import './CRUD.css';


function Sidebar() {
    return (
        <aside id="sidebar">
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
