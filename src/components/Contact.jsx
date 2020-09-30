import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-container" id="contact">
    <div className="text-div">
      <h1 className="contact-text">CONTACT ME!</h1>
    </div>
    
      <div className="contact-div">
        <form classNmae="contact-form">
          <input className="contact-input" type="name" placeholder="NAME" required />
          <input className="contact-input"type="email" placeholder="EMAIL" required />
          <textarea  rows="8" cols="250" type="text" placeholder="YOUR MESSAGE" required />
          
          <br />
          <button className="submit" >Submit</button>
        </form>
        <br />
        <div className="contact-links">
        <div className="contact-in">
          <a href="https://www.linkedin.com/in/sebastianhduarte/" target="_blank">
            <i className="devicon-linkedin-plain colored in"></i>
          </a>
        </div>
        <div className="contact-github">
          <a href="https://github.com/Subsono1" target="_blank">
            <i className="devicon-github-plain colored git"></i>
            </a>
        </div>
        </div>
        </div>
      </div>
    
  )
}

export default Contact
