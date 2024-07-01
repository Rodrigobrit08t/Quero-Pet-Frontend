import React from 'react';
import Sidebar from './Sidebar';
import './CRUD.css';
import { useState } from "react";

function Remove_Pet() {

  const [id, setID] = useState("");

  const handleClick = () => {
    if (id.trim() === '') {
      alert('Por favor, preencha todos os campos.');
    } else if (!/^\d+$/.test(id)) {
      alert('Por favor, insira um ID válido.');
    } else {
      alert('Pet Removido!');
      setID('');
    }
  };

  return (
    <div className='grid-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <header>
        Busque o pet a ser removido
      </header>
      <div className='main'>
        <form>
          <div className='inputContainer'>
            <label>Insira o ID do Pet</label>
            <input
              type="text"
              name="id"
              id="id"
              onChange={(e) => setID(e.target.value)}
            />
          </div>
        </form>
        <button onClick={handleClick} className='submit'>Buscar</button>
      </div>
    </div>


  );
}

export default Remove_Pet
