import { Box } from '@mui/material'
import React from 'react'
import { BoxContent } from './Common'
import StudentSideBar from '../Navs/Sidebar/StudentSidebar'

function StudentHomeBox() {
  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <BoxContent>  
        </BoxContent>
      </Box>
    </Box>
  )
}

export default StudentHomeBox