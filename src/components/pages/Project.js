import React from 'react'
import { Container, Box, Typography, Card, CardMedia, CardContent, List, ListItem, Link, Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'

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
            <CardContent 
              sx={{ 
                width: '100%',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                p: 0, 
                pl: 8 
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
                Web Project
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
                ReGain
              </Typography>
              <Typography 
                variant='paragraph' 
                sx={{ 
                  fontSize: 14, 
                  fontFamily: 'Poppins', 
                  width: '80%', 
                  flexWrap: 'wrap', 
                  pb: 3,
                  lineHeight: 2
                }}
              >
                A web based self-assessment and e-journal system with chatbot and student counselor assistance for troubled student in STI College Novaliches.
              </Typography>
              <List 
                sx={{ 
                  display: 'flex', 
                  width: '70%',  
                  fontSize: 13, 
                  fontFamily: 'Poppins', 
                  p: 0, 
                  flexWrap: 'wrap', 
                  pb: 3, color: '#F25F4C' ,
                  lineHeight: 2
                }}
              >
                <ListItem 
                  sx={{ 
                    width: 'auto', 
                    p: 0, 
                    mr: 2 
                  }}
                >
                  HTML
                </ListItem>
                <ListItem 
                  sx={{ 
                    width: 'auto', 
                    p: 0, 
                    mr: 2 
                  }}
                >
                  CSS
                </ListItem>
                <ListItem 
                  sx={{ 
                    width: 'auto', 
                    p: 0, 
                    mr: 2 
                  }}
                >
                  SASS
                </ListItem>
                <ListItem 
                  sx={{ 
                    width: 'auto', 
                    p: 0, 
                    mr: 2 
                  }}
                >
                  JavaScript
                </ListItem>
                <ListItem 
                  sx={{ 
                    width: 'auto', 
                    p: 0, 
                    mr: 2 
                  }}
                >
                  JQuery
                </ListItem>
                <ListItem 
                  sx={{ 
                    width: 'auto', 
                    p: 0, 
                    mr: 2 
                  }}
                >
                  Bootstrap
                </ListItem>
                <ListItem 
                  sx={{ 
                    width: 'auto', 
                    p: 0, 
                    mr: 2 
                  }}
                >
                  NodeJS
                </ListItem>
                <ListItem 
                  sx={{ 
                    width: 'auto', 
                    p: 0, 
                    mr: 2 
                  }}
                >
                  Firebase
                </ListItem>
                <ListItem 
                  sx={{ 
                    width: 'auto', 
                    p: 0, 
                    mr: 2 
                  }}
                >
                  Google Cloud Storage
                </ListItem>
              </List>
              <Box 
                sx={{ 
                  display: 'flex' 
                }}
              >
                <Button
                  href=''
                  variant='contained'
                  style={{
                    background: '#0F0E17',
                    color: '#FCFCFC',
                    textTransform: 'lowercase',
                    fontSize: 14, 
                    fontFamily: 'Poppins',
                    width: '140px',
                    height: '40px',
                    borderRadius: 0,
                    marginRight: 15
                  }}
                >
                  source code
                </Button>
                <Button
                  variant='contained'
                  style={{
                    background: '#0F0E17',
                    color: '#FCFCFC',
                    textTransform: 'lowercase',
                    fontSize: 14, 
                    fontFamily: 'Poppins',
                    width: '140px',
                    height: '40px',
                    borderRadius: 0,
                    marginRight: 15
                  }}
                >
                  launch app
                </Button>
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
                pb: 3 ,
                lineHeight: 2
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
                <Button
                  variant='contained'
                  style={{
                    background: '#0F0E17',
                    color: '#FCFCFC',
                    textTransform: 'lowercase',
                    fontSize: 14, 
                    fontFamily: 'Poppins',
                    width: '180px',
                    height: '40px',
                    borderRadius: 0,
                    marginRight: 15
                  }}
                >
                  view in behance
                </Button>
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
    </>
  )
}

export default Project