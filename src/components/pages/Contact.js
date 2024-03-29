import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Fade } from 'react-reveal';
import { Container, Box, TextField, Button } from '@mui/material'
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
    paddingTop: '40px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '70%',
    paddingTop: '64px',
  },
}))

// const SendMessageButton = styled('button')(({theme}) => ({
//   [theme.breakpoints.down('md')]: {
//     width: '150px',
//     height: '40px',
//     fontSize: 12,
//   },
//   [theme.breakpoints.up('lg')]: {
//     width: '190px',
//     height: '50px',
//     fontSize: 14,
//   },
// }))

function Contact() {

  const boxA = {
    background: '#0F0E17',
  }

  const boxB = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
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

  // send email
  const [isSending, setIsSending] = useState(true)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('jbnza_service_id', 'template_wop76ta', form.current, '4NNmCk78_eBje_7rS')
      .then((result) => {
        setIsSending(false)
        console.log(result.text)
      })
      // .then((setIsSending) => {
      //   if(setIsSending == false){
      //     setIsSending(true)
      //   }
      // })
      .catch((error) => {
        setIsSending(false)
        console.log(error.text)
      })

      return {isSending}
  }

  return (
    <>
      <Box sx={boxA} id='contact'>
        <Fade bottom>
          <Container sx={container}>
            <Fade bottom delay={100}>
              <TypographyH4 variant='h4' sx={typographyH4}>
                  Let's create progress together.
              </TypographyH4>
            </Fade>
            <Fade bottom delay={150}>
              <TypographyP variant='body1' sx={paragraph}>
                  If you have any ideas in mind, please do not hesitate to contact me. I'm always willing to help you turn your creative ideas into reality.
              </TypographyP>
            </Fade>
            <Fade bottom delay={200}>
            <InputField>
              <ThemeProvider theme={theme}>
                <Box component='form' ref={form} onSubmit={sendEmail} sx={boxB}>
                  <TextField label='Your Name' variant='standard' color='neutral' sx={textfeild} type='text' name='client_name' required/>
                  <TextField label='Your Email' variant='standard' color='neutral' sx={textfeild} type='email' name='client_email' required/>
                  <TextField label='Subject' variant='standard' color='neutral' sx={textfeild} name='subject' required/>
                  <TextField label='Message' variant='standard' color='neutral' sx={textfeild} name='message' required/>
                  <Fade bottom delay={200}>
                    <Button sx={sendButton} type='submit'>
                      {isSending && 'send Message'}
                      {/* {!isSending && 'sending Message'} */}
                      <GrSend style={{ color: '#0F0E17', marginLeft: 14, fontSize: 18, }}/>
                    </Button>
                  </Fade>
                  {/* <Fade bottom delay={200}>
                    {!isSending && <Button sx={sendButton} type='submit'>
                      sending message
                      <GrSend style={{ color: '#0F0E17', marginLeft: 14, fontSize: 18, }}/>
                    </Button>}
                  </Fade> */}
                </Box>
              </ThemeProvider>
            </InputField>
            </Fade>
          </Container>
        </Fade>
      </Box>
    </>
  )
}

export default Contact