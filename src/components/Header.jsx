import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'



function Header() {
  return (
    <header className="header">
     
      <div className="header-brand_div">
       <h1 className="header-brand">SD</h1>
      
      </div>
      
      <div className="header-text_box">
        <h1 className="my-name">SEBASTIAN DUARTE</h1>
        <h3 className="description">Full-stack Software Engineer</h3>
      </div>
    </header>
   
  )
}

export default Header
