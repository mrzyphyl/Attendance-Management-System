import React from 'react'
import { Box } from '@mui/material'
import ProfessorSidebar from '../../../Navs/Sidebar/ProfessorSidebar'
import styled from 'styled-components'

function ProfessorShowClassAttendanceBox() {
  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSidebar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <AppContainer>
          <BoxContainer>
          </BoxContainer>
        </AppContainer>
      </Box>
    </Box>
  )
}

const AppContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BoxContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 2px 2px 2px rgba(15, 15, 15, 0.28);
`

export default ProfessorShowClassAttendanceBox