import React from 'react'
import { Switch } from 'react-router-dom'
import AboutSkills from '../components/AboutSkills'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Portfolio from '../components/Portfolio'
import Projects from '../components/Projects'
import projectSource from '../utils/projectSource'

function MainScreen() {
  return (
    <div>
      <Nav />
      <Header />
      <Portfolio />

      {projectSource.map((project, i) => {
        return (
          <Projects
            data={project}
            index={i}
            key={i}/>

        )
      })}
      
      <AboutSkills />
      <Contact />
  </div>
  )
}

export default MainScreen
