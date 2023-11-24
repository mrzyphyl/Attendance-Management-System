import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ProfessorSidebar from '../../../Navs/Sidebar/ProfessorSidebar'
import styled from 'styled-components'
import Calendar from 'react-calendar'
import { Attendance, AttendanceAdded, AttendanceAddedBox, AttendanceBox, AttendanceLabels, AttendanceName, Button, ButtonText, H2, HeadingContainer } from './Styles'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment-timezone'


function ProfessorShowClassAttendanceBox() {
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [attendanceData, setAttendanceData] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedAttendanceData, setSelectedAttendanceData] = useState([])
  const [clickedDate, setClickedDate] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [matchingAttendance, setMatchingAttendance] = useState([])

  const userId = localStorage.getItem('userId')
  const fetchData = localStorage.getItem('attendanceData')
  const fetchDataStr = fetchData ? JSON.parse(fetchData) : null
  const targetTimezone = 'Asia/Manila'

  useEffect(() => {
    if(!user.firstname){
      axios.get(`https://attendance-management-system-server.vercel.app/api/professor-user/${userId}`)
      .then((result) => {
        setUser(result.data)
        console.log('User Data: ', result.data)
      })
      .catch((err) => console.log(err))
    }
  }, [userId, user.firstname])

  useEffect(() => {
    if (!user.firstname) {
      axios.get(`https://attendance-management-system-server.vercel.app/api/student-user-attendance/attendance`)
        .then((result) => {
          setAttendanceData(Array.isArray(result.data) ? result.data : [])
          console.log('Attendance Data:', result.data)
          localStorage.setItem('attendanceData', JSON.stringify(result.data))
        })
        .catch((err) => console.log(err))
    } 
  }, [user.firstname])

  useEffect(() => {
    if (!user.firstname && fetchDataStr && Array.isArray(fetchDataStr)) {
      const formattedDate = moment(selectedDate).tz(targetTimezone).format('YYYY-MM-DD')
      console.log('Formatted Date:', formattedDate)
      console.log('Fetched Data:', fetchDataStr)
      let hasDataForDate = false
      
      fetchDataStr.forEach((dataObject) => {
        if (dataObject && dataObject.attendance) {
          dataObject.attendance.forEach((attendanceItem) => {
            const attendanceTimeInDate = moment(attendanceItem.attendanceTimeIn).tz(targetTimezone).format('YYYY-MM-DD')
            if (attendanceTimeInDate === formattedDate) {
              hasDataForDate = true
              return
            }
          })
        }
      })
  
      if (hasDataForDate) {
        console.log('Matching Attendance: ', matchingAttendance)
        setMatchingAttendance(fetchDataStr)
      } else {
        console.log('No attendance data found.')
        setMatchingAttendance([])
      }
    }
  }, [selectedDate, fetchDataStr, user.firstname, matchingAttendance])

  const handleTileClick = (formattedDate) => {
    if (clickedDate === formattedDate) {
      setClickedDate(null)
      setSelectedAttendanceData([])
    } else {
      setClickedDate(formattedDate)
       // Filter the user data to find attendance records for the selected date
      const selectedData = fetchDataStr.map((user) => {
        return {
          fullname: user.fullname,
          attendance: user.attendance.filter((attendanceItem) => {
            const attendanceTimeInDate = moment(attendanceItem.attendanceTimeIn)
              .tz(targetTimezone)
              .format('YYYY-MM-DD')
            return attendanceTimeInDate === formattedDate
          }),
        }
      })
      console.log('selectedData', selectedData)
      setSelectedAttendanceData(selectedData)
    }
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

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
                  const formattedDate = moment(date).tz(targetTimezone).format('YYYY-MM-DD')
                  let hasDataForDate = false
                  let matchingAttendances = []
            
                  if (fetchDataStr && Array.isArray(fetchDataStr)) {
                    fetchDataStr.forEach((dataObject) => {
                      if (dataObject && dataObject.attendance) {
                        const matching = dataObject.attendance.filter((attendanceItem) => {
                          const attendanceTimeInDate = moment(attendanceItem.attendanceTimeIn).tz(targetTimezone).format('YYYY-MM-DD')
                          return attendanceTimeInDate === formattedDate
                        });
            
                        matchingAttendances = [...matchingAttendances, ...matching]
                      }
                    });
                  }
            
                  if (matchingAttendances.length > 0) {
                    hasDataForDate = true
                  }
            
                  return (
                    <div className="calendar-dot" onClick={() => { handleTileClick(formattedDate) }}>
                      {hasDataForDate ? '💀' : null}
                    </div>
                  );
                }
              }}
            />
            {/* <H2>Select Subject per time slot</H2> */}
            {/* Render selectedAttendanceData */}
            {selectedAttendanceData.length > 0 ? (
              <AttendanceAddedBox>
                  <H2>Attendance for {selectedDate.toDateString()}</H2>
                  {selectedAttendanceData.map((user) => (
                    <AttendanceAdded>
                      <AttendanceBox key={user.fullname}>
                        <AttendanceName>{user.fullname}</AttendanceName>
                          {user.attendance.map((attendanceItem) => (
                            <Attendance style={{listStyleType: 'none'}} key={attendanceItem._id}>
                              <AttendanceLabels>{moment(attendanceItem.attendanceTimeIn).tz(targetTimezone).format('YYYY-MM-DD HH:mm:ss')} </AttendanceLabels>
                              <AttendanceLabels>{attendanceItem.subject_code} </AttendanceLabels>
                              <AttendanceLabels>{attendanceItem.subject_name} </AttendanceLabels>
                              <AttendanceLabels>{attendanceItem.subject_instructor} </AttendanceLabels>
                              <AttendanceLabels>{attendanceItem.department} </AttendanceLabels>
                            </Attendance>
                          ))}
                      </AttendanceBox>
                    </AttendanceAdded>
                  ))}
              </AttendanceAddedBox>
            ) : (
              <p>Select a date</p>
            )}
            <Button onClick={() => navigate('/professor-timetable')}>
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