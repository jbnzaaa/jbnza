import React from 'react'
import { Container, Box, Typography, TextField, Button } from '@mui/material'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GrSend } from 'react-icons/gr'

const theme = createTheme({
  palette: {
    neutral: {
      main: "#FCFCFC",
      contrastText: "#FCFCFC"
    },
    mode: 'dark'
  }
});

function Contact() {
  return (
    <>
      <Box
        sx={{
          background: '#0F0E17',
        }}
      >
        <Container
          sx={{
            paddingY: 15,
          }}
        >
          <Typography
            variant='h4'
            sx={{
              fontSize: 35,
              fontFamily: 'Poppins',
              fontWeight: 700,
              mb: 2,
              color: '#FCFCFC'
            }}
          >
            Let's create progress together.
          </Typography>
          <Typography
            variant='paragraph'
            sx={{
              fontSize: 14,
              fontFamily: 'Poppins',
              color: '#FCFCFC',
              display: 'flex',
              flexWrap: 'wrap',
              width: '50%',
              lineHeight: 2
            }}
          >
            If you have any ideas in mind, please do not hesitate to contact me. I'm always willing to help you turn your creative ideas into reality. 
          </Typography>
          <Box
            sx={{
              my: 5,
              display: 'flex',
              flexDirection: 'column',
              width: '70%',
            }}
          >
            <ThemeProvider theme={theme}>
              <TextField 
                label='Your Name' 
                variant='standard'
                color='neutral'
                sx={{
                  my: 2,
                }}
              />
              <TextField 
                label='Your Email' 
                variant='standard'
                color='neutral'
                sx={{
                  my: 2
                }}
              />
              <TextField 
                label='Subject' 
                variant='standard'
                color='neutral'
                sx={{
                  my: 2
                }}
              />
              <TextField 
                label='Message' 
                variant='standard'
                color='neutral'
                sx={{
                  my: 2,
                }}
              />
              <Button
                style={{
                  background: '#FF8906',
                  width: '190px',
                  height: '50px',
                  textTransform: 'lowercase',
                  color: '#0F0E17',
                  borderRadius: 0,
                  fontSize: 14,
                  marginTop: 10,
                }}
              >
                send Message
                <GrSend
                  style={{
                    color: '#0F0E17',
                    marginLeft: 13,
                    fontSize: 18,
                  }}
                />
              </Button>
            </ThemeProvider>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Contact