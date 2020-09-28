import React from 'react'
import { Switch } from 'react-router-dom'
import AboutSkills from '../components/AboutSkills'
import Header from '../components/Header'

function MainScreen() {
  return (
    <div>
      <Header />
      <AboutSkills />
  </div>
  )
}

export default MainScreen
