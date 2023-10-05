import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import StudentSidebar from '../Navs/Sidebar/StudentSidebar'
import { AddClass, AddClassBox, AddClassText, ClassAddedBox, ClassBox, ClassContainer } from './Common'
import { IoMdAddCircle } from 'react-icons/io'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function StudentClasses() {
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

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/student/subjects')
  //   .then(result => {
  //     setSubjects(result.data)
  //     console.log(result)
  //   })
  //   .catch(err => console.log(err))
  // })
  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSidebar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <ClassContainer>
          <ClassBox>
            <AddClassBox>
              <AddClass onClick={() => {navigate('/add-student-classes')}}>
                <AddClassText><IoMdAddCircle/>Add Class</AddClassText>
              </AddClass>
            </AddClassBox>
            <ClassAddedBox>
            </ClassAddedBox>
          </ClassBox>
        </ClassContainer>
      </Box>
    </Box>
  )
}

export default StudentClasses