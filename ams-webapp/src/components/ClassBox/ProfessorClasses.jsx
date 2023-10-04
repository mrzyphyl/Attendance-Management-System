import { Box } from '@mui/material'
import React from 'react'
import ProfessorSideBar from '../Navs/Sidebar/ProfessorSidebar'
import { ClassBox, ClassContainer } from './Common'

function ProfessorClasBox() {
  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <ClassContainer>
          <ClassBox>
          </ClassBox>
        </ClassContainer>
      </Box>
    </Box>
  )
}

export default ProfessorClasBox