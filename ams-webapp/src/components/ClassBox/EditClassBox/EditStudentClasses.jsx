import React from 'react'
import { Box } from '@mui/material'
import StudentSidebar from '../../Navs/Sidebar/StudentSidebar'

function EditStudentClasses() {
  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSidebar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
      </Box>
    </Box>
  )
}

export default EditStudentClasses