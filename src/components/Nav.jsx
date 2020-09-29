import React from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'
import './Nav.css'

function Nav() {
  return (
    <div>
       <nav className="header-nav">
     
     <Link to="about" smooth={true} duration={2000} className="header-nav_links">
       ABOUT 
     </Link >
     <Link to="projects" smooth={true} duration={2000} className="header-nav_links">
       PROJECTS 
     </Link>
     <Link className="header-nav_links">
          CONTACT ME!
     </Link>
     <Link className="header-nav_links">
     CONTACT ME!
     </Link>
   </nav>
    </div>
  )
}

export default Nav
