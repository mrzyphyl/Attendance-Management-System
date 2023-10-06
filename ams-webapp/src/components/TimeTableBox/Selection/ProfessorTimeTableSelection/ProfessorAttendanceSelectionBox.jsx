import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ProfessorSidebar from '../../../Navs/Sidebar/ProfessorSidebar'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContainer, BoxContainer } from '../../Common'

function ProfessorAttendanceSelectionBox() {
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  const [subjects, setSubjects] = useState([])

  const userId = localStorage.getItem('userId')

  const location = useLocation()
  const subjectData = location.state.subjectData

  useEffect(() => {
    axios.get(`http://localhost:5000/api/professor-user/${userId}`)
    .then(result => {
      setUser(result.data)
      console.log('User Data: ', result.data
      )
    })
    .catch(err => console.log(err))
  }, [userId])

  useEffect(() => {
    if (!user.firstname){
      const subjectId = subjectData._id
      axios.get(`http://localhost:5000/api/professor/subjects/${subjectId}`)
      .then(result => {
        setSubjects(result.data)
        console.log('Subject Data: ', result.data)
      })
      .catch(err => console.log(err))
    }
  }, [user.firstname, subjectData, subjects])
  
  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSidebar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <AppContainer>
          <BoxContainer>
          </BoxContainer>
        </AppContainer>
      </Box>
    </Box>
  )
}

export default ProfessorAttendanceSelectionBox