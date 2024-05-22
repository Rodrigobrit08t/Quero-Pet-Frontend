import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import './Entrar.css';

function Cadastrar() {

  return (
    <div>
      <div className='container'>
        <header className="header">
          <span>Selecione seu tipo de Usuário</span>
        </header>
        <div className='choose-container'>
          
        </div>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/Entrar">Acesse sua conta aqui</Link>
        </div>
      </div>
    </div>
  )
}

export default Cadastrar
