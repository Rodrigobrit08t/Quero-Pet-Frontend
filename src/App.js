import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Inicio from './components/pages/Inicio';
import Entrar from './components/pages/Entrar';
import Cadastrar from './components/pages/Cadastrar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <>
        <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Inicio />} />
          <Route path='/Entrar' exact element={<Entrar />} />
          <Route path='/Cadastrar' exact element={<Cadastrar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;