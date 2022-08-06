 import React from 'react'
import './App.css'
import {BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from "./pages/home";
import About from './pages/about'
import Services from './pages/services'
import Products from './pages/products'
import Contactus from './pages/contactus'
import Signup from './pages/signup'

export default function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        
          <Route  path="/" element= {<Navbar />} />
          <Route index element={<Home/> } />
          <Route path="about"  element={<About/> } />
          <Route path="services"  element={<Services/> } />
          <Route path="products" element={<Products/>} />
          <Route path="contactus" element={<Contactus/>} />
          <Route path="signup" element={<Signup/>} />
          
      </Routes>
      
        
    </Router>
  );
}
 





