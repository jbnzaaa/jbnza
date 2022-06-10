import React from 'react'
import { Container, Box, Typography, TextField, Button } from '@mui/material'
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
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

const TypographyH4 = styled('h4')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 30,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 35,
  },
}))

const TypographyP = styled('p')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
    width: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 14,
  },
}))

const InputField = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
    paddingTop: '40px'
  },
  [theme.breakpoints.up('lg')]: {
    width: '70%',
    paddingTop: '64px'
  },
}))

const SendMessageButton = styled('button')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    width: '150px',
    height: '40px',
    fontSize: 12,
  },
  [theme.breakpoints.up('lg')]: {
    width: '190px',
    height: '50px',
    fontSize: 14,
  },
}))

function Contact() {

  const boxA = {
    background: '#0F0E17',
  }

  const boxB = {
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
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    '&:hover': {
      background: '#FF8906',
    }
  }

  return (
    <>
      <Box sx={boxA} id='contact'>
        <Container sx={container}>
          <TypographyH4 variant='h4' sx={typographyH4}>Let's create progress together.</TypographyH4>
          <TypographyP variant='paragraph' sx={paragraph}>If you have any ideas in mind, please do not hesitate to contact me. I'm always willing to help you turn your creative ideas into reality.  </TypographyP>
          <InputField sx={boxB}>
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
          </InputField>
        </Container>
      </Box>
    </>
  )
}

export default Contact