import { Box } from '@mui/material'
import React, { useState } from 'react'
import ProfessorSideBar from '../Navs/Sidebar/ProfessorSidebar'
import { BoxContent, HeroContainer, ImageContainer, WelcomeHeader, LogoImg, HomeContent, Paragraph, ButtonContainer, StartButton, CardContainer, HeaderContainer, CardBox } from './Common'
import LogoNoBG from '../../assets/Logo/Attendance Management System-Mobile no bg.png'
import { Modal } from '../Modal/Modal'
import { Marginer } from '../Marginer/Margin'
import Card from './Card'
import Footer from '../Navs/Footer/Footer'
import { useNavigate } from 'react-router-dom'

function ProfessorHomeBox() {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <BoxContent>
          <HeroContainer>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <HomeContent>
              <WelcomeHeader>Welcome to Attendance Management Systems</WelcomeHeader>
              <Marginer direction="vertical" margin={'0.1em'}/>
              <Paragraph>
                Aims to create a QR based real-time attendance of students per subject
              </Paragraph>
              <Marginer direction="vertical" margin={'0.5em'}/>
              <ButtonContainer>
                <StartButton onClick={() => {navigate("/professor-timetable")}}>
                  Get Started
                </StartButton>
                <StartButton onClick={openModal}>
                  Watch Video
                </StartButton>
              </ButtonContainer>
              <Marginer direction="vertical" margin={'0.5em'}/>
            </HomeContent>
            <ImageContainer>
              <LogoImg src={LogoNoBG}/>
            </ImageContainer>
          </HeroContainer>
        </BoxContent>
        <Marginer direction="vertical" margin={'1px'}/>
        <BoxContent>
          <HeaderContainer>
            <WelcomeHeader>
              3 Simple steps and you're in!
            </WelcomeHeader>
          </HeaderContainer>
        </BoxContent>
        <CardBox>
          <CardContainer>
            <Card/>
          </CardContainer>
        </CardBox>
        <Footer/>
      </Box>
    </Box>
  )
}


export default ProfessorHomeBox