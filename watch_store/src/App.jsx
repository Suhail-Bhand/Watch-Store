import React from 'react'
import './App.css'
import Navbar from './components/Navnar/Navbar'
import Hero from './components/Hero/Hero'
const App = () => {
  return (
    <div className='app'>
          <Navbar />
          <Hero />
    </div>
  )
}

export default App