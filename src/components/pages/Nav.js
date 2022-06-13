import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { Fade } from 'react-reveal'
import { ReactComponent as InitialLogo } from '../img/jbnza_initial_logo_dark.svg'
import { ReactComponent as FullNameLogo } from '../img/jbnza_full_logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faBehance, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { Container, AppBar, List, IconButton, Box, Drawer, ListItem, Typography } from '@mui/material'

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

const NavMenu = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none'
  },
}))

function Nav() {

  const [state, setState] = React.useState({
    top: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open })
  }

  const appBar = {  
    py: 1, 
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

  const navMenuLink = {
    fontSize: 18, 
    fontWeight: 600,
    textDecoration: 'none', 
    color: '#0F0E17',
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
  }

  const navLinkSocial = {
    display: 'flex',
    alignItems: 'center',
  }

  const navButton = {
    color: '#0F0E17',
    mx: 1/3,
    fontSize: 17,
    height: '33px',
    width: '33px',
    '&:hover': {
      background: '#0F0E17',
      color: '#fcfcfc'
    }
  }

  const typographyFooter = {
    fontFamily: 'Poppins',
    fontSize: 12,
    marginRight: 2/1
  }

  const navMenuList = {
    height: "100vh", 
    padding: '0', 
    display: 'flex', 
    justifyContent: 'space-between',
  }

  const listItemLogo = {
    display: "flex", 
    justifyContent: 'space-between', 
    flexDirection: "row", 
    padding: '8px 0'
  }
  
  const listItemLinks = {
    display: "flex", 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: "column", 
    height: '70vh'
  }

  const listItemSocial = {
    display: "flex", 
    flexDirection: "column-reverse", 
    justifyContent: 'end', 
    alignItems: 'center', 
    height: '20vh'
  }

  return (
    <>
      <BrowserRouter>
        <AppBar sx={appBar}>
          <Container componet='div' sx={container}>
            <Link to="#">
              <InitialLogo style={{ width: '50px', display: 'flex', alignItems: 'center'}}/>
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
            <NavMenu>
              {["top"].map((anchor) => (
                <Box key={anchor}>
                  <IconButton onClick={toggleDrawer(anchor, true)} sx={navButton}>
                    <FontAwesomeIcon icon={faBars} />
                  </IconButton>
                  <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} >
                    <Fade top>
                      <Box role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} >
                        <List sx={navMenuList}>
                          <Container>
                            <ListItem sx={listItemLogo} disablePadding >
                              <Link to="#">
                                <FullNameLogo style={{ width: '120px', display: 'flex', alignItems: 'center'}}/>
                              </Link>
                              <IconButton sx={navButton}>
                                <FontAwesomeIcon icon={faX} />
                              </IconButton>
                            </ListItem>

                            <ListItem sx={listItemLinks} disablePadding >
                              <Link to='#' style={navMenuLink}>Home</Link>
                              <Link to='#projects' style={navMenuLink}>Projects</Link>
                              <Link to='#about' style={navMenuLink}>About</Link>
                              <Link to='#contact' style={navMenuLink}>Contact</Link>
                            </ListItem>
                            
                            <ListItem sx={listItemSocial} disablePadding >
                              <Typography sx={typographyFooter}>&copy; 2022 Jayson Beniza</Typography>
                              <Box sx={{paddingBottom: '10px'}}>
                                <IconButton href='https://www.facebook.com/jbnzaaa' target='https://www.facebook.com/jbnzaaa' sx={navButton}>
                                  <FontAwesomeIcon icon={faFacebook}/>
                                </IconButton>
                                <IconButton href='https://www.instagram.com/jbnza_/?hl=en' target='https://www.instagram.com/jbnza_/?hl=en' sx={navButton}>
                                  <FontAwesomeIcon icon={faInstagram}/>
                                </IconButton>
                                <IconButton href='https://www.behance.net/jbnza' target='https://www.behance.net/jbnza' sx={navButton}>
                                  <FontAwesomeIcon icon={faGithub}/>
                                </IconButton>
                                <IconButton href='https://github.com/jbnzaaa' target='https://github.com/jbnzaaa' sx={navButton}>
                                  <FontAwesomeIcon icon={faBehance}/>
                                </IconButton>
                                <IconButton href='https://www.linkedin.com/in/jaybeniza/' target='https://www.linkedin.com/in/jaybeniza/' sx={navButton}>
                                  <FontAwesomeIcon icon={faLinkedinIn}/>
                                </IconButton>
                              </Box>
                            </ListItem>
                          </Container>
                        </List>
                      </Box>
                    </Fade>
                  </Drawer>
                </Box>
              ))}
            </NavMenu>
          </Container>
        </AppBar>
      </BrowserRouter>
    </>
  )
}

export default Nav