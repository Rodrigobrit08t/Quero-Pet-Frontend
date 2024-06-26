import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Entrar.css';

export function Entrar() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        if (email === '' || password === '') {
          alert('Por favor, preencha todos os campos.');
        } else {
          alert('Bem-Vindo!');
          setPassword('');
          setEmail('');
        }
      };

    /*
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    

    function handleSignIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }



    if (loading) {
        return <p>carregando...</p>;
    }
    if (user) {
        return console.log(user);
    }

    */

    return (
        <>
            <div className='container'>
            <header>
                Por favor digite suas informações de login
            </header>

            <form>
                <div className="inputContainer">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder=""
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="inputContainer">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder=""
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <a href="#">Esqueceu sua senha ?</a>

                <button className="button" onClick={handleClick} /*onClick={handleSignIn}*/>
                    Entrar
                </button>
                <div className="footer">
                    <p>Você não tem uma conta?</p>
                    <Link to="/Cadastrar">Crie a sua conta aqui</Link>
                </div>
            </form>

        </div>
    </>
    );

    
}

export default Entrar;