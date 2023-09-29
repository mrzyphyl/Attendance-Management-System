import React from 'react'
import { Box } from '@mui/material'
import StudentSidebar from '../Navs/Sidebar/StudentSidebar'

function StudentClasses() {
  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSidebar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <h1>Class</h1>
      </Box>
    </Box>
  )
}

export default StudentClasses