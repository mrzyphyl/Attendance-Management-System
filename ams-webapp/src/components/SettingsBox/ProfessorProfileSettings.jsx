import React from 'react'
import { Box } from '@mui/material'
import ProfessorSideBar from '../Navs/Sidebar/ProfessorSidebar'

function ProfessorProfileSettings() {
  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <h1>Settings</h1>
      </Box>
    </Box>
  )
}

export default ProfessorProfileSettings
