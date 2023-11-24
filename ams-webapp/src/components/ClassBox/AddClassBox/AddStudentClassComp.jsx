import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import StudentSidebar from '../../Navs/Sidebar/StudentSidebar'
import { ClassBox, ClassContainer, AddClassHeader, AddClassHeaderContainer, CreateClassBox, CreateClassForm, Input, ButtonSubmit, ButtonType, CancelLink, CancelButton, Select, AddClassContainer } from '../Common'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddStudentClassComp() {
  const navigate = useNavigate()
  const [user, setUser] = useState([]) 
  const [subjects, setSubjects] = useState([]) 
  const [subject_code, setSubjectCode] = useState('')
  const [subject_name, setSubjectName] = useState('')
  const [subject_time, setSubjectTime] = useState('')
  const [subject_instructor, setSubjectInstructor] = useState('')
  const [student_enrolled, setStudentEnrolled] = useState()
  const [formError, setFormError] = useState('')

  const filteredSubjects = subjects.filter((subject) => subject.department === user.department)

  const userId = localStorage.getItem('userId')

  useEffect(() => {
    if (!user.firstname) {
      axios.get(`https://attendance-management-system-server.vercel.app/api/student-user/${userId}`)
        .then(result => {
          setUser(result.data)
          console.log(result)
          const student = `${result.data.firstname} ${result.data.middlename} ${result.data.lastname}`
          setStudentEnrolled(student)
        })
        .catch(err => console.log(err))
    }
  }, [userId, user])

  useEffect(() => {
    if (!user.firstname) {
      axios.get(`https://attendance-management-system-server.vercel.app/api/professor/subjects?department=${user.department}`)
      .then((result) => {
        setSubjects(result.data)
        console.log(result)
      })
      .catch((err) => console.log(err))
    }
  }, [subjects, user])

  const onSubmit = (e) => {
    e.preventDefault()
    axios.post('https://attendance-management-system-server.vercel.app/api/student/subjects', { 
      subject_code,
      subject_name,
      subject_time,
      subject_instructor,
      department: `${user.department}`,
      student_enrolled
    })
    .then((result) => {
      console.log('Response from server:', result)
      if (result.status === 201) {
        console.log(result)
        navigate('/student-classes')
      } else {
        console.log(result)
      }
    })
    .catch((err) => {
      if (err.response) {
        console.error(err.response);
        setFormError('There is already subject on that time');
      } else {
        console.error(err);
        setFormError('Network error. Please check your internet connection.');
      }
    })
}
  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSidebar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <ClassContainer>
          <ClassBox>
            <AddClassContainer>
              <AddClassHeaderContainer>
                <AddClassHeader>Add a Subject</AddClassHeader>
              </AddClassHeaderContainer>
              <CreateClassBox>
                <CreateClassForm onSubmit={onSubmit}>
                  <Input
                  type='text'
                  id='Name'
                  name = 'Name'
                  value={student_enrolled}
                  />
                  <Select
                  id='Subject Code'
                  name='Subject Code'
                  value={subject_code}
                  onChange={(e) => setSubjectCode(e.target.value)}
                  >
                    <option value=''>Subject Code</option>
                    {filteredSubjects.map((subject) => (
                      <option key={subject._id} value={subject.subject_code}>
                        {subject.subject_code}
                      </option>
                    ))}
                  </Select>
                  <Select
                  id='Subject Name'
                  name='Subject Name'
                  value={subject_name}
                  onChange={(e) => setSubjectName(e.target.value)}
                  >
                    <option value=''>Subject Name</option>
                    {filteredSubjects.map((subject) => (
                      <option key={subject._id} value={subject.subject_name}>
                        {subject.subject_name}
                      </option>
                    ))}
                  </Select>
                  <Select
                  id='Subject Instructor'
                  name='Subject Instructor'
                  value={subject_instructor}
                  onChange={(e) => setSubjectInstructor(e.target.value)}
                  >
                    <option value=''>Subject Instructor</option>
                    {filteredSubjects.map((subject) => (
                      <option key={subject._id} value={subject.subject_instructor}>
                        {subject.subject_instructor}
                      </option>
                    ))}
                  </Select>
                  <Select
                  id='Subject Time'
                  name='Subject Time'
                  value={subject_time}
                  onChange={(e) => setSubjectTime(e.target.value)}
                  >
                    <option value=''>Subject Time</option>
                    {filteredSubjects.map((subject) => (
                      <option key={subject._id} value={subject.subject_time}>
                        {subject.subject_time}
                      </option>
                    ))}
                  </Select>
                  {formError && <div className="form-error" style={{color: 'red'}}>{formError}</div>}
                  <ButtonSubmit type='submit'>
                    <ButtonType>Enroll</ButtonType>
                  </ButtonSubmit>
                  <CancelLink>
                    <CancelButton onClick={() => {navigate("/student-classes")}}>Cancel</CancelButton>
                  </CancelLink>
                </CreateClassForm>
              </CreateClassBox>
            </AddClassContainer>
          </ClassBox>
        </ClassContainer>
      </Box>
    </Box>
  )
}

export default AddStudentClassComp