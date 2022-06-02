import React from 'react'
import { ReactComponent as Logo } from '../img/jbnza_initial_logo.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithubSquare, faBehanceSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { RiGithubLine, RiBehanceFill, RiLinkedinFill } from 'react-icons/ri'
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
              href='https://www.behance.net/jbnza' 
              sx={{ 
                mx: 1
              }}
            >
              <RiBehanceFill
                style={{ 
                  color: '#0F0E17', 
                  fontSize: 23,
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
                  display: 'flex',
                }}
              />
            </Link>
          </List>
        </Container>
      </AppBar>

      {/* <nav>
        <div>
          <Link to='/'>
            <Logo id='logo'/>
          </Link>
        </div>
        <div id='page_links'>
          <ul>
            <li>
              <Link to='/about' style={{ textDecoration: 'none', color: '#0F0E17' }}>About</Link>
            </li>
            <li>
              <Link to='/projects' style={{ textDecoration: 'none', color: '#0F0E17' }}>Projects</Link>
            </li>
            <li>
              <Link to='/contact' style={{ textDecoration: 'none', color: '#0F0E17' }}>Contact</Link>
            </li>
          </ul>
        </div>
        <div id='social_links'>
          <ul>
            <li>
              <FontAwesomeIcon icon={ faGithubSquare } size='2x' style={{ color: '#0F0E17' }}/>
            </li>
            <li>
              <FontAwesomeIcon icon={ faBehanceSquare } size='2x' style={{ color: '#0F0E17' }}/>
            </li>
            <li>
              <FontAwesomeIcon icon={ faLinkedin } size='2x' style={{ color: '#0F0E17' }}/>
            </li>
          </ul>
        </div>
      </nav> */}
    </>
  )
}

export default Nav