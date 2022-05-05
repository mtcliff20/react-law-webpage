import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/Pages/Services';
import Career from './components/Pages/Career';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
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
