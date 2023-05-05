import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Flavours from './pages/flavours';
import Locations from './pages/locations';
import About from './pages/about';
import Contact from './pages/contact'
import './App.css';



function App() {
  return (
   
   
    <Router>
    
       
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/flavours" element={<Flavours />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    

  </Router>
  
  )
}

export default App;
