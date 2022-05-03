import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Career from './components/pages/Career';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/services' exact element={<Services />} />
      <Route path='/career' exact element={<Career />} />
      <Route path='/about' exact element={<About />} />
      <Route path='/contact' exact element={<Contact />} />

    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
