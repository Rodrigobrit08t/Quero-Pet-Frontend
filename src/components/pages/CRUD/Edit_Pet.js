import React from 'react';
import Sidebar from './Sidebar';
import './CRUD.css';

function Edit_Pet() {
  return (
    <div className='grid-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <header className='header'>
        <span>Busque o pet a ser editado</span>
      </header>
      <div className='main'>
        <form>
          <div className='inputContainer'>
            <label>Insira o ID do Pet</label>
            <input
              type="text"
              name="ID"
              id="ID"
            />
          </div>
        </form>
        <button className='submit'>Buscar</button>
      </div>
    </div>
  );
}

export default Edit_Pet;

