import React from 'react'
import { Container, Box, Typography, List, Link } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faGithub, faBehance, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
      <Box
        sx={{
          background: '#010104',
        }}
      >
        <Container
          sx={{
            height: '15vh',
            color: '#FCFCFC',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: 12
              }}
            >
              &copy; 2022 Jayson Beniza
            </Typography>
            <FontAwesomeIcon 
              icon={faArrowRightLong} 
              style={{ 
                marginLeft: 10,
                marginRight: 10
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: 12,
              }}
            >
              jbnzaaa@gmail.com
            </Typography>
          </Box>
          <Box>
            <List
              componet='div' 
              sx = {{ 
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Link 
                href='https://www.facebook.com/jbnzaaa' 
                target='https://www.facebook.com/jbnzaaa' 
                sx={{ 
                  mx: 1
                }}
              >
                <FontAwesomeIcon 
                  icon={faFacebookF} 
                  style={{ 
                    color: '#0F0E17', 
                    fontSize: 20,
                    color: '#FCFCFC',
                    display: 'flex',
                  }}
                />
              </Link>
              <Link 
                href='https://www.instagram.com/jbnza_/?hl=en' 
                target='https://www.instagram.com/jbnza_/?hl=en' 
                sx={{ 
                  mx: 1
                }}
              >
                <FontAwesomeIcon 
                  icon={faInstagram} 
                  style={{ 
                    color: '#0F0E17', 
                    fontSize: 23,
                    color: '#FCFCFC',
                    display: 'flex',
                  }}
                />
              </Link>
              <Link 
                href='https://www.behance.net/jbnza' 
                target='https://www.behance.net/jbnza' 
                sx={{ 
                  mx: 1
                }}
              >
                <FontAwesomeIcon 
                  icon={faGithub} 
                  style={{ 
                    color: '#0F0E17', 
                    fontSize: 23,
                    color: '#FCFCFC',
                    display: 'flex',
                  }}
                />
              </Link>
              <Link 
                href='https://github.com/jbnzaaa' 
                target='https://github.com/jbnzaaa' 
                sx={{ 
                  mx: 1
                }}
              >
                <FontAwesomeIcon 
                  icon={faBehance} 
                  style={{ 
                    color: '#0F0E17', 
                    fontSize: 23,
                    color: '#FCFCFC',
                    display: 'flex',
                  }}
                />
              </Link>
              <Link 
                href='https://www.linkedin.com/in/jaybeniza/' 
                target='https://www.linkedin.com/in/jaybeniza/' 
                sx={{ 
                  mx: 1
                }}
              >
                <FontAwesomeIcon 
                  icon={faLinkedinIn} 
                  style={{ 
                    color: '#0F0E17', 
                    fontSize: 23,
                    color: '#FCFCFC',
                    display: 'flex',
                  }}
                />
              </Link>
            </List>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Footer