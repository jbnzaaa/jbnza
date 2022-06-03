import React from 'react'
import { ReactComponent as Logo } from '../img/jbnza_initial_logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faBehance, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Container, AppBar, Link, List } from '@mui/material';
 

function Nav() {
  return (
    <>
      <AppBar 
        position='static' 
        color='transparent' 
        sx = {{
          p: 2, 
          boxShadow: 0
        }}
      >
        <Container 
          componet='div' 
          sx = {{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}
        >
          <Link href="#">
            <Logo style={{ width: '50' }}/>
          </Link>
          <List 
            componet='div' 
            sx = {{ 
              display: 'flex', 
              justifyContent: 'space-between' 
            }}
          >
            <Link 
              href="#" 
              sx={{ 
                mx: 2, 
                fontSize: 14, 
                textDecoration: 'none', 
                color: '#0F0E17' 
              }}
            >
              About
            </Link>
            <Link 
              href="#"
              sx={{ 
                mx: 2, 
                fontSize: 14, 
                textDecoration: 'none', 
                color: '#0F0E17' 
              }}
            >
              Projects
            </Link>
            <Link 
              href="#" 
              sx={{ 
                mx: 2, 
                fontSize: 14, 
                textDecoration: 'none', 
                color: '#0F0E17' 
              }}
            >
              Contact
            </Link>
          </List>
          <List
            componet='div' 
            sx = {{ 
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Link 
              href='https://github.com/jbnzaaa' 
              target='https://github.com/jbnzaaa' 
              sx={{ 
                mx: 1
              }}
            >
              <FontAwesomeIcon 
                icon={faGithub} 
                style={{ 
                  color: '#0F0E17', 
                  fontSize: '1.3em',
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
                icon={faBehance} 
                style={{ 
                  color: '#0F0E17', 
                  fontSize: '1.3em',
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
                  fontSize: '1.3em',
                  display: 'flex',
                }}
              />
            </Link>
          </List>
        </Container>
      </AppBar>
    </>
  )
}

export default Nav