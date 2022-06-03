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

  const boxA = {
    background: '#0F0E17',
  }

  const boxB = {
    my: 5,
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
  }

  const container = {
    paddingY: 15,
  }

  const typographyH4 = {
    fontSize: 35,
    fontFamily: 'Poppins',
    fontWeight: 700,
    mb: 2,
    color: '#FCFCFC'
  }

  const paragraph = {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#FCFCFC',
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%',
    lineHeight: 2
  }

  const textfeild = {
    my: 2,
  }

  const sendButton = {
    background: '#FF8906',
    width: '190px',
    height: '50px',
    textTransform: 'lowercase',
    color: '#0F0E17',
    borderRadius: 0,
    fontSize: 14,
    marginTop: 2,
    '&:hover': {
      background: '#FF8906',
    }
  }

  return (
    <>
      <Box sx={boxA}>
        <Container sx={container}>
          <Typography variant='h4' sx={typographyH4}>Let's create progress together.</Typography>
          <Typography variant='paragraph' sx={paragraph}>If you have any ideas in mind, please do not hesitate to contact me. I'm always willing to help you turn your creative ideas into reality.  </Typography>
          <Box sx={boxB}>
            <ThemeProvider theme={theme}>
              <TextField label='Your Name' variant='standard'color='neutral'sx={textfeild}/>
              <TextField label='Your Email' variant='standard'color='neutral'sx={textfeild}/>
              <TextField label='Subject' variant='standard'color='neutral'sx={textfeild}/>
              <TextField label='Message' variant='standard'color='neutral'sx={textfeild}/>
              <Button sx={sendButton}>
                send Message
                <GrSend style={{ color: '#0F0E17', marginLeft: 14, fontSize: 18, }}/>
              </Button>
            </ThemeProvider>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Contact