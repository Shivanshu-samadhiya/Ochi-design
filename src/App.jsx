import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Card from './components/Card'
import Fotter from './components/Fotter'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' text-white  w-full min-h-screen bg-zinc-900'>
      <Navbar/>
      <Landingpage/>
      <Marque/>
      <About/>
      <Eyes/>
      <Featured/>
      <Card/>
      <Fotter/>
    </div>
  )
}

export default App