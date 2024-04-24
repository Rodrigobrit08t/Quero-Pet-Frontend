import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import './Entrar.css';

function Cadastrar() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  */

  return (
    <>
      <div className="container">
      <header className="header">
        <span>Por favor digite suas informações de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="seuemail@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button /*onClick={handleSignOut}*/ className="button">
          Cadastrar 
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/Entrar">Acesse sua conta aqui</Link>
        </div>
      </form>
    </div>
    </>
  )
}

export default Cadastrar
