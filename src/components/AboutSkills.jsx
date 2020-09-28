import React from "react";
import "./AboutSkills.css";

function AboutSkills() {
  return (
    <div>
      <div className="description-div">
        <h1 className="about-me">About Me</h1>
        
        <p className="brand-statement">
          Software engineer with a long experience in the performing arts
          industry who values creativity and self-driven results. Passionate
          about developing new solutions and products, I believe honesty and
          communication drive success in work and life. I've invested in
          learning programming to create innovative applications, and look
          forward to my next challenge.
        </p>
        
      </div>
      <h1 className="icon-title">Known Technologies</h1>
      <div className='skills-main-div'>
      <div className='skills-div'>
        <div className="icon-div">
          <i className="devicon-html5-plain-wordmark colored tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-css3-plain-wordmark colored tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-javascript-plain colored tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-react-original-wordmark colored tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-rails-plain-wordmark colored tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-ruby-plain-wordmark colored tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-nodejs-plain-wordmark colored tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-express-original colored tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-mongodb-plain-wordmark colored tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-postgresql-plain-wordmark colored tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-git-plain-wordmark colored tech-icon"></i>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AboutSkills;
