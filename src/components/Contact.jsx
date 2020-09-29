import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-container">
    <div className="text-div">
      <h1 className="contact-text">CONTACT ME!</h1>
    </div>
    
      <div className="contact-div">
        <form classNmae="contact-form">
          <input className="contact-input" placeholder="NAME" />
          <input className="contact-input" placeholder="EMAIL" />
          <textarea className="contact-input" placeholder="YOUR MESSAGE" />
          
          <br />
          <button className="submit" >Submit</button>
        </form>
        </div>
      </div>
    
  )
}

export default Contact
