import React, { useEffect, useState }  from 'react'
import { Box } from '@mui/material'
import StudentSideBar from '../../../Navs/Sidebar/StudentSidebar'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { AddAttendance, AddAttendanceText, AddHeader, AppContainer, BodyContainer, Container, H2, Header, Image, ImageContiner } from './Styles'
import QR from '../../../../assets/icons/CODE.gif'

function StudentAttendanceBox() {
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  const [subjects, setSubjects] = useState([])
  const [attend, setAttendance] = useState([])

  const userId = localStorage.getItem('userId')

  const location = useLocation();
  const subjectData = location.state.subjectData
  const attendanceData = location.state.attendanceData

  useEffect(() => {
    axios.get(`http://localhost:5000/api/student-user/${userId}`)
    .then(result => {
      setUser(result.data)
      console.log('User Data: ', result.data)
    })
    .catch(err => console.log(err))
  }, [userId])

  useEffect(() => {
    if (!user.firstname && subjectData){
      const subjectId = subjectData._id
      axios.get(`http://localhost:5000/api/student/subjects/${subjectId}`)
      .then(result => {
        setSubjects(result.data)
        console.log('Subject Data:', result.data)
      })
      .catch(err => console.log(err))
    }
  }, [user.firstname, subjectData, subjects])

  useEffect(() => {
    if (!user.firstname && attendanceData){
      const attendanceId = attendanceData.map((attendanceItem) => attendanceItem._id)
      axios.get(`http://localhost:5000/api/student-user-attendance/attendance/${attendanceId}`)
      .then(result => {
        setAttendance(result.data)
        console.log('Attendance Data:', result.data)
      })
      .catch(err => console.log(err))
    }
  }, [user.firstname, attendanceData, attend])

  const onClicked = () => {

  }

  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <AppContainer>
          <Container>
            <ImageContiner>
              <Image src={QR}/>
            </ImageContiner>
            <BodyContainer>
              <Header>Scan the QR</Header>
              <AddHeader>your instructor has given to you</AddHeader>
              <H2>or</H2>
              <AddAttendance onClick={onClicked}>
                <AddAttendanceText>Add Attendance Manually</AddAttendanceText>
              </AddAttendance>
            </BodyContainer>
          </Container>
        </AppContainer>
      </Box>
    </Box>
  )
}

export default StudentAttendanceBox