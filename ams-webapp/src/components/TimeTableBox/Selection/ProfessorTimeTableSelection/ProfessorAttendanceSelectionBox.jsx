import React from 'react'
import { Box } from '@mui/material'
import ProfessorSidebar from '../../../Navs/Sidebar/ProfessorSidebar'

function ProfessorAttendanceSelectionBox() {
  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSidebar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
      </Box>
    </Box>
  )
}

export default ProfessorAttendanceSelectionBox