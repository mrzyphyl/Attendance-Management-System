import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProfessorSideBar from '../Navs/Sidebar/ProfessorSidebar'
import { AddClass, AddClassBox, AddClassText, ClassAdded, ClassAddedBox, ClassBox, ClassContainer } from './Common'
import { IoMdAddCircle } from 'react-icons/io'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ProfessorClasBox() {
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  const [subjects, setSubjects] = useState([])
  const userId = localStorage.getItem('userId')

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
      <ProfessorSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <ClassContainer>
          <ClassBox>
            <AddClassBox>
              <AddClass onClick={() => {navigate('/add-professor-classes')}}>
                <AddClassText><IoMdAddCircle/>Add Class</AddClassText>
              </AddClass>
            </AddClassBox>
            <ClassAddedBox>
              <ClassAdded>
                <ul>
                  {subjects.map((subject) => (
                    <li key={subject._id}>
                      {subject.subject_name} - {subject.subject_code}
                    </li>
                  ))}
                </ul>
              </ClassAdded>
            </ClassAddedBox>
          </ClassBox>
        </ClassContainer>
      </Box>
    </Box>
  )
}

export default ProfessorClasBox