import React, { useEffect, useState }  from 'react'
import { Box } from '@mui/material'
import StudentSideBar from '../../../Navs/Sidebar/StudentSidebar'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { AddAttendance, AddAttendanceText, AddHeader, AppContainer, BodyContainer, Button, ButtonText, Container, Error, H2, Header, Image, ImageContiner } from './Styles'
import QR from '../../../../assets/icons/CODE.gif'

function StudentAttendanceBox() {
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  const [subjects, setSubjects] = useState([])
  const [attend, setAttendance] = useState([])
  const [addingError, setAddingError] = useState()

  const [addAttendaceData, setAddAttendaceData] = useState({
    subject_code: '',
    subject_name: '',
    subject_time: '',
    subject_instructor: '',
    department: '',
  })

  const userId = localStorage.getItem('userId')

  const location = useLocation()
  const subjectData = location.state.subjectData
  const attendanceData = location.state.attendanceData

  useEffect(() => {
    axios.get(`https://attendance-management-system-server.vercel.app/api/student-user/${userId}`)
    .then(result => {
      setUser(result.data)
      console.log('User Data: ', result.data)
    })
    .catch(err => console.log(err))
  }, [userId])

  useEffect(() => {
    if (!user.firstname && subjectData){
      const subjectId = subjectData._id
      axios.get(`https://attendance-management-system-server.vercel.app/api/student/subjects/${subjectId}`)
      .then(result => {
        setSubjects(result.data)
        console.log('Subject Data:', result.data)
        setAddAttendaceData({
          subject_code: result.data.subject_code,
          subject_name: result.data.subject_name,
          subject_time: result.data.subject_time,
          subject_instructor: result.data.subject_instructor,
          department: result.data.department,
        })
      })
      .catch(err => console.log(err))
    }
  }, [user.firstname, subjectData, subjects])

  useEffect(() => {
    if (!user.firstname && attendanceData){
      const attendanceId = attendanceData.map((attendanceItem) => attendanceItem._id)
      axios.get(`https://attendance-management-system-server.vercel.app/api/student-user-attendance/attendance/${attendanceId}`)
      .then(result => {
        setAttendance(result.data)
        console.log('Attendance Data:', result.data)
      })
      .catch(err => console.log(err))
    }
  }, [user.firstname, attendanceData, attend])

  const onClicked = () => {
    const attendanceId = attendanceData.map((attendanceItem) => attendanceItem._id)
    axios.post(`https://attendance-management-system-server.vercel.app/api/student-user-attendance/attendance/add/${attendanceId}`, { 
      ...addAttendaceData,
    })
    .then(result => {
        console.log('Attendance Data:', result.data)
        navigate('/time-table/check-attendance/student', {
          state: {
            attendanceId: attendanceId,
          },
        })
    })
    .catch(err => {
      console.log(err)
      setAddingError('You already have an attendance today')
    })
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
              {/* Error message */}
              {addingError && <Error>{addingError}</Error>}
              <AddAttendance onClick={onClicked}>
                <AddAttendanceText>Add Attendance Manually</AddAttendanceText>
              </AddAttendance>
              <Button onClick={() => {navigate('/student-timetable')}}>
                <ButtonText>Go Back</ButtonText>
              </Button>
            </BodyContainer>
          </Container>
        </AppContainer>
      </Box>
    </Box>
  )
}

export default StudentAttendanceBox