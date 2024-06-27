import React from 'react';
import Sidebar from './Sidebar';
import './CRUD.css';
import { useState } from "react";

function Edit_Pet() {

  const [id, setID] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [birth_date, setBirth] = useState("");
  const [sex, setSex] = useState("");
  const [is_vaccinated, setVacc] = useState("");
  const [description, setDescription] = useState("");

  const validateID = (id) => {
    return /^\d+$/.test(id);
  };

  const handleClick = () => {
    if (id.trim() === '') {
      alert('Por favor, preencha todos os campos.');
    } else if (!validateID(id)) {
      alert('Por favor, insira um ID válido.');
    } else {
      setIsModalOpen(true);
    }
  };

  const handleSave = () => {
    alert(`Informações do Pet:
    ID: ${id}
    Nome: ${name}
    Raça: ${breed}
    Idade: ${age}
    Peso: ${weight}
    Cor: ${color}
    Aniversário: ${birth_date}
    Sexo: ${sex}
    Vacinação: ${is_vaccinated}
    Descrição: ${description};
    `)
    setIsModalOpen(false);
    setID('');
    setName('');
    setAge('');
    setWeight('');
    setColor('');
    setBirth('');
    setSex('');
    setVacc('');
    setDescription('');
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='inputContainer'>
              <label>Descrição do Pet</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className='inputContainer'>
              <label>Raça do Pet</label>
              <input
                type="text"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              />
            </div>
            <div className='inputContainer'>
              <label>Idade do Pet</label>
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className='inputContainer'>
              <label>Peso do Pet</label>
              <input
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className='inputContainer'>
              <label>Cor do Pet</label>
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className='inputContainer'>
              <label>Sexo do Pet</label>
              <input
                type="text"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              />
            </div>
            <div className='inputContainer'>
              <label>Aniversário do Pet</label>
              <input
                type="date"
                value={birth_date}
                onChange={(e) => setBirth(e.target.value)}
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

