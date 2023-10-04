import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ProfessorSideBar from '../../Navs/Sidebar/ProfessorSidebar'
import { AddClassBox, ClassBox, ClassContainer, AddClassHeader, AddClassHeaderContainer } from '../Common'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddProfessorClassComp() {
  const navigate = useNavigate()
  const [user, setUser] = useState([])
  const [subjects, setSubjects] = useState([])
  const userId = localStorage.getItem('userId')

  useEffect(() => {
      axios.get(`http://localhost:5000/api/professor-user/${userId}`)
      .then(result => setUser(result.data))
      .catch(err => console.log(err))
  }, [userId])

  useEffect(() => {
    axios.get('http://localhost:5000/api/professor/subjects')
    .then(result => {
      setSubjects(result.data)
      console.log(result)
    })
    .catch(err => console.log(err))
  })
  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <ClassContainer>
          <ClassBox>
            <AddClassBox>
              <AddClassHeaderContainer>
                <AddClassHeader>Add a Subject</AddClassHeader>
              </AddClassHeaderContainer>
            </AddClassBox>
          </ClassBox>
        </ClassContainer>
      </Box>
    </Box>
  )
}

export default AddProfessorClassComp