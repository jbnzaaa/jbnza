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
              width: '360px',
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
            <Typography
              variant='paragraph'
              sx={{
                fontSize: 14,
                fontFamily: 'Poppins'
              }}
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At culpa consectetur pariatur quis. Delectus sapiente ab aliquid quaerat consectetur, minus nostrum! Nihil, veniam. <br/> Architecto neque quaerat unde repudiandae ipsum dicta error ut dolorum, consequuntur perferendis laudantium autem quae similique ducimus necessitatibus recusandae nesciunt cumque beatae illum? Sequi, dolorem dolor reiciendis quaerat sapiente quisquam dignissimos corporis fugit eum saepe consequatur aliquid?
            </Typography>
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
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At culpe ipsum dicta error ut dolorum ducimus illum? Sequi, dolorem dolor reiciendis quaerat sapiente quisquam dignissimos corporis fugit eum saepe consequatur aliquid?
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
                  HTML5
                </ListItem>
                <ListItem 
                  sx={{
                    fontSize: 13,
                    color: '#F25F4C',
                    width: 'auto',
                  }}
                >
                  CSS3
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
                  JavaScript
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
              </Box>
            </List>
          </Box>
        </Box>
      </Container>

      {/* <section className='about'>
        <div>
          <section id="a">
            <img src='https://images.unsplash.com/photo-1624561172888-ac93c696e10c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889'/>
          </section>
          <section id="b">
            <div id='about_me'>
              <h4>About Me.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At culpa consectetur pariatur quis. Delectus sapiente ab aliquid quaerat consectetur, minus nostrum! Nihil, veniam.</p>
              <p>Architecto neque quaerat unde repudiandae ipsum dicta error ut dolorum, consequuntur perferendis laudantium autem quae similique ducimus necessitatibus recusandae nesciunt cumque beatae illum? Sequi, dolorem dolor reiciendis quaerat sapiente quisquam dignissimos corporis fugit eum saepe consequatur aliquid?</p>
            </div>
            <div id='what_i_use'>
              <h5>What I use?</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At culpa consectetur pariatur quis. Delectus sapiente ab aliquid quaerat consectetur, minus nostrum! Nihil, veniam. Architecto neque quaerat unde repudiandae ipsum dicta error ut dolorum, consequuntur perferendis laudantium autem quae similique.</p>
              <div className='stack'>
                <section>
                  <h5>Creative Design</h5>
                  <ul>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Xd</li>
                    <li>Figma</li>
                  </ul>
                </section>
                <section>
                  <h5>Web Development</h5>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SASS</li>
                    <li>JavaSCript</li>
                    <li>Bootstrap</li>
                    <li>MySQL</li>
                    <li>Firebase</li>
                  </ul>
                </section>
              </div>
            </div>
          </section>
        </div>
      </section> */}
    </>
  )
}

export default About