import React from 'react'
import { Container, Typography, Button } from '@mui/material'

import { styled } from '@mui/material/styles'

const TypographyP = styled('p')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 12, 
    width: '85%',
  },
  [theme.breakpoints.up('md')]: {
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
  [theme.breakpoints.up('md')]: {
    fontSize: 40, 
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 55, 
  },
}))

const ButtonResume = styled('button')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 12, 
    width: '150px',
    height: '40px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 12, 
    width: '150px',
    height: '40px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 14, 
    width: '170px',
    height: '50px',
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
    textAlign: 'right'
  }

  const typographyPB = {
    fontSize: 14, 
    fontFamily: 'Poppins',
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
    fontFamily: 'Poppins',
    textAlign: 'right'
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
    border: 'none',
    '&:hover': {
      background: '#0F0E17',
      color: '#FCFCFC',
    }
  }

  return (
    <>
      <Container componet='div' sx = {containerA}>
        <Container componet='div' sx = {containerB} >
          <TypographyP variant='paragraph' sx={typographyPA}>Hi, my name is</TypographyP>
          <TypographyH1 variant='h1' sx={typographyH1A}>Jayson Beniza</TypographyH1>
          <TypographyH1 variant='h1' sx={typographyH1B}>I do web design & development.</TypographyH1>
          <TypographyP variant='paragraph' sx={typographyPB}>I'm a passionate user interface designer who aspires to build outstanding user interface designs that meet and surpass user expectations.</TypographyP>
          <ButtonResume href='' target='' type='application/pdf' sx={viewmoreButton}> 
          {/* <Button href='https://drive.google.com/file/d/1_9ngXSAMMJzOvAbm2_Dcf5WGtXPvrpM_/view?usp=sharing' target='https://drive.google.com/file/d/1_9ngXSAMMJzOvAbm2_Dcf5WGtXPvrpM_/view?usp=sharing' type='application/pdf' sx={viewmoreButton}> */}
            {/* <FontAwesomeIcon icon={faArrowLeftLong} style={{marginRight: 14}}/> */}
            download resume
          </ButtonResume> 
        </Container>
      </Container>
    </>
  )
}

export default HeroSection