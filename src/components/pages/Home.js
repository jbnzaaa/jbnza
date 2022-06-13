import '../styles/style.css'
import React from 'react'
import Nav from './Nav'
import HeroSection from './HeroSection'
// import { ReactComponent as OutlineLogo } from '../img/jbnza_outline_logo.svg'

import { styled } from '@mui/material/styles'

const OutlineBG = styled('img')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    width: '1900px',
    top: '800px',
    left: '-740px',
  },
  [theme.breakpoints.up('lg')]: {
    top: '1050px',
    left: '-830px',
    width: '2500px',
  },
}))

function Home() {

  const outlineLogo = {  
    transform: 'rotate(90deg)',
    position: 'absolute',
    top: '1050px',
    left: '-830px',
    zIndex: '-1',
    width: '2800px',
    opacity: '.05',
    overflow: 'hidden',
  }

  return (
    <>
      <OutlineBG sx={outlineLogo} src={require('../img/jbnza_outline_logo.png')}/>
      <Nav/>
      {/* <NavMenu/> */}
      <HeroSection/>
    </>
  )
}

export default Home