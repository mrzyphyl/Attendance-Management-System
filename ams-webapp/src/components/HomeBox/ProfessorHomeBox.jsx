import { Box } from '@mui/material'
import React from 'react'
import ProfessorSideBar from '../Navs/Sidebar/ProfessorSidebar'

function ProfessorHomeBox() {
  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <h1>Home</h1>
      </Box>
    </Box>
  )
}

export default ProfessorHomeBox