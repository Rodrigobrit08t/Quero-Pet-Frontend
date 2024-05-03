import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import Inicio from './components/pages/Inicio';
import Entrar from './components/pages/Login/Entrar';
import Cadastrar from './components/pages/Login/Cadastrar';
import Dashboard from './components/pages/Dashboard/Dashboard';
import User from './components/pages/User';
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
          <Route path='/Dashboard' exact element={<Dashboard />} />
          <Route path='/User' exact element={<User />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;