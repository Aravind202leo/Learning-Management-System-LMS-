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
        
          <Route  path="/"  component={< Navbar />} />
          <Route index component={<Home/> } />
          <Route path="/about" component={<About/> } />
          <Route path="services" component={<Services/> } />
          <Route path="products" component={<Products/>} />
          <Route path="contactus" component={<Contactus/>} />
          <Route path="signup" component={<Signup/>} />
          
      </Routes>
      
        
    </Router>
  );
}
 





