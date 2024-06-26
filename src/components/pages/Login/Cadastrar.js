import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import './Entrar.css';

function Cadastrar() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [cnpj, setCNPJ] = useState("");
    const [phone, setPhone] = useState("");
    //const [description, setDescription] = useState("");

    const handleClick = () => {
        if (email === '' || password === '' || name === '' || cnpj === '' || phone === '') {
          alert('Por favor, preencha todos os campos.');
        } else {
          alert('Bem-Vindo!');
          setPassword('');
          setEmail('');
          setName('');
          setCNPJ('');
          setPhone('');
        }
      };

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
        <div>
            <div className="container">
                <header>
                    Por favor digite suas informações de cadastro
                </header>

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
                        <label htmlFor="cnpj">CNPJ</label>
                        <input
                            type="text"
                            name="cnpj"
                            id="cnpj"
                            placeholder=""
                            onChange={(e) => setCNPJ(e.target.value)}
                        />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="phone">Telefone</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder=""
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder=""
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder=""
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button /*onClick={handleSignOut}*/ onClick={handleClick} className="button">
                        Cadastrar
                    </button>
                    <div className="footer">
                        <p>Você já tem uma conta?</p>
                        <Link to="/Entrar">Acesse sua conta aqui</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cadastrar
