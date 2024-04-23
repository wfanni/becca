import { useState } from 'react'
import './index.css'
import Menu from './components/Menu'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Features'
import Footer from './Footer'

function App() {

  return (
    <>
      <Menu />
      <Hero />
      <About />
      <Skills />
      <Footer />
    </>
  )
}

export default App
