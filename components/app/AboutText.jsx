import React from "react"
import styled from 'styled-components'
import { Box } from '../atoms';

const AboutText = styled.p`
font-family: SF Pro Text;
font-size: 18px;
margin: 8px;
`
const AboutContainer = styled(Box)`
margin: 2vh;
margin-top: 4vh;
align-items: flex-start;
width: 75%;
@media (max-width: 768px) {
  margin-left: 1.5rem;
  margin-right: 1rem;
  margin-top:10.1vh;
  align-items: flex-start;
 }
`
const AboutLink = styled.a`
color:rgba(103, 128, 159, 1);
:any-link {
  text-decoration: underline;
}
`

const About = () => {
  return (
      <Box>
      <AboutContainer>
      <AboutText>Winchmore Hill Local.Life is part of the <AboutLink href="https://www.lovelocal.life/">LoveLocal.Life</AboutLink> project.  Check out the <AboutLink href="https://www.brixtonlocal.life/">Brixton</AboutLink>, <AboutLink href="https://www.sydenhamlocal.life/">Sydenham</AboutLink>, <AboutLink href="https://www.lewishamlocal.life/">Lewisham</AboutLink> and <AboutLink href="https://www.wokinghamlocal.life/">Wokingham</AboutLink> sites!</AboutText>
      <AboutText>Amba Horton coordinated the entries for Winchmore Hill.</AboutText>
      <AboutText>The information on this website is crowd-sourced using a Google spreadsheet. To add an entry or update an existing one please email <AboutLink href = "mailto: amba.horton@yahoo.co.uk">Amba</AboutLink>.</AboutText>
      <AboutText><AboutLink href="https://www.lovelocal.life/">LoveLocal.Life</AboutLink> supports local communities during the COVID-19 lockdown by helping them easily set up websites that spread the word about independent businesses and services in their area.</AboutText>  
      <AboutText>This includes businesses that are still operational, new delivery services and other activities, such as community groups and local support.</AboutText>
      <AboutText>To set up a similar project in your area please go to the <AboutLink href="https://www.lovelocal.life/">LoveLocal.Life</AboutLink> website or <AboutLink href = "mailto: brixtonlocal@gmail.com">email</AboutLink> us.</AboutText>
      </AboutContainer>
    </Box>
  )
}

export default About
