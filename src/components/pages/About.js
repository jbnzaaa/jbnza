import React from 'react'
import { Container, Box, Typography, List, ListItem } from '@mui/material'

import { styled } from '@mui/material/styles'

const AboutContainer = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column-reverse',
    padding: '50px 0',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    flexDirection: 'row',
  },
}))

const ProfileImage = styled('img')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    width: '45%',
    display: 'none'
  },
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}))

const TypographyP = styled('p')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 14,
  },
}))

const TypographyH4 = styled('h4')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 30,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 35,
  },
}))

const TypographyH6 = styled('h6')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 14,
  },
}))

const Lists = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    alignItems: 'start'
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    alignItems: 'start',
  },
}))

const AboutMe = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    padding: '0 0 50px 0'
  },
  [theme.breakpoints.up('lg')]: {
    padding: '30px'
  },
}))

const Stacks = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    padding: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '30px'
  },
}))

function About() {

  const container = {
    display: 'flex',
    paddingY: 15
  }

  const profile = {
    width: '370px',
    marginLeft: '40px'
  }

  const boxA = {
    p: 6,
  }

  const typographyH4 = {
    fontSize: 35,
    fontFamily: 'Poppins',
    fontWeight: 700,
    mb: 2
  }

  const typographyH6 = {
    fontSize: 14,
    fontWeight: 600,
    fontFamily: 'Poppins',
    mt: 1
  }

  const typographyPA = {
    fontSize: 14,
    fontFamily: 'Poppins',
    lineHeight: 2,
  }

  const typographyPB = {
    fontSize: 14,
    fontWeight: 600,
    mb: 2
  }

  const aboutmeListA = {
    p: 0,
    mb: 2
  }

  const aboutmeListB = {
    p: 0
  }

  const whatIuse = {
    pt: 3,
  }

  const whatIuseList = {
    p: 0,
  }

  const boxB = {
    p: 6,
    background: '#0F0E17',
    color: '#FCFCFC'
  }

  const boxC = {
    display: 'flex'
  }

  const boxD = {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap'
  }

  const listItem = {
    fontSize: 12,
    color: '#F25F4C',
    width: 'auto',
  }

  return (
    <>
      <Container>
        <AboutContainer sx={container} id='about'>
          <Box>
            <AboutMe sx={boxA} >
              <TypographyH4 variant='h4' sx={typographyH4} >About Me.</TypographyH4>
              <List>
                <ListItem sx={aboutmeListA} >
                  <TypographyP variant='paragraph' sx={typographyPA} >
                    Hi! I’m Jayson Beniza I have strong passion for user interface designing and front-end web development. I recently graduated from STI College Novaliches with a bachelor’s degree in Information Technology. <br/>
                  </TypographyP>
                </ListItem>
                <ListItem sx={aboutmeListB} >
                  <TypographyP variant='paragraph' sx={typographyPA} >
                    My interest in web programming began in senior high school, when I was appointed to be the project's lead programmer. That experience started to shape my skills and knowledge particularly in front-end web development. As I learned more about web programming, my interest in UI design developed. I spent the most of my time studying visual design and now capable of creating professional and interactive web designs.
                  </TypographyP>
                </ListItem>
              </List>
            </AboutMe>
            <Stacks sx={boxB} >
              <TypographyP sx={typographyPB} >What I use?</TypographyP>
              <TypographyP variant='paragraph' sx={typographyPA} >
                I’ve been utilizing in producing user interface designs, wireframing, prototyping, visual design, and develop website or application. The tools and technologies listed below are those that I have used and am familiar with.
              </TypographyP>
              <List sx={whatIuse} >
                <TypographyH6 variant='h6' sx={typographyH6} >Graphics Design</TypographyH6>
                <Lists sx={boxC} >
                  <ListItem sx={listItem}>Adobe Photoshop</ListItem>
                  <ListItem sx={listItem}>Adobe Illustrator</ListItem>
                  <ListItem sx={listItem}>Adobe Xd</ListItem>
                  <ListItem sx={listItem}>Figma</ListItem>
                </Lists>
              </List>
              <List sx={whatIuseList} >
                <TypographyH6 variant='h6' sx={typographyH6}>Web Development</TypographyH6>
                <Lists sx={boxD}>
                  <ListItem sx={listItem}>HTML 5</ListItem>
                  <ListItem sx={listItem}>CSS 3</ListItem>
                  <ListItem sx={listItem}>SASS</ListItem>
                  <ListItem sx={listItem}>Bootstrap</ListItem>
                  <ListItem sx={listItem}>JavaScript</ListItem>
                  <ListItem sx={listItem}>JQuery</ListItem>
                  <ListItem sx={listItem}>ReactJS</ListItem>
                  <ListItem sx={listItem}>MySQL</ListItem>
                  <ListItem sx={listItem}>Firebase</ListItem>
                  <ListItem sx={listItem}>NodeJS</ListItem>
                  <ListItem sx={listItem}>NPM</ListItem>
                </Lists>
              </List>
            </Stacks>
          </Box>
          <Box>
            <ProfileImage sx={profile} src={require('../img/profile.avif')}/>
            {/* <img src={require('https://images.unsplash.com/photo-1607970420862-385a245239a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80')} alt='Profile' style={profile}/> */}
          </Box>
        </AboutContainer>
      </Container>
    </>
  )
}

export default About