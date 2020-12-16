import React from 'react'
import LanguageIcon from '@material-ui/icons/Language';
import './Project.css'
import Modal from "./Modal";

import styled, { keyframes } from 'styled-components';
import { fadeInRight} from 'react-animations';
 
const fadeIn = keyframes`${fadeInRight}`;
 
const FadeDiv = styled.div`
  animation: 3s ${fadeIn};
`;



function Projects(props) {
  const {data}=props
  return (
    
   
    <div className="projects-container_div" >
      
      <div  className="name-desciption_div">
      <h1 className="project-name">{data.name}</h1>
        <p className="project-description">{data.description}</p>
       
        </div>
      <FadeDiv className="website-image_div">
        <img src={data.image} alt="website-image" className="website-image" />
        </FadeDiv>
        <div className="build-with-div">
      
      
      <div className="project-icons-div">
      {data.icons.map((icon, i) => {
        return <i key={i} className={`${icon} project-icon`}></i>
      })}
          </div>
          
        <div className="project-buttons-div">
          <div className="project-button">
      <a href={data.github} target="_blank">
        <i class="devicon-github-plain  github"></i>
            </a>
            <p className="githubP">Github</p>
            </div>
          <div className="project-button">
           
            <a href={data.live} target="_blank"  > <LanguageIcon className="live" /></a>
            <p className="liveP">Live</p>
        </div>
          </div>
        </div>
      
      

      
      </div>
      
  )
}

export default Projects
