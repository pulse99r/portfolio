import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/pages/Home'
import Services from './components/pages/services'
import Resume from './components/pages/resume'


function App() {

  return (
    <div className='app'>
      <Nav />
      <Home/>
      {/* <Services /> */}
      <Resume />

    </div>
  )
}

export default App
