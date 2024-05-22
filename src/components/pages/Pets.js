import React from 'react'
import Sidebar from './CRUD/Sidebar'
import '../../App.css'
import Cards from '../Cards'
function Pets() {
  return (
    <>
        <div className='main-container'>
            <h1>Pets Disponíveis</h1>
            <Cards />
        </div>
        <Sidebar/>
    </>
  )
}

export default Pets
