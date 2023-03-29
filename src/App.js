import React from 'react';
import { Routes, Route } from 'react-router-dom';




import Header from './components/Header/header';
import Footer from './components/Footer/footer';
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
        <Route path="/logement/:id" element={<Fiche />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
