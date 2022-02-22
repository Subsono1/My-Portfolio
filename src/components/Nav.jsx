import React from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'
import './Nav.css'
import HomeIcon from '@material-ui/icons/Home';

function Nav() {
  return (
    <div>
      <nav className="header-nav">
      <Link to="projects" smooth={true} duration={2000} className="header-nav_links">
       PROJECTS 
     </Link>
     
     <Link to="about" smooth={true} duration={2000} className="header-nav_links">
       ABOUT 
     </Link >
     
     <Link to="contact" smooth={true} duration={2000} className="header-nav_links contact-me">
          CONTACT ME!
     </Link>
     <Link to="home" smooth={true} duration={2000} className="header-nav_links ">
     <HomeIcon className='home' />
     </Link>
   </nav>
    </div>
  )
}

export default Nav
