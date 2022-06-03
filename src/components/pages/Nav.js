import React from 'react'
import { ReactComponent as Logo } from '../img/jbnza_initial_logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faBehance, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Container, AppBar, Link, List, IconButton } from '@mui/material';

function Nav() {

  const appBar = {
    p: 2, 
    boxShadow: 0
  }

  const container = {
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  }

  const navListLink = {
    display: 'flex', 
    justifyContent: 'space-between' 
  }

  const navLink = {
    mx: 2, 
    fontSize: 14, 
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
      <AppBar position='static' color='transparent' sx={appBar}>
        <Container componet='div' sx={container}>
          <Link href="#">
            <Logo style={{ width: '50px' }}/>
          </Link>
          <List componet='div' sx={navListLink}>
            <Link href="#" sx={navLink}>About</Link>
            <Link href="#" sx={navLink}>Projects</Link>
            <Link href="#" sx={navLink}>Contact</Link>
          </List>
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
        </Container>
      </AppBar>
    </>
  )
}

export default Nav