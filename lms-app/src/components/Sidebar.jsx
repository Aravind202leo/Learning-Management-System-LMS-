import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import {Link} from 'react-router-dom'
const sidebar = ()  => {
    return <main className='space-toggle'>
        <header className='header-space-toggle'>
            
            <div className='header-toggle'>
            <MenuIcon />
            </div>
        </header>
        <aside className='sidebar show'>
            <nav className='nav'>
                <div>
                    <Link to='/mod1' className='navi-logo'>
                    <PlayLessonIcon />
                    <span className='nav-link-name'>MODULE 1</span>
                    </Link>
                </div>
                <div  className='nav-list'>
                    <Link to='/mod2' className='navi-link'>
                    <PlayLessonIcon />
                    <span className='nav-link-name'>MODULE 2</span>
                    </Link>
                </div>
                <div  className='nav-list'>
                    <Link to='/mod3' className='navi-link'>
                    <PlayLessonIcon />
                    <span className='nav-link-name'>MODULE 3</span>
                    </Link>
                </div>
                
                <div  className='nav-list'>
                    <Link to='/mod4' className='navi-link'>
                    <PlayLessonIcon />
                    <span className='nav-link-name'>MODULE 4</span>
                    
                    </Link>
                </div>
                <div  className='nav-list'>
                    <Link to='/mod5' className='navi-link'>
                    <PlayLessonIcon />
                    <span className='nav-link-name'>MODULE 5</span>
                    </Link>
                </div>
                <div  className='nav-list'>
                    <Link to='/mod6' className='navi-link'>
                    <PlayLessonIcon />
                    <span className='nav-link-name'>MODULE 6</span>
                    </Link>
                </div>
            </nav>
        </aside>
    </main>
}


export default sidebar































/*import React, { useState } from 'react';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import { NavLink } from 'react-router-dom';

import { 
    FaBars}from "react-icons/fa";

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Module1",
            icon:<PlayLessonIcon  />
        },
        {
            path:"/mod2",
            name:"Module2",
            icon:<PlayLessonIcon  />
        },
        {
            path:"/mod3",
            name:"Module3",
            icon:<PlayLessonIcon />
        },
        {
            path:"/mod4",
            name:"Module4",
            icon:<PlayLessonIcon  />
        },
        {
            path:"/mod5",
            name:"Module5",
            icon:<PlayLessonIcon />
        },
        {
            path:"/mod6",
            name:"Module6",
            icon:<PlayLessonIcon  />
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">COURSE</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
*/












/*import "./sidebar.css"
import {Link,Outlet} from 'react-router-dom'
import PlayLessonIcon from '@mui/icons-material/PlayLesson';

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarWrapper">
             <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem">
                         <PlayLessonIcon className="sidebarIcon" />
                         Module 1
                    </li>
                    <li className="sidebarListItem">
                         <PlayLessonIcon className="sidebarIcon" />
                         Module 2
                    </li>
                    <li className="sidebarListItem">
                         <PlayLessonIcon className="sidebarIcon" />
                         Module 3
                    </li>
                    <li className="sidebarListItem">
                         <PlayLessonIcon className="sidebarIcon" />
                         Module 4
                    </li>
                    <li className="sidebarListItem">
                         <PlayLessonIcon className="sidebarIcon" />
                         Module 5
                    </li>
                    <li className="sidebarListItem">
                         <PlayLessonIcon className="sidebarIcon" />
                         Module 6
                    </li>
                    <li className="sidebarListItem">
                         <PlayLessonIcon className="sidebarIcon" />
                         Module 7
                    </li>
                    <li className="sidebarListItem">
                         <PlayLessonIcon className="sidebarIcon" />
                         Module 8
                    </li>
                    <li className="sidebarListItem">
                         <PlayLessonIcon className="sidebarIcon" />
                         Module 9
                    </li>
                    <li className="sidebarListItem">
                         <PlayLessonIcon className="sidebarIcon" />
                         Module 10
                    </li>

                </ul>
             </div>
           </div>
        </div>
    )
}
*/