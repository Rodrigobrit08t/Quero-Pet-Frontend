import React from 'react';
import Sidebar from './Sidebar';
import './CRUD.css';
import { useState } from "react";

function Add_Pet() {

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [birth_date, setBirth] = useState("");
  const [sex, setSex] = useState("");
  const [is_vaccinated, setVacc] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = () => {
    if (name === '' || breed === '', age === '', weight === '', color === '', birth_date === '', sex === '', is_vaccinated === '', description === '') {
      alert('Por favor, preencha todos os campos.');
    } else {
      alert('Pet Cadastrado!');
      setName('');
      setBreed('');
      setAge('');
      setWeight('');
      setColor('');
      setBirth('');
      setSex('');
      setVacc('');
      setDescription('');
    }
  }

  return (
    <>
      <div>
        <div className='grid-container'>
          <div className='sidebar'>
            <Sidebar />
          </div>
          <header>
            Digite as informações do pet
          </header>
          <div className='main'>
            <form>
              <div className='inputContainer'>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=""
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='inputContainer'>
                <label htmlFor="description">Descrição</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder=""
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className='inputContainer'>
                <label htmlFor="breed">Raça</label>
                <input
                  type="text"
                  name="breed"
                  id="breed"
                  placeholder=""
                  onChange={(e) => setBreed(e.target.value)}
                />
              </div>

              <div className='inputContainer'>
                <label htmlFor="age">Idade</label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  placeholder=""
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div className='inputContainer'>
                <label htmlFor="weight">Peso</label>
                <input
                  type="text"
                  name="weight"
                  id="weight"
                  placeholder=""
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              <div className='inputContainer'>
                <label htmlFor="color">Cor</label>
                <input
                  type="text"
                  name="color"
                  id="color"
                  placeholder=""
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>

              <div className='inputContainer'>
                <label>Sexo</label>
                <div className='radioContainer'>
                  <label htmlFor="M">Macho</label>
                  <input className="small-radio" type="radio" name="sex" id="M" value="M" checked={sex === "M"} onChange={(e) => setSex(e.target.value)} />
                  <label htmlFor="F">Fêmea</label>
                  <input className="small-radio" type="radio" name="sex" id="F" value="F" checked={sex === "F"} onChange={(e) => setSex(e.target.value)} />
                </div>
              </div>

              <div className='inputContainer'>
                <label htmlFor="birth_date">Data de Aniversário</label>
                <input
                  type="date"
                  name="birth_date"
                  id="birth_date"
                  placeholder=""
                  onChange={(e) => setBirth(e.target.value)}
                />
              </div>

              <div className='inputContainer'>
                <label>É Vacinado?</label>
                <div className='radioContainer'>
                  <label htmlFor="T">Sim</label>
                  <input className="small-radio" type="radio" name="is_vaccinated" id="T" value="T" checked={is_vaccinated === "T"} onChange={(e) => setVacc(e.target.value)} />
                  <label htmlFor="F">Não</label>
                  <input className="small-radio" type="radio" name="is_vaccinated" id="F" value="F" checked={is_vaccinated === "F"} onChange={(e) => setVacc(e.target.value)} />
                </div>
              </div>
            </form>
            <br></br>
            <button onClick={handleClick} className='submit'>Cadastrar</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Add_Pet;
