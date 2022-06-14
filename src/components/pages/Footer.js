import React from 'react'
import { Fade } from 'react-reveal';
import { Container, Box, Typography, List, IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faBehance, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

import { styled } from '@mui/material/styles'

const NavFooter = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    height: '25vh',
    width: '100%',
    padding: '40px 0'
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: '20vh',
    width: '100%'
  },
}))

const TypographyP = styled('p')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '12px'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '14px'
  },
}))

const FooterBox = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    // background: 'red',
    marginBottom: '30px'
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    alignItems: 'center',
  },
}))

function Footer() {

  const boxA = {
    background: '#010104',
  }

  // const boxB = {
  //   display: 'flex',
  //   alignItems: 'center',
  // }

  const container = {
    height: '20vh',
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
    mx: 1/3,
    fontSize: 17,
    '&:hover': {
      background: '#FCFCFC',
      color: '#0F0E17'
    }
  }

  const footerIcon = {
    color: '#FCFCFC',
    fontSize: 20,
    display: 'flex',
    marginRight: '10px'
  }

  return (
    <>
      <Box sx={boxA}>
        <Container>
          <NavFooter sx={container}>
            <Fade bottom delay={100}>
              <TypographyP sx={typographyFooter}>&copy; 2022 Jayson Beniza</TypographyP>
              <FooterBox>
                <List componet='div' sx = {footerList}>
                  <Typography sx={typographyFooter}>jbnzaaa@gmail.com</Typography>
                  <Box>
                    <FontAwesomeIcon icon={faMinus} style={footerIcon}/>
                  </Box>
                  <IconButton href='https://www.facebook.com/jbnzaaa' target='https://www.facebook.com/jbnzaaa' sx={footerButton}>
                    <FontAwesomeIcon icon={faFacebook} sx={footerIcon}/>
                  </IconButton>
                  <IconButton href='https://www.instagram.com/jbnza_/?hl=en' target='https://www.instagram.com/jbnza_/?hl=en' sx={footerButton}>
                    <FontAwesomeIcon icon={faInstagram} sx={footerIcon}/>
                  </IconButton>
                  <IconButton href='https://github.com/jbnzaaa' target='https://github.com/jbnzaaa' sx={footerButton}>
                    <FontAwesomeIcon icon={faGithub} sx={footerIcon}/>
                  </IconButton>
                  <IconButton href='https://www.behance.net/jbnza' target='https://www.behance.net/jbnza' sx={footerButton}>
                    <FontAwesomeIcon icon={faBehance} sx={footerIcon}/>
                  </IconButton>
                  <IconButton href='https://www.linkedin.com/in/jaybeniza/' target='https://www.linkedin.com/in/jaybeniza/' sx={footerButton}>
                    <FontAwesomeIcon icon={faLinkedinIn} sx={footerIcon}/>
                  </IconButton>
                </List>
              </FooterBox>
            </Fade>
          </NavFooter>
        </Container>
      </Box>
    </>
  )
}

export default Footer