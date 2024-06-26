import React from 'react';
import Sidebar from './Sidebar';
import './CRUD.css';
import { useState } from "react";

function Edit_Pet() {

  const [id, setID] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');

  const validateID = (id) => {
    return /^\d+$/.test(id);
  };

  const handleClick = () => {
    if (id.trim() === '') {
      alert('Por favor, preencha todos os campos.');
    } else if (!validateID(id)) {
      alert('Por favor, insira um ID válido (apenas números).');
    } else {
      setIsModalOpen(true);
    }
  };

  const handleSave = () => {
    alert(`Informações do Pet:
    ID: ${id}
    Nome: ${petName}
    Idade: ${petAge}`);
    setIsModalOpen(false);
    setID('');
    setPetName('');
    setPetAge('');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


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
              name="id"
              id="id"
              onChange={(e) => setID(e.target.value)}
            />
          </div>
        </form>
        <button onClick={handleClick} className='submit'>Buscar</button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Editar Informações do Pet</h2>
            <div className='inputContainer'>
              <label>Nome do Pet</label>
              <input
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                placeholder="Digite o nome do pet"
              />
            </div>
            <div className='inputContainer'>
              <label>Idade do Pet</label>
              <input
                type="text"
                value={petAge}
                onChange={(e) => setPetAge(e.target.value)}
                placeholder="Digite a idade do pet"
              />
            </div>
            <button onClick={handleSave} className='submit'>Salvar</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Edit_Pet;

