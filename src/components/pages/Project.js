import React from 'react'
import { Container, Box, Typography, Card, CardMedia, CardContent, List, ListItem, Button } from '@mui/material'

function Project() {

  const container = {
    paddingY: 15
  }

  const typographyH4 = {
    fontSize: 35,
    fontFamily: 'Poppins',
    fontWeight: 700,
    mb: 2
  }

  const paragraphA = {
    fontSize: 14,
    fontFamily: 'Poppins'
  }

  const paragraphB = {
    fontSize: 12, 
    fontFamily: 'Poppins ', 
    pb: 1/5, 
    color: '#FF8906', 
    textTransform: 'uppercase' 
  }

  const TypographyC = {
    fontSize: 14, 
    fontFamily: 'Poppins', 
    width: '80%', 
    flexWrap: 'wrap', 
    pb: 3,
    lineHeight: 2
  }

  const boxA = {
    pt: 8
  }

  const boxB = {
    display: 'flex' 
  }

  const cardA = {
    display: 'flex',
    width: '100%',
    margin: 'auto',
    background: 'transparent',
    boxShadow: 0,
    borderRadius: 0,
    mb: 7
  }

  const cardB = {
    display: 'flex',
    width: '100%',
    margin: 'auto',
    background: 'transparent',
    boxShadow: 0,
    borderRadius: 0,
    mb: 7
  }

  const cardContentA = {
    width: '100%',
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    p: 0, 
    pl: 8 
  }

  const cardContentB = {
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    p: 0, 
    pr: 8 
  }

  const cardMedia = {
    width: '35%'
  }

  const stackList = {
    display: 'flex', 
    width: '70%',  
    fontSize: 13, 
    fontFamily: 'Poppins', 
    p: 0, 
    flexWrap: 'wrap', 
    pb: 3, color: '#F25F4C' ,
    lineHeight: 2
  }

  const stackItem = {
    width: 'auto', 
    p: 0, 
    mr: 2 
  }

  const linkButton = {
    background: '#0F0E17',
    color: '#FCFCFC',
    textTransform: 'lowercase',
    fontSize: 14, 
    fontFamily: 'Poppins',
    width: '165px',
    height: '40px',
    borderRadius: 0,
    marginRight: 2,
    '&:hover': {
      background: '#0F0E17',
      color: '#fcfcfc'
    }
  }

  return (
    <>
      <Container sx={container} id='projects'>
        <Typography variant='h4'sx={typographyH4}>Some of the projects I've created.</Typography>
        <Typography variant='paragraph'sx={paragraphA}>This is a collection of projects I've worked on as a user interface designer and web developer.</Typography>
        <Box sx={boxA}>
          <Card sx={cardA}>
            <CardMedia component='img' image={require('../img/regain_mockup.jpg')} sx={cardMedia}/>
            <CardContent sx={cardContentA}>
              <Typography variant='paragraph' sx={paragraphB}>Web Project</Typography>
              <Typography variant='h4' sx={typographyH4}>ReGain</Typography>
              <Typography variant='paragraph' >A web based self-assessment and e-journal system with chatbot and student counselor assistance for troubled student in STI College Novaliches.</Typography>
              <List sx={stackList}>
                <ListItem sx={stackItem}>HTML</ListItem>
                <ListItem sx={stackItem}>CSS</ListItem>
                <ListItem sx={stackItem}>SASS</ListItem>
                <ListItem sx={stackItem}>JavaScript</ListItem>
                <ListItem sx={stackItem}>JQuery</ListItem>
                <ListItem sx={stackItem}>Bootstrap</ListItem>
                <ListItem sx={stackItem}>NodeJS</ListItem>
                <ListItem sx={stackItem}>Firebase</ListItem>
                <ListItem sx={stackItem}>Google Cloud Storage</ListItem>
              </List>
              <Box sx={boxB}>
                <Button href='#' target='#' variant='contained' sx={linkButton}>source code</Button>
                <Button href='https://regain-caps.web.app' target='https://regain-caps.web.app' variant='contained' sx={linkButton}>launch app </Button>
              </Box>
            </CardContent>
          </Card>

          <Card sx={cardB}>
            <CardContent sx={cardContentB}>
              <Typography variant='paragraph' sx={paragraphB}>UI Design</Typography>
              <Typography variant='h4' sx={typographyH4}>iSCAN</Typography>
              <Typography variant='paragraph' sx={TypographyC}>A cloud based business management system with realtime menu viewer and ordering system using QR Code.</Typography>
              <List sx={stackList}>
                <ListItem sx={stackItem}>Figma</ListItem>
              </List>
              <Box sx={boxB}>
                <Button href='#' target='#' variant='contained' sx={linkButton} >view in behance</Button>
              </Box>
            </CardContent>
            <CardMedia component='img' image={require('../img/cody_go_mockup.jpg')} sx={cardMedia}/>
          </Card>
        </Box>
      </Container>
    </>
  )
}

export default Project