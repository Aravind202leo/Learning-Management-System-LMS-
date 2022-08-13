import {BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Navbar from './components/pages/Navbar'
import Home from "./components/pages/home";
import About from './components/pages/about'
import Services from './components/pages/services'
import Courses from './components/pages/course'
import Contactus from './components/pages/contactus'
import Signup from './components/pages/signup'
import Coursecomponent from './components/pages/coursecomponent'

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      
        <Route   path="/" element= {<Navbar />} />
        <Route index element={<Home/> } />
        <Route path="about"  element={<About/> } />
        <Route path="services"  element={<Services/> } />
        <Route path="course" element={<Courses/>} />
        <Route path="contactus" element={<Contactus/>} />
        <Route path="signup" element={<Signup/>} />

        <Route path="/hey/:coursename" element={<Coursecomponent/>}/>
        
    </Routes>
    
      
  </Router>
  );
}

export default App;
