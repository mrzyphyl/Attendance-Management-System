import React, { useEffect, useState }  from 'react'
import { Box } from '@mui/material'
import StudentSideBar from '../../../Navs/Sidebar/StudentSidebar'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

function StudentAttendanceBox() {
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  const [subjects, setSubjects] = useState([])
  const [attend, setAttendance] = useState([])

  const userId = localStorage.getItem('userId')

  const location = useLocation();
  const subjectData = location.state.subjectData;
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
  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
      </Box>
    </Box>
  )
}

export default StudentAttendanceBox