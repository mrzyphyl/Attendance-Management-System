import { Box } from '@mui/material'
import React, { useState } from 'react'
import { BoxContent, HeroContainer, ImageContainer, WelcomeHeader, LogoImg, HomeContent, Paragraph, ButtonContainer, StartButton } from './Common'
import StudentSideBar from '../Navs/Sidebar/StudentSidebar'
import LogoNoBG from '../../assets/Logo/Attendance Management System-Mobile no bg.png'
import { Modal } from '../Modal/Modal'

function StudentHomeBox() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <BoxContent>
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <HeroContainer>
            <HomeContent>
              <WelcomeHeader>Welcome to Attendance Management Systems</WelcomeHeader>
              <Paragraph>
                Aims to create a QR based real-time attendance of students per subject
              </Paragraph>
              <ButtonContainer>
                <StartButton>
                  Get Started
                </StartButton>
                <StartButton onClick={openModal}>
                  Watch Video
                </StartButton>
              </ButtonContainer>
            </HomeContent>
            <ImageContainer>
              <LogoImg src={LogoNoBG}/>
            </ImageContainer>
          </HeroContainer>  
        </BoxContent>
      </Box>
    </Box>
  )
}


export default StudentHomeBox