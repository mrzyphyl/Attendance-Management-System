import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ProfessorSidebar from '../../../Navs/Sidebar/ProfessorSidebar'
import styled from 'styled-components'
import Calendar from 'react-calendar'
import { Button, ButtonText, H2, HeadingContainer } from './Styles'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function ProfessorShowClassAttendanceBox() {
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  const [attendanceData, setAttendanceData] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [matchingAttendance, setMatchingAttendance] = useState([])

  const userId = localStorage.getItem('userId')

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

  // useEffect(() => {
  //   if (!user.firstname) {
  //     const formattedDate = selectedDate.toISOString()
  //     const matchingAttendance = attendanceData.filter((attendanceItem) => {
  //       const attendanceTimeInDate = attendanceItem.attendanceTimeIn
  //       return attendanceTimeInDate === formattedDate;
  //     });
  //     console.log('Matching Attendance: ', matchingAttendance);
  //     setMatchingAttendance(matchingAttendance);
  //   }
  // }, [selectedDate, attendanceData, user.firstname])

  const handleDateChange = (date) => {
    setSelectedDate(date);
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

//   const formattedDate = selectedDate.toISOString()
//   const filteredAttendance = matchingAttendance.filter((attendanceItem) => {
//   const attendanceTimeIn = attendanceItem?.attendanceTimeIn;
//   if (attendanceTimeIn && typeof attendanceTimeIn === 'string') {
//     const attendanceTimeInDate = attendanceTimeIn
//     return attendanceTimeInDate === formattedDate;
//   }
//   return false;
// })

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
              // tileContent={({ date, view }) => {
              //   if (view === 'month') {
              //     const formattedDate = date.toISOString()
              //     // Check if the formattedDate exists in matchingAttendance
              //     const matchingAttendanceOnDate = matchingAttendance.filter((attendanceItem) => {
              //       if (attendanceItem && attendanceItem.attendanceTimeIn) {
              //         // Check if attendanceItem and attendanceTimeIn are defined before splitting the string
              //         const attendanceTimeInDate = attendanceItem.attendanceTimeIn
              //         return attendanceTimeInDate === formattedDate;
              //       }
              //       return false;
              //     });
              //     if (matchingAttendanceOnDate.length > 0) {
              //       return <div className="calendar-dot" />;
              //     }
              //   }
              // }}
            />
            <H2>Attendance for {selectedDate.toDateString()}</H2>
            {/* <ul>
              {filteredAttendance.length > 0 ? (
                filteredAttendance.map((attendanceItem) => (
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
            </ul> */}
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