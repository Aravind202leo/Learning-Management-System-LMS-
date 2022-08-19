import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar'
import Home from "./pages/home";
import About from './pages/about'
import Services from './pages/services'
import Products from './pages/products'
import Contactus from './pages/contactus'
import Signup from './pages/signup'
import Sidebar from './components/Sidebar';
import Module1 from './pages/mod1.jsx';
import Module2 from './pages/mod2.jsx';
import Module3 from './pages/mod3.jsx';
import Module4 from './pages/mod4.jsx';
import Module5 from './pages/mod5.jsx';
import Module6 from './pages/mod6.jsx';
const App = () => {
 
  return (
    
    <BrowserRouter>
     <Navbar />
      <Routes>
        
          <Route  path="/" element= {<Navbar />} />
          <Route index element={<Home/> } />
          <Route path="about"  element={<About/> } />
          <Route path="services"  element={<Services />} />
          <Route path="products" element={<Products/>} />
          <Route path="contactus" element={<Contactus/>} />
          <Route path="signup" element={<Signup/>} />
          
      </Routes>
      <Sidebar >
        <Routes>
          <Route path="/" element={<Module1 />} />
          <Route path="/mod1" element={<Module1/>} />
          <Route path="/mod2" element={<Module2 />} />
          <Route path="/mod3" element={<Module3/>} />
          <Route path="/mod4" element={<Module4 />} />
          <Route path="/mod5" element={<Module5 />} />
          <Route path="/mod6" element={<Module6 />} />
        </Routes>
      </Sidebar>
     
      
    </BrowserRouter>
    
  );
};

export default App;











/*
import React from "react";
import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar";
import "./App.css"

function App()
{
    return (
    <div >
       <Topbar />
       <div className="container">
        <Sidebar />
      
       <div className="others">
        
       </div>

</div>
    </div>
    );
}

export default App;
*/