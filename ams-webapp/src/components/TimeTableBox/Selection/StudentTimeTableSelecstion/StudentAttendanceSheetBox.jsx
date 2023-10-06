import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import StudentSideBar from '../../../Navs/Sidebar/StudentSidebar'
import styled from 'styled-components'
import Calendar from 'react-calendar'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, ButtonText, CheckAttendanceContainer, CheckAttendanceHeader, H2 } from './Styles'

function StudentAttendanceSheetBox() {
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  const [attendanceData, setAttendanceData] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedAttendance, setSelectedAttendance] = useState([])
  const [matchingAttendance, setMatchingAttendance] = useState([])

  const userId = localStorage.getItem('userId')

  const location = useLocation()
  const attendanceId = location.state.attendanceId
  const filteredAttendance = location.state.attendanceData

  const savedAttendanceData = JSON.parse(localStorage.getItem('attendanceData'))

  useEffect(() => {
    if(!user.firstname){
      axios.get(`http://localhost:5000/api/student-user/${userId}`)
      .then((result) => {
        setUser(result.data)
        console.log('User Data: ', result.data)
      })
      .catch((err) => console.log(err))
    }
  }, [userId, user.firstname])

  useEffect(() => {
    if (attendanceId) {
      axios.get(`http://localhost:5000/api/student-user-attendance/attendance/${attendanceId}`)
        .then((result) => {
          setAttendanceData(Array.isArray(result.data) ? result.data : [])
          localStorage.setItem('attendanceData', JSON.stringify(result.data))
          console.log('Attendance Data:', result.data)
        })
        .catch((err) => console.log(err))
    } else if (filteredAttendance) {
      const attendanceId = filteredAttendance.map((attendanceItem) => attendanceItem._id)
      axios.get(`http://localhost:5000/api/student-user-attendance/attendance/${attendanceId}`)
        .then((result) => {
          setAttendanceData(Array.isArray(result.data) ? result.data : [])
          localStorage.setItem('attendanceData', JSON.stringify(result.data))
          console.log('Attendance Data:', result.data)
        })
        .catch((err) => console.log(err))
    }
  }, [attendanceId, filteredAttendance])

  useEffect(() => {
    if(!user.firstname){
      const formattedDate = selectedDate.toISOString().split('T')[0]
      const matchingAttendance = savedAttendanceData.attendance.filter((attendanceItem) => {
        const attendanceTimeInDate = attendanceItem.attendanceTimeIn.split('T')[0]
        return attendanceTimeInDate === formattedDate;
      });
      console.log('Matching Attendance: ', matchingAttendance)
      setMatchingAttendance(matchingAttendance)
    }
  }, [selectedDate, savedAttendanceData, matchingAttendance, user.firstname])

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <AppContainer>
          <BoxContainer>
            <CheckAttendanceContainer>
              <CheckAttendanceHeader>View Attendance Calendar</CheckAttendanceHeader>
            </CheckAttendanceContainer>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              tileContent={({ date, view }) => {
                if (view === 'month') {
                  const formattedDate = date.toISOString().split('T')[0];
                  // Check if the formattedDate exists in matchingAttendance
                  const matchingAttendanceOnDate = matchingAttendance.filter(
                    (attendanceItem) => {
                      // Format the attendanceTimeIn date as "yyyy-MM-dd"
                      const attendanceTimeInDate = attendanceItem.attendanceTimeIn.split('T')[0];
                      return attendanceTimeInDate === formattedDate;
                    }
                  )
                  if (matchingAttendanceOnDate.length > 0) {
                    return <div className="calendar-dot" />;
                  }
                }
              }}
            />
            <H2>Attendance for {selectedDate.toDateString()}</H2>
            <ul>
              {matchingAttendance.length > 0 ? (
                matchingAttendance.map((attendanceItem) => (
                  <li key={attendanceItem.subject_code}>
                    <strong>{attendanceItem.attendanceTimeIn} </strong>
                    <strong>{attendanceItem.subject_code} </strong>
                    <strong>{attendanceItem.subject_name} </strong>
                    <strong>{attendanceItem.subject_instructor} </strong>
                    <strong>{attendanceItem.department} </strong>
                  </li>
                ))
              ) : (
                <li>No attendance data available</li>
              )}
            </ul>
            <Button onClick={() => navigate('/student-timetable')}>
              <ButtonText>Go Back</ButtonText>
            </Button>
          </BoxContainer>
        </AppContainer>
      </Box>
    </Box>
  )
}

const AppContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BoxContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 2px 2px 2px rgba(15, 15, 15, 0.28);
`

export default StudentAttendanceSheetBox