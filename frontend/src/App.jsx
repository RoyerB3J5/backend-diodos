import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import Header from './components/Header';
import Footer from './sections/Footer';

function App() {

  const location = useLocation();

  return (
    <>
      <Header location={location}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogue />} />
      </Routes>
    </>
    
  );
}

export default App;
