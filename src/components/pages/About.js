import React from 'react'
import { Container, Box, Typography, List, ListItem } from '@mui/material'

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
    pt: 3
  }

  const whatIuseList = {
    p: 0
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
    fontSize: 13,
    color: '#F25F4C',
    width: 'auto',
  }

  return (
    <>
      <Container sx={container} id='about'>
        <Box>
          <Box sx={boxA} >
            <Typography variant='h4' sx={typographyH4} >About Me.</Typography>
            <List>
              <ListItem sx={aboutmeListA} >
                <Typography variant='paragraph' sx={typographyPA} >
                  Hi! I’m Jayson Beniza I have strong passion for user interface designing and front-end web development. I recently graduated from STI College Novaliches with a bachelor’s degree in Information Technology. <br/>
                </Typography>
              </ListItem>
              <ListItem sx={aboutmeListB} >
                <Typography variant='paragraph' sx={typographyPA} >
                  My interest in web programming began in senior high school, when I was appointed to be the project's lead programmer. That experience started to shape my skills and knowledge particularly in front-end web development. As I learned more about web programming, my interest in UI design developed. I spent the most of my time studying visual design and now capable of creating professional and interactive web designs.
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box sx={boxB} >
            <Typography sx={typographyPB} >What I use?</Typography>
            <Typography variant='paragraph' sx={typographyPA} >
              I’ve been utilizing in producing user interface designs, wireframing, prototyping, visual design, and develop website or application. The tools and technologies listed below are those that I have used and am familiar with.
            </Typography>
            <List sx={whatIuse} >
              <Typography variant='h6' sx={typographyH6} >Graphics Design</Typography>
              <Box sx={boxC} >
                <ListItem sx={listItem}> Adobe Photoshop</ListItem>
                <ListItem sx={listItem}>Adobe Illustrator</ListItem>
                <ListItem sx={listItem}>Adobe Xd</ListItem>
                <ListItem sx={listItem}>Figma</ListItem>
              </Box>
            </List>
            <List sx={whatIuseList} >
              <Typography variant='h6' sx={typographyH6}>Web Development</Typography>
              <Box sx={boxD}>
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
              </Box>
            </List>
          </Box>
        </Box>
        <Box>
          {/* <img src='https://images.unsplash.com/photo-1607970420862-385a245239a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'alt='Profile'style={profile}/> */}
        </Box>
      </Container>
    </>
  )
}

export default About