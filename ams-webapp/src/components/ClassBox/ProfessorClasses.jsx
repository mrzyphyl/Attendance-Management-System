import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProfessorSideBar from '../Navs/Sidebar/ProfessorSidebar'
import { AddClass, AddClassBox, AddClassText, ClassAdded, ClassAddedBox, ClassBox, ClassContainer, ClassLabels, Classes, DeleteButton, EditButton, EditOrDelete, HeadingContainer } from './Common'
import { IoMdAddCircle } from 'react-icons/io'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ProfessorClasBox() {
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
      console.log(result)
    })
    .catch(err => console.log(err))
  }, [userId])

  useEffect(() => {
    if (!user.firstname){
      axios.get('https://attendance-management-system-server.vercel.app/api/professor/subjects')
      .then(result => {
        setSubjects(result.data)
        console.log(result)
      })
      .catch(err => console.log(err))
    }
  })

  const handleDelete = (subjectId) => {
    axios.delete(`https://attendance-management-system-server.vercel.app/api/professor/subjects/${subjectId}`)
    .then(res => {console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <ProfessorSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <ClassContainer>
          <ClassBox>
            <AddClassBox>
              <HeadingContainer>
                <h1>Your Classes</h1>
              </HeadingContainer>
              <AddClass onClick={() => {navigate('/add-professor-classes')}}>
                <AddClassText><IoMdAddCircle/>Add Class</AddClassText>
              </AddClass>
            </AddClassBox>
            <ClassAddedBox>         
              {filteredSubjects.map((subject) => (
                <ClassAdded key={subject._id}>
                  <Classes onClick={() => {navigate('/timetable/time-in/professor', { state: { subjectData: subject } })}}>
                    <ClassLabels>Subject Code: {subject.subject_code}</ClassLabels>
                    <ClassLabels>Subject Name: {subject.subject_name}</ClassLabels>
                    <ClassLabels>Subject Time: {subject.subject_time}</ClassLabels>
                  </Classes>
                  <EditOrDelete>
                    <EditButton onClick={() => {navigate('/edit-professor-classes', { state: { subjectData: subject } })}}>Edit</EditButton>
                    <DeleteButton onClick={() => handleDelete(subject._id)}>Delete</DeleteButton>
                  </EditOrDelete>
                </ClassAdded>
              ))}
            </ClassAddedBox>
          </ClassBox>
        </ClassContainer>
      </Box>
    </Box>
  )
}

export default ProfessorClasBox