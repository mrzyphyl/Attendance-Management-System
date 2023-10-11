import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ProfessorSidebar from '../../../Navs/Sidebar/ProfessorSidebar'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { AddHeader, AnotherH2, AppContainer, BodyContainer, BoxContainer, Button, ButtonText, CheckAttendance, CheckAttendanceText, H2, Header, QRContainer } from './Styles'
import QRCode from 'react-qr-code'

function ProfessorAttendanceSelectionBox() {
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  const [subjects, setSubjects] = useState([])

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
  const attendanceId = location.state.attendanceData

  useEffect(() => {
    axios.get(`http://localhost:5000/api/professor-user/${userId}`)
    .then(result => {
      setUser(result.data)
      console.log('User Data: ', result.data
      )
    })
    .catch(err => console.log(err))
  }, [userId])

  useEffect(() => {
    if (!user.firstname){
      const subjectId = subjectData._id
      axios.get(`http://localhost:5000/api/professor/subjects/${subjectId}`)
      .then(result => {
        setSubjects(result.data)
        console.log('Subject Data: ', result.data)
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
  }, [user.firstname, subjectData, subjects, addAttendaceData])
  

  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSidebar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <AppContainer>
          <BoxContainer>
            <QRContainer>
              <QRCode
              size={300}
              style={{ height: "auto", maxWidth: "100%", width: "100%"}}
              value={JSON.stringify(addAttendaceData)}
              viewBox={`0 0 256 256`}
              >
              </QRCode>
            </QRContainer>
            <BodyContainer>
              <Header>Scan to add your Attendance</Header>
              <AddHeader>Very easy to use, just scan then you're already in for the class!</AddHeader>
              <H2>or you can manually add your</H2>
              <AnotherH2>attendance in your browser.</AnotherH2>
              <CheckAttendance onClick={() => {navigate('/time-table/check-attendance/professor')}}>
                <CheckAttendanceText>Check Student Attendance</CheckAttendanceText>
              </CheckAttendance>
              <Button onClick={() => {navigate('/professor-timetable')}}>
                <ButtonText>Go Back</ButtonText>
              </Button>
            </BodyContainer>
          </BoxContainer>
        </AppContainer>
      </Box>
    </Box>
  )
}

export default ProfessorAttendanceSelectionBox