import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ProfessorSidebar from '../../../Navs/Sidebar/ProfessorSidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ProfessorAttendanceSelectionBox() {
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  const [subjects, setSubjects] = useState([])

  const userId = localStorage.getItem('userId')

  const filteredSubjects = subjects.filter(subject => {
    const fullName = `${user.firstname} ${user.middlename} ${user.lastname}`
    return subject.subject_instructor === fullName
  })

  useEffect(() => {
    axios.get(`http://localhost:5000/api/professor-user/${userId}`)
    .then(result => {
      setUser(result.data)
      console.log(result)
    })
    .catch(err => console.log(err))
  }, [userId])

  useEffect(() => {
    if (!user.firstname){
      axios.get('http://localhost:5000/api/professor/subjects')
      .then(result => {
        setSubjects(result.data)
        console.log(result)
      })
      .catch(err => console.log(err))
    }
  })
  
  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSidebar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
      </Box>
    </Box>
  )
}

export default ProfessorAttendanceSelectionBox