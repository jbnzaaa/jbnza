import React from 'react'
import { Container, Typography, Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function HeroSection() {
  return (
    <>
      <Container 
        componet='div' 
        sx = {{ 
          display: 'flex',
          alignItems: 'center',
          height: '95vh',
        }}
      >
        <Container
          componet='div' 
          sx = {{ 
            display: 'flex',  
            flexDirection: 'column', 
            alignItems: 'flex-end'
          }}
        >
          <Typography 
            variant='paragraph' 
            sx={{ 
              fontSize: 14, 
              fontFamily: 'Poppins' 
            }}
          >
            Hi, my name is
          </Typography>
          <Typography 
            variant='h1' 
            sx={{ 
              fontWeight: 'bold', 
              fontSize: 55, 
              fontFamily: 'Poppins' 
            }}
          >
            Jayson Beniza
          </Typography>
          <Typography 
            variant='h1' 
            sx={{ 
              fontWeight: 'bold', 
              fontSize: 50, 
              color: '#FF8906', 
              fontFamily: 'Poppins' 
            }}
          >
            I do web design & development.
          </Typography>
          <Typography 
            variant='paragraph' 
            sx={{ 
              fontSize: 14, 
              fontFamily: 'Poppins',
              width: '50%',
              textAlign: 'right',
              mt: 2,
              lineHeight: 2
            }}
          >
            I'm a passionate user interface designer who aspires to build outstanding user interface designs that meet and surpass user expectations.
          </Typography>
          <Button
            variant='contained'
            style={{
              background: '#0F0E17',
              color: '#FCFCFC',
              textTransform: 'lowercase',
              fontSize: 14, 
              fontFamily: 'Poppins',
              marginTop: 20,
              width: '170px',
              height: '50px',
              borderRadius: 0
            }}
          >
            view more
            <FontAwesomeIcon 
              icon={faArrowRightLong} 
              style={{ 
                marginLeft: 14
              }}
            />
          </Button>
        </Container>
      </Container>
    </>
  )
}

export default HeroSection