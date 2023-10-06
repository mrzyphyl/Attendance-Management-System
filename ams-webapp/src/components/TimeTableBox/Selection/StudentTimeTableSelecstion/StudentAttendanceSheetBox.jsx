import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import StudentSideBar from '../../../Navs/Sidebar/StudentSidebar'
import styled from 'styled-components'
import Calendar from 'react-calendar'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, ButtonText, CheckAttendanceContainer, CheckAttendanceHeader, H2 } from './Styles'

function StudentAttendanceSheetBox() {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const userId = localStorage.getItem('userId');

  const location = useLocation();
  const attendanceId = location.state.attendanceId
  const filteredAttendance = location.state.attendanceData

  useEffect(() => {
    if(!user.firstname){
      axios.get(`http://localhost:5000/api/student-user/${userId}`)
      .then((result) => {
        setUser(result.data);
        console.log('User Data: ', result.data)
      })
      .catch((err) => console.log(err))
    }
  }, [userId, user.firstname])

  useEffect(() => {
    if (attendanceId) {
      axios.get(`http://localhost:5000/api/student-user-attendance/attendance/${attendanceId}`)
        .then((result) => {
          setAttendanceData(result.data)
          console.log('Attendance Data:', result.data)
        })
        .catch((err) => console.log(err))
    } else if (filteredAttendance) {
      setAttendanceData(filteredAttendance)
      console.log(filteredAttendance)
    }
  }, [attendanceId, filteredAttendance])

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
                  const formattedDate = date.toISOString().split('T')[0]; // Extract the date part
                  const matchingAttendance = attendanceData.find(
                    (attendanceItem) => attendanceItem.date && attendanceItem.date.split('T')[0] === formattedDate
                  );
                  if (matchingAttendance) {
                    return <div className="calendar-dot" />;
                  }
                }
              }}
            />
            <H2>Attendance for {selectedDate.toDateString()}</H2>
            <ul>
              {attendanceData.length > 0 ? (
                attendanceData.map((attendanceItem) => (
                  <li key={attendanceItem.subject_code}>
                    <strong>{attendanceItem.subject_name}</strong> - {attendanceItem.status}
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