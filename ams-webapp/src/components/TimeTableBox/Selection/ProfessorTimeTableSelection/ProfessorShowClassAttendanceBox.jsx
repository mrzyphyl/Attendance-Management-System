import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ProfessorSidebar from '../../../Navs/Sidebar/ProfessorSidebar'
import styled from 'styled-components'
import Calendar from 'react-calendar'
import { Button, ButtonText, H2, HeadingContainer } from './Styles'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment-timezone'


function ProfessorShowClassAttendanceBox() {
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  const [attendanceData, setAttendanceData] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedAttendanceData, setSelectedAttendanceData] = useState([])
  const [matchingAttendance, setMatchingAttendance] = useState([])
  const [clickedDate, setClickedDate] = useState(null)

  const userId = localStorage.getItem('userId')
  const fetchData = localStorage.getItem('attendanceData')
  const fetchDataStr = fetchData ? JSON.parse(fetchData) : null
  const targetTimezone = 'Asia/Manila'

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
    if (!user.firstname) {
      axios.get(`http://localhost:5000/api/student-user-attendance/attendance`)
        .then((result) => {
          setAttendanceData(Array.isArray(result.data) ? result.data : [])
          console.log('Attendance Data:', result.data)
        })
        .catch((err) => console.log(err))
    } 
  }, [user.firstname])

  useEffect(() => {
    if (!user.firstname) {
      const formattedDate = moment(selectedDate).tz(targetTimezone).format('YYYY-MM-DD')
      console.log('Formatted Date:', formattedDate)
      console.log('Fetch Data:', fetchDataStr)
  
      if (fetchDataStr && fetchDataStr.attendance) {
        console.log('Attendance Data:', fetchDataStr.attendance);
        const matchingAttendance = fetchDataStr.attendance.filter((attendanceItem) => {
          const attendanceTimeInDate = moment(attendanceItem.attendanceTimeIn).tz(targetTimezone).format('YYYY-MM-DD')
          console.log('Attendance Time In Date:', attendanceTimeInDate)
          return attendanceTimeInDate === formattedDate
        });
  
        console.log('Matching Attendance: ', matchingAttendance)
        setMatchingAttendance(matchingAttendance)
      } else {
        console.log('No attendance data found.')
        setMatchingAttendance([]);
      }
    }
  }, [selectedDate, fetchDataStr, user.firstname])

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleTileClick = (formattedDate) => {
    if (clickedDate === formattedDate) {
      setClickedDate(null)
      setSelectedAttendanceData([])
    } else {
      setClickedDate(formattedDate)
      const selectedData = fetchDataStr?.attendance?.filter((attendanceItem) => {
        const attendanceTimeInDate = moment(attendanceItem.attendanceTimeIn).tz(targetTimezone).format('YYYY-MM-DD')
        return attendanceTimeInDate === formattedDate
      })
      setSelectedAttendanceData(selectedData)
    }
  }
  
  const allAttendanceItems = attendanceData.map((userItem) => (
    <div key={userItem._id}>
      <H2>{userItem.fullname}</H2>
      <ul>
        {userItem.attendance.map((attendanceItem) => (
          <li key={attendanceItem._id}>
            <strong>{attendanceItem.attendanceTimeIn} </strong>
            <strong>{attendanceItem.subject_code} </strong>
            <strong>{attendanceItem.subject_name} </strong>
            <strong>{attendanceItem.subject_instructor} </strong>
            <strong>{attendanceItem.department} </strong>
          </li>
        ))}
      </ul>
    </div>
  ))

  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSidebar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <AppContainer>
          <BoxContainer>
            <HeadingContainer>
              <h1>Check Attendance</h1>
            </HeadingContainer>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              tileContent={({ date, view }) => {
                if (view === 'month') {
                  const formattedDate = moment(date).tz(targetTimezone).format('YYYY-MM-DD'); // Format the date
                  const hasDataForDate = fetchDataStr?.attendance?.some((attendanceItem) => {
                    const attendanceTimeInDate = moment(attendanceItem.attendanceTimeIn).tz(targetTimezone).format('YYYY-MM-DD'); // Format the attendance date
                    return attendanceTimeInDate === formattedDate;
                  });
            
                  if (hasDataForDate) {
                    return (
                      <div className="calendar-dot" onClick={() => { handleTileClick(formattedDate) }}>
                        Present
                      </div>
                    );
                  }
                }
              }}
            />
            <H2>Select Subject per time slot</H2>
            <ul>
              {allAttendanceItems.length > 0 ? (
                allAttendanceItems
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

export default ProfessorShowClassAttendanceBox