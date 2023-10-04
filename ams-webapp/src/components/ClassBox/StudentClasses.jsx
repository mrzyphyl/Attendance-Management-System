import React from 'react'
import { Box } from '@mui/material'
import StudentSidebar from '../Navs/Sidebar/StudentSidebar'
import { ClassBox, ClassContainer } from './Common'

function StudentClasses() {
  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSidebar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <ClassContainer>
          <ClassBox>
          </ClassBox>
        </ClassContainer>
      </Box>
    </Box>
  )
}

export default StudentClasses