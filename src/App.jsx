
// import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Drinks from './components/Pages/Drinks';
import Recipe from './components/Pages/Recipe';

import { useState } from 'react'

import Recipe from './components/Pages/Recipe'
import Home from './components/Pages/Home'


function App() {
  return (

    <div> 
      <Router>
        <div>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe" element={<Recipe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/drinks" element={<Drinks />} />
          </Routes>
        </div>
      </Router>

      <h1>flavour finder</h1>
    <div>
      < Home />


    </div>
  );
}

export default App;
