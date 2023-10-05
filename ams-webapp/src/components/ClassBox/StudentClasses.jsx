import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import StudentSidebar from '../Navs/Sidebar/StudentSidebar'
import { AddClass, AddClassBox, AddClassText, ClassAdded, ClassAddedBox, ClassBox, ClassContainer, ClassLabels, Classes, DeleteButton, EditButton, EditOrDelete, HeadingContainer } from './Common'
import { IoMdAddCircle } from 'react-icons/io'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function StudentClasses() {
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  const [subjects, setSubjects] = useState([])

  const userId = localStorage.getItem('userId')

  const filteredSubjects = subjects.filter(subject => {
    const fullName = `${user.firstname} ${user.middlename} ${user.lastname}`
    return subject.student_enrolled === fullName
  })

  useEffect(() => {
    axios.get(`http://localhost:5000/api/student-user/${userId}`)
    .then(result => {
      setUser(result.data)
      console.log(result)
    })
    .catch(err => console.log(err))
  }, [userId])

  useEffect(() => {
    if (!user.firstname){
      axios.get('http://localhost:5000/api/student/subjects')
      .then(result => {
        setSubjects(result.data)
        console.log(result)
      })
      .catch(err => console.log(err))
    }
  })

  const handleDelete = (subjectId) => {
    axios.delete(`http://localhost:5000/api/student/subjects/${subjectId}`)
    .then(res => {console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }
  
  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSidebar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <ClassContainer>
          <ClassBox>
            <AddClassBox>
              <HeadingContainer>
                <h1>Your Classes</h1>
              </HeadingContainer>
              <AddClass onClick={() => {navigate('/add-student-classes')}}>
                <AddClassText><IoMdAddCircle/>Add Class</AddClassText>
              </AddClass>
            </AddClassBox>
            <ClassAddedBox>
              {filteredSubjects.map((subject) => (
                <ClassAdded key={subject._id}>
                  <Classes onClick={() => {navigate('/student-timetable', { state: { subjectData: subject } })}}>
                    <ClassLabels>Subject Code: {subject.subject_code}</ClassLabels>
                    <ClassLabels>Subject Name: {subject.subject_name}</ClassLabels>
                    <ClassLabels>Subject Time: {subject.subject_time}</ClassLabels>
                    <ClassLabels>Subject Instructor: {subject.subject_instructor}</ClassLabels>
                  </Classes>
                  <EditOrDelete>
                    <EditButton onClick={() => {navigate('/edit-student-classes', { state: { subjectData: subject } })}}>Edit</EditButton>
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

export default StudentClasses