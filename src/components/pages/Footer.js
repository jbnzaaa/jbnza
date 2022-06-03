import React from 'react'
import { Container, Box, Typography, List, Link, IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faBehance, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

function Footer() {

  const boxA = {
    background: '#010104',
  }

  const boxB = {
    display: 'flex',
    alignItems: 'center',
  }

  const container = {
    height: '15vh',
    color: '#FCFCFC',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const typographyFooter = {
    fontFamily: 'Poppins',
    fontSize: 12,
    marginRight: 2/1
  }

  const footerList = {
    display: 'flex',
    alignItems: 'center',
  }

  const footerButton = {
    color: '#FCFCFC',
    mx: 1,
    fontSize: 17,
    '&:hover': {
      background: '#FCFCFC',
      color: '#0F0E17'
    }
  }

  const footerIcon = {
    color: '#0F0E17', 
    fontSize: 20,
    color: '#FCFCFC',
    display: 'flex',
  }

  return (
    <>
      <Box sx={boxA}>
        <Container sx={container}>
          <Box sx={boxB}>
            <Typography sx={typographyFooter}>&copy; 2022 Jayson Beniza</Typography>
          </Box>
          <Box>
            <List componet='div'  sx = {footerList}>
              <Typography sx={typographyFooter}>jbnzaaa@gmail.com</Typography>
              <FontAwesomeIcon icon={faMinus} style={footerIcon}/>
              <IconButton href='https://www.facebook.com/jbnzaaa' target='https://www.facebook.com/jbnzaaa' sx={footerButton}>
                <FontAwesomeIcon icon={faFacebook} sx={footerIcon}/>
              </IconButton>
              <IconButton href='https://www.instagram.com/jbnza_/?hl=en' target='https://www.instagram.com/jbnza_/?hl=en' sx={footerButton}>
                <FontAwesomeIcon icon={faInstagram} sx={footerIcon}/>
              </IconButton>
              <IconButton href='https://www.behance.net/jbnza' target='https://www.behance.net/jbnza' sx={footerButton}>
                <FontAwesomeIcon icon={faGithub} sx={footerIcon}/>
              </IconButton>
              <IconButton href='https://github.com/jbnzaaa' target='https://github.com/jbnzaaa' sx={footerButton}>
                <FontAwesomeIcon icon={faBehance} sx={footerIcon}/>
              </IconButton>
              <IconButton href='https://www.linkedin.com/in/jaybeniza/' target='https://www.linkedin.com/in/jaybeniza/' sx={footerButton}>
                <FontAwesomeIcon icon={faLinkedinIn} sx={footerIcon}/>
              </IconButton>
            </List>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Footer