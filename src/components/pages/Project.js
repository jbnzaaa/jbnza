import React from 'react'
import { Fade } from 'react-reveal'
import { Container, Box, ListItem, Button } from '@mui/material'

import { styled } from '@mui/material/styles'

const ProjectContainer = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    padding: '50px 0',
  },
  [theme.breakpoints.up('lg')]: {
    paddingY: 15
  },
}))

const TypographyH4 = styled('h4')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 30,
    color: '#0F0E17',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 35,
    color: '#0F0E17',
  },
}))

const TypographyP = styled('p')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
    width: '100%',
    color: '#2B2C34'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 14,
    width: '100%',
    color: '#2B2C34'
  },
}))

const CardItem = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
}))

const ProjectMedia = styled('img')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginBottom: 40,
  },
  [theme.breakpoints.up('lg')]: {
    width: '500px',
    display: 'block',
  },
}))

const ProjectContent = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '0', 
    margin: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    width: '1000%',
    padding: '0', 
    paddingLeft: 80
  },
}))

const TypographySpan = styled('p')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 10, 
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 12, 
  },
}))

const StackList = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex', 
    width: '100%',  
    fontSize: 11, 
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 13, 
  },
}))

const ButtonTypography = styled('p')(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 12, 
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 14, 
  },
}))

function Project() {

  const container = {
    paddingY: 15
  }

  const typographyH4 = {
    fontSize: 35,
    fontFamily: 'Poppins',
    fontWeight: 700,
    mb: 2,
    color: '#0F0E17',
  }

  const paragraphA = {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#0F0E17',
  }

  const paragraphB = {
    fontSize: 12, 
    fontFamily: 'Poppins ', 
    pb: 1/5, 
    color: '#FF8906', 
    textTransform: 'uppercase' 
  }

  const paragraphC = {
    fontSize: 12, 
    fontFamily: 'Poppins ', 
    pb: 1/5, 
    color: '#0F0E17', 
    textTransform: 'uppercase',
  }

  const TypographyC = {
    fontSize: 14, 
    fontFamily: 'Poppins', 
    width: '80%', 
    flexWrap: 'wrap', 
    pb: 3,
    lineHeight: 2,
    color: '#0F0E17', 
  }

  const boxA = {
    pt: 8
  }

  const boxB = {
    display: 'flex' 
  }

  const cardA = {
    display: 'flex',
    width: '100%',
    margin: 'auto',
    background: 'transparent',
    boxShadow: 0,
    borderRadius: 0,
    mb: 7
  }

  // const cardB = {
  //   display: 'flex',
  //   width: '100%',
  //   margin: 'auto',
  //   background: 'transparent',
  //   boxShadow: 0,
  //   borderRadius: 0,
  //   mb: 7
  // }

  const cardContentA = {
    width: '100%',
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    p: 0, 
    pl: 8 
  }

  // const cardContentB = {
  //   width: '100%', 
  //   display: 'flex', 
  //   flexDirection: 'column', 
  //   justifyContent: 'center', 
  //   p: 0, 
  //   pr: 8 
  // }

  const cardMedia = {
    width: '500px'
  }

  const stackList = {
    display: 'flex', 
    width: '70%',  
    fontSize: 13, 
    fontFamily: 'Poppins', 
    p: 0, 
    flexWrap: 'wrap', 
    pb: 3, 
    color: '#F25F4C' ,
    lineHeight: 2
  }

  const stackItem = {
    width: 'auto', 
    p: 0, 
    mr: 2 
  }

  const linkButton = {
    border: 'none',
    background: '#0F0E17',
    width: '165px',
    height: '40px',
    borderRadius: 0,
    marginRight: '10px',
    '&:hover': {
      background: '#0F0E17',
      color: '#fcfcfc'
    }
  }

  const linkButtons = {
    border: 'none',
    background: '#0F0E17',
    width: '190px',
    height: '40px',
    borderRadius: 0,
    marginTop: '10px',
    // float: 'right',
    '&:hover': {
      background: '#0F0E17',
      color: '#fcfcfc'
    }
  }

  const typographyButton = {
    color: '#FCFCFC',
    textTransform: 'lowercase',
    fontSize: 14, 
    fontFamily: 'Poppins',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const typographyButtons = {
    color: '#0F0E17',
    textTransform: 'lowercase',
    fontSize: 14, 
    fontWeight: '600',
    fontFamily: 'Poppins',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  
  const viewMoreProject = {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // textAlign: 'center',
    mt: 12
  }

  return (
    <>
      <Container>
        <ProjectContainer sx={container} id='projects'>
          <Fade bottom delay={100}>
            <TypographyH4 variant='h4'sx={typographyH4}>
                Some of the projects I've created.
            </TypographyH4>
          </Fade>
          <Fade bottom delay={150}>
            <TypographyP variant='body1'sx={paragraphA}>
                {/* This is a collection of projects I've worked on as a user interface designer and web developer. */}
                This is a collection of projects I've worked on throughout my journey as user interface designer and front-end web developer.
            </TypographyP>
          </Fade>
          <Box sx={boxA}>
            {/* Daily Discount */}
            <CardItem sx={cardA}>
              <Fade left delay={100}>
                <ProjectMedia sx={cardMedia} src={require('../img/daily_discount_mockup.png')}/>
              </Fade>
              <ProjectContent sx={cardContentA}>
                <Fade bottom delay={150}>
                  <TypographySpan variant='body1' sx={paragraphB}>
                    Team {'>'} Ongoing Web Project
                  </TypographySpan>
                </Fade>
                <Fade bottom delay={200}>
                  <TypographyH4 variant='h4' sx={typographyH4}>
                      Daily Discount
                  </TypographyH4>
                </Fade>
                <Fade bottom delay={250}>
                  <TypographyP variant='body1' sx={TypographyC}>
                      A web-based application that offers online-transactions for discounted mobile game credits.
                  </TypographyP>
                </Fade>
                <Fade bottom delay={300}>
                  <StackList sx={stackList}>
                    <ListItem sx={stackItem}>ReactJS</ListItem>
                    <ListItem sx={stackItem}>Tailwind CSS</ListItem>
                    {/* <ListItem sx={stackItem}>Node JS</ListItem> */}
                    <ListItem sx={stackItem}>Vercel</ListItem>
                    <ListItem sx={stackItem}>Figma</ListItem>
                  </StackList>
                </Fade>
                <Fade bottom delay={350}>
                  <Box sx={boxB}>
                    {/* <Button href='https://www.behance.net/gallery/146698815/Portfolio' target='https://www.behance.net/gallery/146698815/Portfolio' variant='contained' sx={linkButton}>
                      <ButtonTypography sx={typographyButton}>view in behance</ButtonTypography> 
                    </Button> */}
                    <Button href='https://daily-discount.vercel.app/' target='https://daily-discount.vercel.app/' variant='contained' sx={linkButton}>
                      <ButtonTypography sx={typographyButton}>launch app</ButtonTypography>
                    </Button>
                  </Box>
                </Fade>
              </ProjectContent>
            </CardItem>
            {/* JBNZA */}
            <CardItem sx={cardA}>
              <Fade left delay={100}>
                <ProjectMedia sx={cardMedia} src={require('../img/jbnza_mockup.png')}/>
              </Fade>
              <ProjectContent sx={cardContentA}>
                <Fade bottom delay={150}>
                  <TypographySpan variant='body1' sx={paragraphB}>
                      {/* Personal Project */}
                      Personal {'>'} Web Project
                  </TypographySpan>
                </Fade>
                <Fade bottom delay={200}>
                  <TypographyH4 variant='h4' sx={typographyH4}>
                      jbnza
                  </TypographyH4>
                </Fade>
                <Fade bottom delay={250}>
                  <TypographyP variant='body1' sx={TypographyC}>
                      {/* A web-based portfolio that contains my recent developed projects and personal information summary. */}
                      A web-based portfolio that showcases my most current projects as well as an overview of my personal information.
                  </TypographyP>
                </Fade>
                <Fade bottom delay={300}>
                  <StackList sx={stackList}>
                    <ListItem sx={stackItem}>ReactJS</ListItem>
                    <ListItem sx={stackItem}>Material UI</ListItem>
                    <ListItem sx={stackItem}>Vercel</ListItem>
                    <ListItem sx={stackItem}>Figma</ListItem>
                  </StackList>
                </Fade>
                <Fade bottom delay={350}>
                  <Box sx={boxB}>
                    {/* <Button href='https://www.behance.net/gallery/146698815/Portfolio' target='https://www.behance.net/gallery/146698815/Portfolio' variant='contained' sx={linkButton}>
                      <ButtonTypography sx={typographyButton}>view in behance</ButtonTypography>
                    </Button> */}
                    <Button href='https://jbnza.vercel.app' target='https://jbnza.vercel.app' variant='contained' sx={linkButton}>
                      <ButtonTypography sx={typographyButton}>launch app</ButtonTypography>
                    </Button>
                  </Box>
                </Fade>
              </ProjectContent>
            </CardItem>
            {/* ReGain */}
            <CardItem sx={cardA}>
              <Fade left delay={100}>
                <ProjectMedia sx={cardMedia} src={require('../img/regain_mockup.png')}/>
              </Fade>
              <ProjectContent sx={cardContentA}>
                <Fade bottom delay={150}>
                  <TypographySpan variant='body1' sx={paragraphB}>
                    Team {'>'} Web Project
                  </TypographySpan>
                </Fade>
                <Fade bottom delay={200}>
                  <TypographyH4 variant='h4' sx={typographyH4}>
                      ReGain
                  </TypographyH4>
                </Fade>
                <Fade bottom delay={250}>
                  <TypographyP variant='body1' sx={TypographyC}>
                      A web-based self-assessment and e-journal system with chatbot and student counselor assistance for troubled student in STI College Novaliches.
                  </TypographyP>
                </Fade>
                <Fade bottom delay={300}>
                  <StackList sx={stackList}>
                    <ListItem sx={stackItem}>HTML</ListItem>
                    <ListItem sx={stackItem}>CSS</ListItem>
                    <ListItem sx={stackItem}>SASS</ListItem>
                    <ListItem sx={stackItem}>JavaScript</ListItem>
                    <ListItem sx={stackItem}>JQuery</ListItem>
                    <ListItem sx={stackItem}>Bootstrap</ListItem>
                    <ListItem sx={stackItem}>NodeJS</ListItem>
                    <ListItem sx={stackItem}>Cloud Firestore</ListItem>
                    <ListItem sx={stackItem}>Firebase Admin</ListItem>
                    <ListItem sx={stackItem}>Google Cloud Storage</ListItem>
                  </StackList>
                </Fade>
                <Fade bottom delay={350}>
                  <Box sx={boxB}>
                    {/* <Button href='https://www.behance.net/gallery/144867729/ReGain-UI-Redesign' target='https://www.behance.net/gallery/144867729/ReGain-UI-Redesign' variant='contained' sx={linkButton}>
                      <ButtonTypography sx={typographyButton}>view in behance</ButtonTypography>
                    </Button> */}
                    <Button href='https://regain-caps.web.app' target='https://regain-caps.web.app' variant='contained' sx={linkButton}>
                      <ButtonTypography sx={typographyButton}>launch app</ButtonTypography>
                    </Button>
                  </Box>
                </Fade>
              </ProjectContent>
            </CardItem>
          </Box>
          {/* View all ui projects */}
          <Fade bottom delay={150}>
            <Box sx={viewMoreProject}>
              <TypographySpan variant='body1' sx={paragraphC}>
                Take a look at my UI designs
              </TypographySpan>
              <Button href='https://www.behance.net/jbnza' target='https://www.behance.net/jbnza' variant='contained' sx={linkButtons}>
                <ButtonTypography sx={typographyButton}>view all projects</ButtonTypography> 
              </Button>
            </Box>
          </Fade>
        </ProjectContainer>
      </Container>
    </>
  )
}

export default Project