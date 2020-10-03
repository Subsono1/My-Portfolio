import React from "react";
import "./Contact.css";
import DescriptionIcon from '@material-ui/icons/Description';

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="text-div">
        <h1 className="contact-text">CONTACT ME!</h1>
      </div>

      <div className="contact-div">
        <form
          classNmae="contact-form"
          name="contact"
          action="/contact"
          method="post"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            className="contact-input"
            type="text"
            name="subject"
            placeholder="SUBJECT"
            required
          />
          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="EMAIL"
            required
          />
          <textarea
            rows="8"
            cols="250"
            type="text"
            name="message"
            placeholder="YOUR MESSAGE"
            required
          />

          <br />
          <button className="submit" type="submit">
            Submit!
          </button>
        </form>
        <br />
        <div className="contact-links">
          <div className="contact-in">
            <a
              href="https://www.linkedin.com/in/sebastianhduarte/"
              target="_blank"
            >
              <i className="devicon-linkedin-plain in"></i>
            </a>
          </div>
          <div className="contact-resume">
            <a
              href="https://drive.google.com/file/d/1m18L6hcmiTdNReiqpLiE4cjOsH7stscY/view?usp=sharing"
              target="_blank" 
            >
               <DescriptionIcon className="resume" />
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
  );
}

export default Contact;
