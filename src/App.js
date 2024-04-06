import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <>
        <Router>
            <NavBar>
                <Routes>
                    <Route path='/' exact></Route>
                </Routes>
            </NavBar>
        </Router>
    </>
  );
}

export default App;