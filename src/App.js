import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';


import Header from './components/Header/header';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Fiche from './pages/Fiche';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/fiche" element={<Fiche />} />
      </Routes>
    </div>
  );
}

export default App;
