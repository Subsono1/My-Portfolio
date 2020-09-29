import React from "react";
import "./AboutSkills.css";

function AboutSkills() {
  return (
    <div className="about-skills-div">
      <div className="description-div" id="about">
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
      <div className="icon-title-div">
        <h1 className="icon-title">Known Technologies</h1>
        </div>
      <div className='skills-main-div'>
      <div className='skills-div'>
        <div className="icon-div">
          <i className="devicon-html5-plain-wordmark  tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-css3-plain-wordmark  tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-javascript-plain  tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-react-original-wordmark tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-rails-plain-wordmark  tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-ruby-plain-wordmark  tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-nodejs-plain-wordmark  tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-express-original  tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-mongodb-plain-wordmark  tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-postgresql-plain-wordmark  tech-icon"></i>
        </div>
        <div className="icon-div">
          <i className="devicon-git-plain-wordmark  tech-icon"></i>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AboutSkills;
