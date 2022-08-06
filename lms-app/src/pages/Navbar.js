import './Nav.css'
import React, {useState} from 'react'
import {Link,Outlet} from 'react-router-dom'
import {FaBars , FaTimes} from 'react-icons/fa'

const Navbar= () =>
{
    const [icon , setIcon] = useState(false)
    const handleClick = () => {
        setIcon(!icon)
    }
    const closeSideDrawer = () => {
        setIcon(false)
    }
    return(
       <>
         <nav className='navbar'>
         <img className="photo" src={"./images/cogniwide.jpg"} />
            <Link to='/' className='nav-logo'
           onClick={closeSideDrawer} >COGNIWIDE</Link>
            <div className='menu-icon'
            onClick={handleClick}>
                {
                    icon ? <FaTimes
                     className='fa-times'></FaTimes>
                    : <FaBars 
                    className='fa-bars'></FaBars>
                }
            </div>
            <ul className={
                icon ? 'nav-menu active' :
                'nav-menu'
            }>
                <li>
                   <Link to='/' className='nav-links'
                    onClick={closeSideDrawer}> Home</Link>
                </li>
            
                <li>
                   <Link to='/about' className='nav-links'
                   onClick={closeSideDrawer}>About us</Link>   
                </li>
                <li>
                <Link to='/services' className='nav-links'
                onClick={closeSideDrawer}>Services</Link>   
                </li>
                <li>
                <Link to='/products' className='nav-links'
                onClick={closeSideDrawer}>Products</Link>   
                </li>
                <li>
                <Link to='/contactus' className='nav-links'
                onClick={closeSideDrawer}>Contact Us</Link>   
                </li>
                <li>
                <Link to='/signup' className='nav-links'
                onClick={closeSideDrawer}>Sign Up</Link>   
                </li>
            </ul>
         </nav>
         <Outlet />
       </>
    )
}


export default Navbar




