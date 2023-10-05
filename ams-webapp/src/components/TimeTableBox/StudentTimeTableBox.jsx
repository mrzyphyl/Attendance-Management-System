import { Box } from '@mui/material'
import React from 'react'
import StudentSideBar from '../Navs/Sidebar/StudentSidebar'

function StudentTimeTableBox() {
  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <h1>Home</h1>
      </Box>
    </Box>
  )
}

export default StudentTimeTableBox