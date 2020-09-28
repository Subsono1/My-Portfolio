import React from 'react'
import LanguageIcon from '@material-ui/icons/Language';



function Projects(props) {
  const {data}=props
  return (
    <div>
      <div>
      <h1>{data.name}</h1>
        <p>{data.description}</p>
        </div>
      <div>
        <img src={data.image} alt="website-image" />
        </div>
      <h3>Used to Build</h3>
      <div>
      {data.icons.map((icon, i) => {
        return <i key={i} className={`${icon} project-icons`}></i>
      })}
        </div>
       <div>
      <a href={data.github} target="_blank">
        <i class="devicon-github-plain-wordmark colored github"></i>Source
      </a>
      </div>
      <div>
        <a href={data.live} target="_blank" > <LanguageIcon />Live</a>
        </div>
      
      

      
    </div>
  )
}

export default Projects
