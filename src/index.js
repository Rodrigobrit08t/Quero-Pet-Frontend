import React from 'react';
import ReactDOM from 'react-dom';
import About from './screens/About.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <About />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
