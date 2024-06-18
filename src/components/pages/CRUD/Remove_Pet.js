import React from 'react';
import Sidebar from './Sidebar';
import './CRUD.css';

function Remove_Pet() {
  return (
    <div className='grid-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <header className='header'>
        <span>Busque o pet a ser removido</span>
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

export default Remove_Pet
