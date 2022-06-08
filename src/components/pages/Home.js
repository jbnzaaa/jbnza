import '../styles/style.css'
import React from 'react'
import Nav from './Nav'
import HeroSection from './HeroSection'
import { ReactComponent as OutlineLogo } from '../img/jbnza_outline_logo.svg'

function Home() {
  return (
    <>
      {/* <OutlineLogo id="outline_logo"/> */}
      <Nav/>
      <HeroSection/>
    </>
  )
}

export default Home