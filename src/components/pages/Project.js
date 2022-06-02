import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faLink } from '@fortawesome/free-solid-svg-icons'
import { Container, Box, Typography, Card, CardMedia, CardContent, CardActions, List, ListItem, Link } from '@mui/material'
import { VscGithubAlt } from 'react-icons/vsc'
import { HiOutlineLink } from 'react-icons/hi'
import { RiBehanceLine } from 'react-icons/ri'

function Project() {
  return (
    <>
      <Container
        sx={{
          paddingY: 15
        }}
      >
        <Typography 
          variant='h4'
          sx={{
            fontSize: 35,
            fontFamily: 'Poppins',
            fontWeight: 700,
            mb: 2
          }}
        >
          Some of the projects I've created.
        </Typography>
        <Typography 
          variant='paragraph'
          sx={{
            fontSize: 14,
            fontFamily: 'Poppins'
          }}
        >
          This is a collection of projects I've worked on as a user interface designer and web developer.
        </Typography>
        <Box
          sx={{
            pt: 8
          }}
        >
          <Card
            sx={{
              display: 'flex',
              width: '100%',
              margin: 'auto',
              background: 'transparent',
              boxShadow: 0,
              borderRadius: 0,
              mb: 7
            }}
          >
            <CardMedia 
              component='img'
              image={require('../img/regain_mockup.jpg')}
              sx={{
                width: '35%'
              }}
            />
            <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 0, pl: 8 }}>
              <Typography variant='paragraph' sx={{ fontSize: 12, fontFamily: 'Poppins ', pb: 1/5, color: '#FF8906', textTransform: 'uppercase' }}>Web Project</Typography>
              <Typography variant='h4' sx={{ fontSize: 35, fontWeight: 600, fontFamily: 'Poppins', pb: 3 }}>ReGain</Typography>
              <Typography variant='paragraph' sx={{ fontSize: 14, fontFamily: 'Poppins', width: '80%', flexWrap: 'wrap', pb: 3 }}>A web based self-assessment and e-journal systme with chatbot and student counselor assistance for troubled student in STI College Novaliches.</Typography>
              <List sx={{ display: 'flex', width: '70%',  fontSize: 13, fontFamily: 'Poppins', p: 0, flexWrap: 'wrap', pb: 3, color: '#F25F4C' }}>
                <ListItem sx={{ width: 'auto', p: 0, mr: 2 }}>HTML</ListItem>
                <ListItem sx={{ width: 'auto', p: 0, mr: 2 }}>CSS</ListItem>
                <ListItem sx={{ width: 'auto', p: 0, mr: 2 }}>SASS</ListItem>
                <ListItem sx={{ width: 'auto', p: 0, mr: 2 }}>JavaScript</ListItem>
                <ListItem sx={{ width: 'auto', p: 0, mr: 2 }}>JQuery</ListItem>
                <ListItem sx={{ width: 'auto', p: 0, mr: 2 }}>Bootstrap</ListItem>
                <ListItem sx={{ width: 'auto', p: 0, mr: 2 }}>NodeJS</ListItem>
                <ListItem sx={{ width: 'auto', p: 0, mr: 2 }}>Firebase</ListItem>
                <ListItem sx={{ width: 'auto', p: 0, mr: 2 }}>Google Cloud Storage</ListItem>
              </List>
              <Box sx={{ display: 'flex' }}>
                <Link href='#' sx={{ display: 'flex', marginRight: 2 }}>
                  <VscGithubAlt style={{ fontSize: 20, color: '#0F0E17' }}/>
                </Link>
                <Link href='#' sx={{ display: 'flex', marginRight: 2 }}>
                  <HiOutlineLink style={{ fontSize: 20, color: '#0F0E17' }}/>
                </Link>
              </Box>
            </CardContent>
          </Card>

          <Card
            sx={{
              display: 'flex',
              width: '100%',
              margin: 'auto',
              background: 'transparent',
              boxShadow: 0,
              borderRadius: 0,
              mb: 7
            }}
          >
            <CardContent 
            sx={{ 
              width: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              p: 0, 
              pr: 8 
            }}
            >
              <Typography 
              variant='paragraph' 
              sx={{ 
                fontSize: 12, 
                fontFamily: 'Poppins ', 
                pb: 1/5, 
                color: '#FF8906', 
                textTransform: 'uppercase' 
              }}
              >
                Ui Design
              </Typography>
              <Typography 
              variant='h4' 
              sx={{ 
                fontSize: 35, 
                fontWeight: 600, 
                fontFamily: 'Poppins', 
                pb: 3 
              }}
              >
                iSCAN
              </Typography>
              <Typography 
              variant='paragraph' 
              sx={{ 
                fontSize: 14, 
                fontFamily: 'Poppins', 
                width: '80%', 
                flexWrap: 'wrap', 
                pb: 3 
              }}
              >
                A cloud based business management system with realtime menu viewer and ordering system using QR Code.
              </Typography>
              <List 
              sx={{ 
                display: 'flex', 
                width: '70%',  
                fontSize: 13, 
                fontFamily: 'Poppins', 
                p: 0, 
                flexWrap: 'wrap', 
                pb: 3, 
                color: '#F25F4C' 
              }}
              >
                <ListItem 
                sx={{ 
                  width: 'auto', 
                  p: 0, 
                  mr: 2 
                }}
                >
                  Figma
                </ListItem>
              </List>
              <Box 
              sx={{ 
                display: 'flex' 
              }}
              >
                <Link 
                href='#' 
                sx={{ 
                  display: 'flex', 
                  marginRight: 2 
                }}
                >
                  <RiBehanceLine 
                  style={{ 
                    fontSize: 20, 
                    color: '#0F0E17'
                  }}
                  />
                </Link>
              </Box>
            </CardContent>
            <CardMedia 
              component='img'
              image={require('../img/cody_go_mockup.jpg')}
              sx={{
                width: '35%'
              }}
            />
          </Card>
        </Box>
      </Container>

      {/* <section className='project'>
        <div>
          <div id='my_project'>
            <h4>Some of the projects I've created.</h4>
            <p>This is a collection of projects I've worked on as a user interface designer and web developer.</p>
          </div>
          <div className='card'>
            <img src='../img/jbnza_full_logo.svg'/>
            <section>
              <span>Web Project</span>
              <h2>ReGain</h2>
              <p>A web based self-assessment and e-journal systme with chatbot and student counselor assistance for troubled student in STI College Novaliches.</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>NodeJS</li>
                <li>Firebase</li>
                <li>Google Cloud Storage</li>
              </ul>
              <div className='link'>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={ faCodeBranch } size='1x' style={{ color: '#0F0E17' }}/>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={ faLink } size='1x' style={{ color: '#0F0E17' }}/>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Project