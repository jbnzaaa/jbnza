import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { Container, Button, Box } from '@mui/material'
import { Fade } from 'react-reveal'

import { styled } from '@mui/material/styles'
import { width } from '@mui/system'

// const HeroContainer = styled('div')(({theme}) => ({
//   [theme.breakpoints.down('md')]: {
//     display: 'flex',
//     // alignItems: 'end',
//     // paddingBottom: '100px',
//     height: '100vh',
//   },
//   [theme.breakpoints.up('lg')]: {
//     display: 'flex',
//     alignItems: 'center',
//     height: '100vh',
//   },
// }))

const TypographyP = styled('p')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 14, 
    width: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 14, 
    width: '70%',
  },
}))

const TypographyH1 = styled('h1')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 40, 
    textAlign: 'left'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 55, 
  },
}))

const ButtonTypography = styled('p')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 12, 
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 14, 
  },
}))

function HeroSection() {

  const containerA = {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
  }

  const containerB = {
    display: 'flex',  
    flexDirection: 'column', 
    alignItems: 'flex-start',
  }

  const typographyPA = {
    fontSize: 14, 
    fontFamily: 'Poppins' ,
    textAlign: 'left',
    color: '#2B2C34',
    width: '100% !important'
  }

  const typographyPB = {
    fontSize: 14, 
    fontFamily: 'Poppins',
    textAlign: 'left',
    mt: 2,
    lineHeight: 2,
    color: '#2B2C34'
  }

  const typographyH1A = {
    fontWeight: 'bold', 
    fontSize: 55, 
    fontFamily: 'Poppins',
    color: '#0F0E17',
  }

  const typographyH1B = {
    fontWeight: 'bold', 
    fontSize: 50, 
    color: '#FF8906', 
    fontFamily: 'Poppins',
    textAlign: 'right',
  }

  const buttonContainer = {
    display: 'flex',
    marginTop: '55px'
  }

  const viewmoreWork = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    background: '#0F0E17',
    width: '170px',
    height: '50px',
    borderRadius: 0,
    border: 'none',
    '&:hover': {
      background: '#0F0E17',
      color: '#FCFCFC',
    }
  }

  const typographyViewWork = {
    color: '#FCFCFC',
    textTransform: 'lowercase',
    fontSize: 14, 
    fontFamily: 'Poppins',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }

  const viewmoreResume = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    background: 'none',
    width: '170px',
    height: '50px',
    borderRadius: 0,
    border: '2px solid #0F0E17',
    marginLeft: '10px',
    '&:hover': {
      background: '#FCFCFC',
      color: '#FCFCFC',
    }
  }
  
  const typographyViewResume = {
    color: '#0F0E17',
    textTransform: 'lowercase',
    fontSize: 14, 
    fontFamily: 'Poppins',
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }

  return (
    <>
      <BrowserRouter>
        <Box sx = {containerA}>
          <Container sx = {containerB} >
            <Fade bottom delay={100}>
              <TypographyP variant='body1' sx={typographyPA}>
                  Hi, my name is
              </TypographyP>
            </Fade>
            <Fade bottom delay={100}>
              <TypographyH1 variant='h1' sx={typographyH1A}>
                  Jayson Beniza
              </TypographyH1>
            </Fade>
            <Fade bottom delay={150}>
              <TypographyH1 variant='h1' sx={typographyH1B}>
                  I do web design & development.
              </TypographyH1>
            </Fade>
            <Fade bottom delay={200}>
              <TypographyP variant='body1' sx={typographyPB}>
                  {/* I'm a passionate user interface designer based in Philippines who aspires to build outstanding user interface designs that meet and surpass user expectations. */}
                  I'm an enthusiastic user interface designer and front-end wev developer based in the Philippines. I strive to create amazing user interface designs that go above and beyond what users expect.
              </TypographyP>
            </Fade>
            <Fade bottom delay={250}>
              <Box sx={buttonContainer}>
                <Button sx={viewmoreWork}> 
                  <Link to='#projects' style={typographyViewWork}>view my work</Link>
                </Button> 
                <Button href='https://drive.google.com/file/d/1YpDRyiZXNb6Wmi4S1WlGx5_osaKKdjyQ/view?usp=sharing' target='https://drive.google.com/file/d/1YpDRyiZXNb6Wmi4S1WlGx5_osaKKdjyQ/view?usp=sharing' type='application/pdf' sx={viewmoreResume}> 
                  {/* <FontAwesomeIcon icon={faArrowLeftLong} style={{marginRight: 14}}/> */}
                  <ButtonTypography sx={typographyViewResume}>download resume</ButtonTypography>
                </Button> 
              </Box>
            </Fade>
          </Container>
        </Box>
      </BrowserRouter>
    </>
  )
}

export default HeroSection
