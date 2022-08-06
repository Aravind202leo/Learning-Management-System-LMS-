import './App.css';
import {BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Navbar from './components/pages/Navbar'
import Home from "./components/pages/home";
import About from './components/pages/about'
import Services from './components/pages/services'
import Products from './components/pages/products'
import Contactus from './components/pages/contactus'
import Signup from './components/pages/signup'

function App() {
  return (
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

export default App;
