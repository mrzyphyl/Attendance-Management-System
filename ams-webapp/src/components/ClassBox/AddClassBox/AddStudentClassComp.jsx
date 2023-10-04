import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import StudentSidebar from '../../Navs/Sidebar/StudentSidebar'
import { AddClassBox, AddClassHeader, AddClassHeaderContainer, ClassBox, ClassContainer } from '../Common'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddStudentClassComp() {
  const navigate = useNavigate()
  const [user, setUser] = useState([])
  const [subjects, setSubjects] = useState([])
  const userId = localStorage.getItem('userId')

  useEffect(() => {
    axios.get(`http://localhost:5000/api/student-user/${userId}`)
    .then(result => {
      setUser(result.data)
      console.log(result)
    })
    .catch(err => console.log(err))
  }, [userId])

  useEffect(() => {
    axios.get('http://localhost:5000/api/student/subjects')
    .then(result => {
      setSubjects(result.data)
      console.log(result)
    })
    .catch(err => console.log(err))
  })
  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSidebar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <ClassContainer>
          <ClassBox>
            <AddClassBox>
              <AddClassHeaderContainer>
                <AddClassHeader>Enroll to a Subject</AddClassHeader>
              </AddClassHeaderContainer>
            </AddClassBox>
          </ClassBox>
        </ClassContainer>
      </Box>
    </Box>
  )
}

export default AddStudentClassComp