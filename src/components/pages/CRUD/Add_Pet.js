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


  return (
    <>
      <div>
        <div className='grid-container'>
          <div className='sidebar'>
            <Sidebar />
          </div>
          <header className="header">
            <span>Digite as informações do pet</span>
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
                <label htmlFor="decription">Descrição</label>
                <input
                  type="text"
                  name="decription"
                  id="decription"
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

              <div className='inputContainerRadio'>
                <label htmlFor="sex">Sexo</label>
                <label for="M">Macho</label>
                <input type="radio" name="sex" id="sex" value="M" onChange={(e) => setSex(e.target.value)} />
                <label for="F">Fêmea</label>
                <input type="radio" name="sex" id="sex" value="F" onChange={(e) => setSex(e.target.value)} />
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

              <div className='inputContainerRadio'>
                <label htmlFor="is_vaccinated">É Vacinado?</label>
                <label for="T">Sim</label>
                <input type="radio" name="is_vaccinated" id="is_vaccinated" value="T" onChange={(e) => setVacc(e.target.value)} />
                <label for="F">Não</label>
                <input type="radio" name="is_vaccinated" id="is_vaccinated" value="F" onChange={(e) => setVacc(e.target.value)} />
              </div>
            </form>
            <br></br>
            <button className='submit'>Cadastrar</button>
          </div>


        </div>
      </div>

    </>
  )
}

export default Add_Pet
