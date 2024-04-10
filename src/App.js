import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Inicio from './components/pages/Inicio';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <>
        <Router>
            <NavBar>
                <Routes>
                    <Route path='/' exact component={Inicio}></Route>
                </Routes>
            </NavBar>
        </Router>
    </>
  );
}

export default App;