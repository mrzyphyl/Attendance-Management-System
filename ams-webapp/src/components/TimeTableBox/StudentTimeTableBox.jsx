import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StudentSideBar from '../Navs/Sidebar/StudentSidebar'
import { ClassAdded, ClassAddedBox, ClassBox, ClassContainer, ClassLabels, Classes } from './Common'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function StudentTimeTableBox() {
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  const [subjects, setSubjects] = useState([])
  const [attend, setAttendance] = useState([])

  const userId = localStorage.getItem('userId')

  const filteredSubjects = subjects.filter(subject => {
    const fullName = `${user.firstname} ${user.middlename} ${user.lastname}`
    return subject.student_enrolled === fullName
  })

  const filteredAttendance = attend.filter(attendanceItem => {
    const fullName = `${user.firstname} ${user.middlename} ${user.lastname}`
    return attendanceItem.fullname === fullName
  })

  console.log(filteredAttendance)

  useEffect(() => {
    axios.get(`http://localhost:5000/api/student-user/${userId}`)
    .then(result => {
      setUser(result.data)
      console.log('User Data: ', result.data)
    })
    .catch(err => console.log(err))
  }, [userId])

  useEffect(() => {
    if (!user.firstname){
      axios.get('http://localhost:5000/api/student/subjects')
      .then(result => {
        setSubjects(result.data)
        console.log('Subject Data:', result.data)
      })
      .catch(err => console.log(err))
    }
  })

  useEffect(() => {
    if (!user.firstname){
      axios.get('http://localhost:5000/api/student-user-attendance/attendance')
      .then(result => {
        setAttendance(result.data)
        console.log('Attendance Data:', result.data)
      })
      .catch(err => console.log(err))
    }
  }, [user.firstname, attend])
  
  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
      <ClassContainer>
          <ClassBox>
            <ClassAddedBox>
              {filteredSubjects.map((subject) => (
                <ClassAdded key={subject._id}>
                  <Classes onClick={() => {navigate('/student-timetable', { state: { subjectData: subject } })}}>
                    <ClassLabels>Subject Code: {subject.subject_code}</ClassLabels>
                    <ClassLabels>Subject Name: {subject.subject_name}</ClassLabels>
                    <ClassLabels>Subject Time: {subject.subject_time}</ClassLabels>
                    <ClassLabels>Subject Instructor: {subject.subject_instructor}</ClassLabels>
                  </Classes>
                </ClassAdded>
              ))}
            </ClassAddedBox>
          </ClassBox>
        </ClassContainer>
      </Box>
    </Box>
  )
}

export default StudentTimeTableBox