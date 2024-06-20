import React from 'react'
import './Pages.css'
import { useState } from "react";

function Contato() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cnpj, setCNPJ] = useState("");
  return (
    <>
      <div className='main-container'>
        <header>Contato</header>
        <form>
          <div className="inputContainer">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="cnpj">CNPJ</label>
            <input
              type="text"
              name="cnpj"
              id="cnpj"
              placeholder=""
              onChange={(e) => setCNPJ(e.target.value)}
            />
          </div>
          <label className='mensagem'>Mensagem</label>
          <textarea rows="8" cols="50"></textarea>
          <button className="submit-button">
            Enviar
          </button>
        </form>
      </div>
    </>
  )
}

export default Contato