import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ProfessorSideBar from '../Navs/Sidebar/ProfessorSidebar'
import { ButtonBox, HeaderContainer, HeaderText, ImageContainer, Info, Label, ProfileContainer, ProfileImage, SettingsBox, SettingsContainer, SubmitButton, UserInfo, UserInfoContainer, UserInformationBox } from './Common'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ProfessorProfileSettings() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  const userId = localStorage.getItem('userId')

  useEffect(() => {
    axios.get(`https://attendance-management-system-server.vercel.app/api/professor-user/${userId}`)
    .then(response => {
      setUserData(response.data)
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    })
  }, [userId])
  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <SettingsContainer>
          <SettingsBox>
            <HeaderContainer>
              <HeaderText>Profile</HeaderText>
            </HeaderContainer>
            <ProfileContainer>
              <ImageContainer>
                <ProfileImage src='https://media4.giphy.com/media/GVsFvnRc0xNughBJPI/giphy.gif?cid=ecf05e47qz27dfixyioc5elgagd87d27uwtxfmzb5k9lwoon&ep=v1_gifs_search&rid=giphy.gif&ct=g'/>
              </ImageContainer>
              <UserInfoContainer>
                <UserInformationBox>
                  <UserInfo>
                    <Label>Name</Label>
                    <Info>{userData?.lastname}, {userData?.firstname} {userData?.middlename}</Info>
                  </UserInfo>
                  <UserInfo>
                    <Label>Age</Label>
                    <Info>{userData?.age}</Info>
                  </UserInfo>
                </UserInformationBox>
                <UserInformationBox>
                  <UserInfo>
                    <Label>Birthday</Label>
                    <Info>{userData?.birthday}</Info>
                  </UserInfo>
                  <UserInfo>
                    <Label>Gender</Label>
                    <Info>{userData?.gender}</Info>
                  </UserInfo>
                </UserInformationBox>
                <UserInformationBox>
                  <UserInfo>
                    <Label>Address</Label>
                    <Info>{userData?.address}</Info>
                  </UserInfo>
                </UserInformationBox>
                <UserInformationBox>
                  <UserInfo>
                    <Label>Marital Status</Label>
                    <Info>{userData?.user_status}</Info>
                  </UserInfo>
                  <UserInfo>
                    <Label>Employee Number</Label>
                    <Info>{userData?.employee_number}</Info>
                  </UserInfo>
                </UserInformationBox>
                <UserInformationBox>
                  <UserInfo>
                    <Label>Department</Label>
                    <Info>{userData?.department}</Info>
                  </UserInfo>
                  <UserInfo>
                    <Label>Email</Label>
                    <Info>{userData?.email}</Info>
                  </UserInfo>
                </UserInformationBox>
                <ButtonBox>
                  <SubmitButton onClick={() => {navigate('/professor-editprofile')}}>Edit Profile</SubmitButton>
                  <SubmitButton onClick={() => {navigate('/changepass')}}>Change Password</SubmitButton>
                </ButtonBox>
              </UserInfoContainer>
            </ProfileContainer>
          </SettingsBox>
        </SettingsContainer>
      </Box>
    </Box>
  )
}

export default ProfessorProfileSettings
