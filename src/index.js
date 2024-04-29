import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import NavBar from './NavBar.js';
import Section1 from './Section1.js';
import Cards from './Section2.js';
import Footer from './Footer.js';


console.log("oye kithe chale")


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Section1 />
    <Cards />
    <Footer />
  </React.StrictMode>
);


