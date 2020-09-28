import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'



function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
     
        <Link className="header-nav_links">
          ABOUT 
        </Link >
        <Link className="header-nav_links">
          PROJECTS 
        </Link>
        <Link className="header-nav_links">
        CONTACT ME!
        </Link>
      </nav>
      <div className="header-brand_div">
        {/* <h1 className="header-brand">SD</h1> */}
        <img src={ require('../images/SD.png')} alt="logo-initials" className="header-brand">

        </img>
      
      </div>
      
      <div className="header-text_box">
        <h1 className="my-name">SEBASTIAN DUARTE</h1>
        <h3 className="description">Full-stack Software Engineer</h3>
      </div>
    </header>
   
  )
}

export default Header
