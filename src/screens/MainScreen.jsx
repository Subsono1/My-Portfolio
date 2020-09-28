import React from 'react'
import { Switch } from 'react-router-dom'
import AboutSkills from '../components/AboutSkills'
import Header from '../components/Header'
import Projects from '../components/Projects'
import projectSource from '../utils/projectSource'

function MainScreen() {
  return (
    <div>
      <Header />

      {projectSource.map((project, i) => {
        return (
          <Projects
            data={project}
            index={i}
            key={i}/>

        )
      })}
      
      <AboutSkills />
  </div>
  )
}

export default MainScreen
