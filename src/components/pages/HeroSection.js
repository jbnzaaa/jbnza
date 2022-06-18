import React from 'react'
import { Container, Button, Box } from '@mui/material'
import { Fade } from 'react-reveal'

import { styled } from '@mui/material/styles'

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
    fontSize: 12, 
    width: '85%',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 14, 
    width: '50%',
  },
}))

const TypographyH1 = styled('h1')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 40, 
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
    alignItems: 'flex-end',
  }

  const typographyPA = {
    fontSize: 14, 
    fontFamily: 'Poppins' ,
    textAlign: 'right',
    color: '#2B2C34'
  }

  const typographyPB = {
    fontSize: 14, 
    fontFamily: 'Poppins',
    textAlign: 'right',
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
    textAlign: 'right'
  }

  const viewmoreButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    background: '#0F0E17',
    marginTop: 2,
    width: '170px',
    height: '50px',
    borderRadius: 0,
    border: 'none',
    '&:hover': {
      background: '#0F0E17',
      color: '#FCFCFC',
    }
  }

  const typographyButton = {
    color: '#FCFCFC',
    textTransform: 'lowercase',
    fontSize: 14, 
    fontFamily: 'Poppins',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <>
      <Box sx = {containerA}>
        <Container sx = {containerB} >
          <TypographyP variant='body1' sx={typographyPA}>
            <Fade bottom delay={100}>
              Hi, my name is
            </Fade>
          </TypographyP>
          <TypographyH1 variant='h1' sx={typographyH1A}>
            <Fade bottom delay={100}>
              Jayson Beniza
            </Fade>
          </TypographyH1>
          <TypographyH1 variant='h1' sx={typographyH1B}>
            <Fade bottom delay={150}>
              I do web design & development.
            </Fade>
          </TypographyH1>
          <TypographyP variant='body1' sx={typographyPB}>
            <Fade bottom delay={200}>
              I'm a passionate user interface designer who aspires to build outstanding user interface designs that meet and surpass user expectations.
            </Fade>
          </TypographyP>
          <Fade bottom delay={250}>
            <Button href='https://drive.google.com/file/d/1YpDRyiZXNb6Wmi4S1WlGx5_osaKKdjyQ/view?usp=sharing' target='https://drive.google.com/file/d/1YpDRyiZXNb6Wmi4S1WlGx5_osaKKdjyQ/view?usp=sharing' type='application/pdf' sx={viewmoreButton}> 
              {/* <FontAwesomeIcon icon={faArrowLeftLong} style={{marginRight: 14}}/> */}
              <ButtonTypography sx={typographyButton}>download resume</ButtonTypography>
            </Button> 
          </Fade>
        </Container>
      </Box>
    </>
  )
}

export default HeroSection