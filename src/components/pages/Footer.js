import React from 'react'
import { Container, Box, Typography, List, Link } from '@mui/material'
import { RiFacebookFill, RiInstagramLine, RiGithubLine, RiBehanceFill, RiLinkedinFill } from 'react-icons/ri'
import { AiOutlineLine } from 'react-icons/ai'

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
            <AiOutlineLine
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
                sx={{ 
                  mx: 1
                }}
              >
                <RiFacebookFill
                  style={{ 
                    color: '#0F0E17', 
                    fontSize: 23,
                    color: '#FCFCFC',
                    display: 'flex',
                  }}
                />
              </Link>
              <Link 
                href='https://www.instagram.com/jbnza_/?hl=en' 
                sx={{ 
                  mx: 1
                }}
              >
                <RiInstagramLine
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
                sx={{ 
                  mx: 1
                }}
              >
                <RiBehanceFill
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
                sx={{ 
                  mx: 1
                }}
              >
                <RiGithubLine
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
                sx={{ 
                  mx: 1
                }}
              >
                <RiLinkedinFill
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