import React from 'react'
import Sidebar from './CRUD/Sidebar'
import '../../App.css'
import Cards from '../Cards'
import '../pages/CRUD/CRUD.css'

function Pets() {
  return (
    <>
        <div className='grid-container'>
          <div className='sidebar'>
            <Sidebar/>
          </div>
            <header className='header'>Pets Disponíveis</header>
            <div className='main'>
            <Cards />
            </div>
        </div>
    </>
  )
}

export default Pets
