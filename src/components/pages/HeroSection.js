import React from 'react'
import { Container, Typography, Button } from '@mui/material'

function HeroSection() {

  const containerA = {
    display: 'flex',
    alignItems: 'center',
    height: '95vh',
  }

  const containerB = {
    display: 'flex',  
    flexDirection: 'column', 
    alignItems: 'flex-end'
  }

  const typographyPA = {
    fontSize: 14, 
    fontFamily: 'Poppins' 
  }

  const typographyPB = {
    fontSize: 14, 
    fontFamily: 'Poppins',
    width: '50%',
    textAlign: 'right',
    mt: 2,
    lineHeight: 2
  }

  const typographyH1A = {
    fontWeight: 'bold', 
    fontSize: 55, 
    fontFamily: 'Poppins' 
  }

  const typographyH1B = {
    fontWeight: 'bold', 
    fontSize: 50, 
    color: '#FF8906', 
    fontFamily: 'Poppins'
  }

  const viewmoreButton = {
    background: '#0F0E17',
    color: '#FCFCFC',
    textTransform: 'lowercase',
    fontSize: 14, 
    fontFamily: 'Poppins',
    marginTop: 2,
    width: '170px',
    height: '50px',
    borderRadius: 0,
    '&:hover': {
      background: '#0F0E17',
      // color: '#FCFCFC'
    }
  }

  return (
    <>
      <Container componet='div' sx = {containerA}>
        <Container componet='div' sx = {containerB} >
          <Typography variant='paragraph' sx={typographyPA}>Hi, my name is</Typography>
          <Typography variant='h1' sx={typographyH1A}>Jayson Beniza</Typography>
          <Typography variant='h1' sx={typographyH1B}>I do web design & development.</Typography>
          <Typography variant='paragraph' sx={typographyPB}>I'm a passionate user interface designer who aspires to build outstanding user interface designs that meet and surpass user expectations.</Typography>
          <Button href='https://drive.google.com/file/d/1_9ngXSAMMJzOvAbm2_Dcf5WGtXPvrpM_/view?usp=sharing' target='https://drive.google.com/file/d/1_9ngXSAMMJzOvAbm2_Dcf5WGtXPvrpM_/view?usp=sharing' type='application/pdf' sx={viewmoreButton}>
            {/* <FontAwesomeIcon icon={faArrowLeftLong} style={{marginRight: 14}}/> */}
            download resume
          </Button>
        </Container>
      </Container>
    </>
  )
}

export default HeroSection