import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProfessorSideBar from '../Navs/Sidebar/ProfessorSidebar'
import { Button, ButtonText, ClassAdded, ClassAddedBox, ClassBox, ClassContainer, ClassLabels, Classes } from './Common'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ProfessorTimeTableBox() {
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  const [subjects, setSubjects] = useState([])

  const userId = localStorage.getItem('userId')

  const filteredSubjects = subjects.filter(subject => {
    const fullName = `${user.firstname} ${user.middlename} ${user.lastname}`
    return subject.subject_instructor === fullName
  })

  useEffect(() => {
    axios.get(`https://attendance-management-system-server.vercel.app/api/professor-user/${userId}`)
    .then(result => {
      setUser(result.data)
      console.log('User Data: ', result.data)
    })
    .catch(err => console.log(err))
  }, [userId])

  useEffect(() => {
    if (!user.firstname){
      axios.get('https://attendance-management-system-server.vercel.app/api/professor/subjects')
      .then(result => {
        setSubjects(result.data)
        console.log('Subjects Data: ', result.data)
      })
      .catch(err => console.log(err))
    }
  })

  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <ClassContainer>
          <ClassBox>
            <ClassAddedBox>         
              {filteredSubjects.map((subject) => (
                <ClassAdded key={subject._id}>
                  <Classes onClick={() => {navigate('/timetable/time-in/professor', { state: { subjectData: subject } })}}>
                    <ClassLabels>Subject Code: {subject.subject_code}</ClassLabels>
                    <ClassLabels>Subject Name: {subject.subject_name}</ClassLabels>
                    <ClassLabels>Subject Time: {subject.subject_time}</ClassLabels>
                  </Classes>
                </ClassAdded>
              ))}
            </ClassAddedBox>
            <Button onClick={() => {navigate('/time-table/check-attendance/professor')}}>
              <ButtonText>Check Attendance</ButtonText>
            </Button>
          </ClassBox>
        </ClassContainer>
      </Box>
    </Box>
  )
}

export default ProfessorTimeTableBox