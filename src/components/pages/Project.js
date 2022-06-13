import React from 'react'
import { Fade } from 'react-reveal'
import { Container, Box, ListItem, Button } from '@mui/material'

import { styled } from '@mui/material/styles'

const ProjectContainer = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    padding: '50px 0',
  },
  [theme.breakpoints.up('lg')]: {
    paddingY: 15
  },
}))

const TypographyH4 = styled('h4')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 30,
    color: '#0F0E17',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 35,
    color: '#0F0E17',
  },
}))

const TypographyP = styled('p')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
    width: '100%',
    color: '#2B2C34'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 14,
    width: '100%',
    color: '#2B2C34'
  },
}))

const CardItem = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
}))

const ProjectMedia = styled('img')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginBottom: 40,
  },
  [theme.breakpoints.up('lg')]: {
    width: '500px',
    display: 'block',
  },
}))

const ProjectContent = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '0', 
    margin: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    width: '1000%',
    padding: '0', 
    paddingLeft: 80
  },
}))

const TypographySpan = styled('p')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
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
  [theme.breakpoints.up('lg')]: {
    fontSize: 13, 
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
    width: '500px'
  }

  const stackList = {
    display: 'flex', 
    width: '70%',  
    fontSize: 13, 
    fontFamily: 'Poppins', 
    p: 0, 
    flexWrap: 'wrap', 
    pb: 3, 
    color: '#F25F4C' ,
    lineHeight: 2
  }

  const stackItem = {
    width: 'auto', 
    p: 0, 
    mr: 2 
  }

  const linkButton = {
    border: 'none',
    background: '#0F0E17',
    width: '165px',
    height: '40px',
    borderRadius: 0,
    marginRight: 2,
    '&:hover': {
      background: '#0F0E17',
      color: '#fcfcfc'
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
      <Container>
        <ProjectContainer sx={container} id='projects'>
          <TypographyH4 variant='h4'sx={typographyH4}>
            <Fade bottom delay={100}>
              Some of the projects I've created.
            </Fade>
          </TypographyH4>
          <TypographyP variant='paragraph'sx={paragraphA}>
            <Fade bottom delay={150}>
              This is a collection of projects I've worked on as a user interface designer and web developer.
            </Fade>
          </TypographyP>
          <Box sx={boxA}>
            <CardItem sx={cardA}>
              <Fade left delay={100}>
                <ProjectMedia sx={cardMedia} src={require('../img/regain_mockup.jpg')}/>
              </Fade>
              <ProjectContent sx={cardContentA}>
                <TypographySpan variant='paragraph' sx={paragraphB}>
                  <Fade bottom delay={150}>
                    Web Project
                  </Fade>
                </TypographySpan>
                <TypographyH4 variant='h4' sx={typographyH4}>
                  <Fade bottom delay={200}>
                    ReGain
                  </Fade>
                </TypographyH4>
                <TypographyP variant='paragraph' sx={TypographyC}>
                  <Fade bottom delay={250}>
                    A web based self-assessment and e-journal system with chatbot and student counselor assistance for troubled student in STI College Novaliches.
                  </Fade>
                </TypographyP>
                <Fade bottom delay={300}>
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
                </Fade>
                <Fade bottom delay={350}>
                  <Box sx={boxB}>
                    <Button href='https://www.behance.net/gallery/144867729/ReGain-UI-Redesign' target='https://www.behance.net/gallery/144867729/ReGain-UI-Redesign' variant='contained' sx={linkButton}>
                      <ButtonTypography sx={typographyButton}>view in behance</ButtonTypography>
                    </Button>
                    <Button href='https://regain-caps.web.app' target='https://regain-caps.web.app' variant='contained' sx={linkButton}>
                      <ButtonTypography sx={typographyButton}>launch app</ButtonTypography>
                    </Button>
                  </Box>
                </Fade>
              </ProjectContent>
            </CardItem>
          </Box>
        </ProjectContainer>
      </Container>
    </>
  )
}

export default Project