import React from 'react'
import { Container, Box, Typography, List, ListItem } from '@mui/material'

function About() {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          paddingY: 15
        }}
      >
        <Box>
          <img 
            src='https://images.unsplash.com/photo-1607970420862-385a245239a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
            alt='Profile'
            style={{
              width: '370px',
              marginRight: '40px'
            }}
          />
        </Box>
        <Box>
          <Box
            sx={{
              p: 6,
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
              About Me.
            </Typography>
            <List>
              <ListItem
                sx={{
                  p: 0,
                  mb: 2
                }}
              >
                <Typography
                  variant='paragraph'
                  sx={{
                    fontSize: 14,
                    fontFamily: 'Poppins',
                    lineHeight: 2,
                  }}
                >
                  Hi! I’m Jayson Beniza I have strong passion for user interface designing and front-end web development. I recently graduated from STI College Novaliches with a bachelor’s degree in Information Technology. <br/>
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  p: 0
                }}
              >
                <Typography
                  variant='paragraph'
                  sx={{
                    fontSize: 14,
                    fontFamily: 'Poppins',
                    lineHeight: 2,
                  }}
                >
                  My interest in web programming began in senior high school, when I was appointed to be the project's lead programmer. That experience started to shape my skills and knowledge particularly in front-end web development. As I learned more about web programming, my interest in UI design developed. I spent the most of my time studying visual design and now capable of creating professional and interactive web designs.
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              p: 6,
              background: '#0F0E17',
              color: '#FCFCFC'
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                mb: 2
              }}
            >
              What I use?
            </Typography>
            <Typography
              variant='paragraph'
              sx={{
                fontSize: 14,
                fontFamily: 'Poppins',
                lineHeight: 2
              }}
            >
              I’ve been utilizing in producing user interface designs, wireframing, prototyping, visual design, and develop website or application. The tools and technologies listed below are those that I have used and am familiar with.
            </Typography>
            <List
              sx={{
                pt: 3
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: 'Poppins',
                  mt: 1
                }}
              >
                Graphics Design
              </Typography>
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  Adobe Photoshop
                </ListItem>
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  Adobe Illustrator
                </ListItem>
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  Adobe Xd
                </ListItem>
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  Figma
                </ListItem>
              </Box>
            </List>
            <List
              sx={{
                p: 0
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: 'Poppins',
                  mt: 1
                }}
              >
                Web Development
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  flexWrap: 'wrap'
                }}
              >
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  HTML 5
                </ListItem>
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  CSS 3
                </ListItem>
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  SASS
                </ListItem>
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  Bootstrap
                </ListItem>
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  JavaScript
                </ListItem>
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  JQuery
                </ListItem>
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  ReactJS
                </ListItem>
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  MySQL
                </ListItem>
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  Firebase
                </ListItem>
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  NodeJS
                </ListItem>
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  NPM
                </ListItem>
              </Box>
            </List>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default About