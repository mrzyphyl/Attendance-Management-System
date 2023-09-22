import { Box } from '@mui/material'
import React from 'react'
import ProfessorSideBar from '../Navs/Sidebar/ProfessorSidebar'
import { BoxContent } from './Common'

function ProfessorHomeBox() {
  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <BoxContent>  
        </BoxContent>
      </Box>
    </Box>
  )
}

export default ProfessorHomeBox