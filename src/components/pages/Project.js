import React from 'react'
import { Container, Box, Typography, Card, CardMedia, CardContent, List, ListItem, Button } from '@mui/material'

import { styled } from '@mui/material/styles'

const TypographyH4 = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 30,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 30,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 35,
  },
}))

const TypographyP = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
    width: '100%'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 12,
    width: '100%'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 14,
    width: '100%'
  },
}))

const CardItem = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    fdisplay: 'block',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
}))

const ProjectMedia = styled('img')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginBottom: 40
  },
  [theme.breakpoints.up('md')]: {
    // display: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}))

const ProjectContent = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    width: '85%',
    padding: 0, 
    margin: 'auto',
  },
  [theme.breakpoints.up('md')]: {
    width: '85%',
    padding: 0, 
    margin: 'auto'
  },
  [theme.breakpoints.up('lg')]: {
    width: '100%',
    padding: 0, 
    paddingLeft: 80
  },
}))

const TypographySpan = styled('p')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 10, 
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 10, 
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 12, 
  },
}))

const StackList = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex', 
    width: '100%',  
    fontSize: 11, 
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex', 
    width: '100%',  
    fontSize: 11, 
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 13, 
  },
}))

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

  // const cardB = {
  //   display: 'flex',
  //   width: '100%',
  //   margin: 'auto',
  //   background: 'transparent',
  //   boxShadow: 0,
  //   borderRadius: 0,
  //   mb: 7
  // }

  const cardContentA = {
    width: '100%',
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    p: 0, 
    pl: 8 
  }

  // const cardContentB = {
  //   width: '100%', 
  //   display: 'flex', 
  //   flexDirection: 'column', 
  //   justifyContent: 'center', 
  //   p: 0, 
  //   pr: 8 
  // }

  const cardMedia = {
    width: '40%'
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
        <TypographyH4 variant='h4'sx={typographyH4}>Some of the projects I've created.</TypographyH4>
        <TypographyP variant='paragraph'sx={paragraphA}>This is a collection of projects I've worked on as a user interface designer and web developer.</TypographyP>
        <Box sx={boxA}>
          <CardItem sx={cardA}>
            <ProjectMedia sx={cardMedia} src={require('../img/regain_mockup.jpg')}/>
            <ProjectContent sx={cardContentA}>
              <TypographySpan variant='paragraph' sx={paragraphB}>Web Project</TypographySpan>
              <TypographyH4 variant='h4' sx={typographyH4}>ReGain</TypographyH4>
              <TypographyP variant='paragraph' sx={TypographyC}>A web based self-assessment and e-journal system with chatbot and student counselor assistance for troubled student in STI College Novaliches.</TypographyP>
              <StackList sx={stackList}>
                <ListItem sx={stackItem}>HTML</ListItem>
                <ListItem sx={stackItem}>CSS</ListItem>
                <ListItem sx={stackItem}>SASS</ListItem>
                <ListItem sx={stackItem}>JavaScript</ListItem>
                <ListItem sx={stackItem}>JQuery</ListItem>
                <ListItem sx={stackItem}>Bootstrap</ListItem>
                <ListItem sx={stackItem}>NodeJS</ListItem>
                <ListItem sx={stackItem}>Firebase</ListItem>
                <ListItem sx={stackItem}>Google Cloud Storage</ListItem>
              </StackList>
              <Box sx={boxB}>
                <Button href='https://www.behance.net/gallery/144867729/ReGain-UI-Redesign' target='https://www.behance.net/gallery/144867729/ReGain-UI-Redesign' variant='contained' sx={linkButton}>view in behance</Button>
                <Button href='https://regain-caps.web.app' target='https://regain-caps.web.app' variant='contained' sx={linkButton}>launch app </Button>
              </Box>
            </ProjectContent>
          </CardItem>
        </Box>
      </Container>
    </>
  )
}

export default Project


{/* <Card sx={cardB}>
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
</Card> */}