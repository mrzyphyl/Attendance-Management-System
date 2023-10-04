import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProfessorSideBar from '../Navs/Sidebar/ProfessorSidebar'
import { AddClass, AddClassBox, AddClassText, ClassAddedBox, ClassBox, ClassContainer } from './Common'
import { IoMdAddCircle } from 'react-icons/io'
import axios from 'axios'

function ProfessorClasBox() {
  const [user, setUser] = useState([])
  const userId = localStorage.getItem('userId')

  useEffect(() => {
      axios.get(`http://localhost:5000/api/professor-user/${userId}`)
      .then(result => {
        setUser(result.data)
        console.log(result)
      })
      .catch(err => console.log(err))
  }, [userId])
  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <ClassContainer>
          <ClassBox>
            <AddClassBox>
              <AddClass>
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

export default ProfessorClasBox