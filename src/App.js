import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import Inicio from './components/pages/Inicio';
import Entrar from './components/pages/Login/Entrar';
import Cadastrar from './components/pages/Login/Cadastrar';
import Dashboard from './components/pages/Dashboard';
import Pets from './components/pages/Pets';
import Add_Pet from './components/pages/CRUD/Add_Pet';
import Edit_Pet from './components/pages/CRUD/Edit_Pet';
import Remove_Pet from './components/pages/CRUD/Remove_Pet';
import Produto from './components/pages/Produto';
import Proposito from './components/pages/Proposito';
import Contato from './components/pages/Contato';
import Termos from './components/pages/Termos';
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
              <Route path='/Pets' exact element={<Pets />} />
              <Route path='/Add_Pet' exact element={<Add_Pet />} />
              <Route path='/Remove_Pet' exact element={<Remove_Pet />} />
              <Route path='/Edit_Pet' exact element={<Edit_Pet />} />
              <Route path='/Produto' exact element={<Produto />} />
              <Route path='/Proposito' exact element={<Proposito />} />
              <Route path='/Contato' exact element={<Contato />} />
              <Route path='/Termos' exact element={<Termos />} />
            </Routes>
          
          <Footer />
        
      </Router>
    </>
  );
}

export default App;