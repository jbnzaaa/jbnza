import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { ReactComponent as Logo } from '../img/jbnza_initial_logo_dark.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faBehance, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Container, AppBar, List, IconButton } from '@mui/material'

import { styled } from '@mui/material/styles'

const NavListLink = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none', 
  },
  [theme.breakpoints.up('lg')]: {
    display: 'block'
  },
}))

const NavSocialLink = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  [theme.breakpoints.up('lg')]: {
    display: 'block'
  },
}))

function Nav() {

  const appBar = {  
    p: 1, 
    boxShadow: 0,
    background: '#FCFCFC'
  }

  const container = {
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  }

  const navListLink = {
    display: 'flex', 
    justifyContent: 'space-between',
    width: '280px',
  }

  const navLink = {
    mx: 2,
    fontSize: 14, 
    fontWeight: 600,
    textDecoration: 'none', 
    color: '#0F0E17',
  }

  const navLinkSocial = {
    display: 'flex',
    alignItems: 'center',
  }

  const navButton = {
    color: '#0F0E17',
    mx: 1/3,
    fontSize: 17,
    '&:hover': {
      background: '#0F0E17',
      color: '#fcfcfc'
    }
  }

  return (
    <>
      <BrowserRouter>
        <AppBar sx={appBar}>
          <Container componet='div' sx={container}>
            <Link to="#">
              <Logo style={{ width: '50px', display: 'flex', alignItems: 'center'}}/>
            </Link>
            <NavListLink>
              <List componet='div' sx={navListLink}>
                <Link to='#' style={navLink}>Home</Link>
                <Link to='#projects' style={navLink}>Projects</Link>
                <Link to='#about' style={navLink}>About</Link>
                <Link to='#contact' style={navLink}>Contact</Link>
              </List>
            </NavListLink>
            <NavSocialLink>
              <List componet='div' sx={navLinkSocial} >
                <IconButton href='https://github.com/jbnzaaa' target='https://github.com/jbnzaaa' sx={navButton}>
                  <FontAwesomeIcon icon={faGithub} />
                </IconButton>
                <IconButton href='https://www.behance.net/jbnza' target='https://www.behance.net/jbnza' sx={navButton}>
                  <FontAwesomeIcon icon={faBehance} />
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/jaybeniza/' target='https://www.linkedin.com/in/jaybeniza/' sx={navButton}>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </IconButton>
              </List>
            </NavSocialLink>
          </Container>
        </AppBar>
      </BrowserRouter>
    </>
  )
}

export default Nav