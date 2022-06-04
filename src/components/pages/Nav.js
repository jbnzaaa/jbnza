import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { ReactComponent as Logo } from '../img/jbnza_initial_logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faBehance, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Container, AppBar, List, IconButton } from '@mui/material';

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  link: {
    color: 'white',
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '-3px',
      left: '-10%',
      transform: 'translate(-0%,0%)',
      backgroundColor: '#0F0E17',
      transformOrigin: 'center',
      visibility: 'hidden',
      transition: 'all 0.2s ease',
    },
    '&:hover:before': {
      visibility: 'visible',
      width: '120%',
    }
  },

})

function Nav() {

  const appBar = {
    p: 2/2, 
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
    width: '25%',
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

  const classes = useStyles()

  return (
    <>
      <BrowserRouter>
        <AppBar position='sticky' color='transparent' sx={appBar}>
          <Container componet='div' sx={container}>
            <Link to="#">
              <Logo style={{ width: '50px' }}/>
            </Link>
            <List componet='div' sx={navListLink}>
              <Link to='#' style={navLink} className={classes.link}>Home</Link>
              <Link to='#projects' style={navLink} className={classes.link}>Projects</Link>
              <Link to='#about' style={navLink} className={classes.link}>About</Link>
              <Link to='#contact' style={navLink} className={classes.link}>Contact</Link>
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
      </BrowserRouter>
    </>
  )
}

export default Nav