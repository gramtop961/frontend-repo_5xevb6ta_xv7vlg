import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ExperienceEducation from './components/ExperienceEducation'
import AchievementsContact from './components/AchievementsContact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceEducation />
      <AchievementsContact />
      <Footer />
    </div>
  )
}

export default App
