import React from 'react'
import { Box } from '@mui/material'
import StudentSidebar from '../Navs/Sidebar/StudentSidebar'

function StudentProfileSettings() {
  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSidebar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <h1>Settings</h1>
      </Box>
    </Box>
  )
}

export default StudentProfileSettings