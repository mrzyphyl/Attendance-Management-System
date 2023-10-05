import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ProfessorSideBar from '../../Navs/Sidebar/ProfessorSidebar'
import { ClassBox, ClassContainer, AddClassHeader, AddClassHeaderContainer, CreateClassBox, CreateClassForm, Input, ButtonSubmit, ButtonType, CancelLink, CancelButton, Select, AddClassContainer } from '../Common'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddProfessorClassComp() {
  const navigate = useNavigate()
  const [user, setUser] = useState([]) 
  const [subject_code, setSubjectCode] = useState()
  const [subject_name, setSubjectName] = useState()
  const [subject_time, setSubjectTime] = useState('7:30-9:00')
  const [subject_instructor, setSubjectInstructor] = useState()
  const [department, setDepartment] = useState()
  const [formError, setFormError] = useState('')

  const handleTimeChange = (e) => {
    setSubjectTime(e.target.value);
  }

  const userId = localStorage.getItem('userId')

  useEffect(() => {
    if (!user.firstname) {
      axios.get(`http://localhost:5000/api/professor-user/${userId}`)
        .then(result => {
          setUser(result.data)
          console.log(result)
          const instructorString = `${result.data.firstname} ${result.data.middlename} ${result.data.lastname}`
          const departmentString = `${result.data.department}`
          setSubjectInstructor(instructorString)
          setDepartment(departmentString)
        })
        .catch(err => console.log(err))
    }
  }, [userId, user])

  const onSubmit = (e) => {
    e.preventDefault()
    setFormError('')
    if (!subject_code || !subject_name) {
      setFormError('Please add all fields')
      return
    }
    axios.post('http://localhost:5000/api/professor/subjects', { 
      subject_code,
      subject_name,
      subject_time,
      subject_instructor,
      department
    })
    .then((result) => {
      console.log('Response from server:', result)
      if (result.status === 201) {
        console.log(result)
        navigate('/professor-classes')
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
      <ProfessorSideBar/>
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
                  id='Subject Instructor'
                  name = 'Subject Instructor'
                  value={subject_instructor}
                  />
                  <Input
                  type='text'
                  id='Department'
                  name = 'Department'
                  value={department}
                  />
                  <Input
                  type='text' 
                  id='Subject Code'
                  name='Subject Code'
                  placeholder='Subject Code'
                  value={subject_code}
                  onChange={(e) => setSubjectCode(e.target.value)} />
                  <Input
                  type='text' 
                  id='Subject Name'
                  name='Subject Name'
                  placeholder='Subject Name'
                  value={subject_name}
                  onChange={(e) => setSubjectName(e.target.value)} />
                  <Select
                    id='Subject Time'
                    name='Subject Time'
                    value={subject_time}
                    onChange={handleTimeChange}
                  >
                    <option value='7:30-9:00'>7:30-9:00</option>
                    <option value='9:00-10:30'>9:00-10:30</option>
                    <option value='10:30-12:00'>10:30-12:00</option>
                    <option value='12:00-1:30'>12:00-1:30</option>
                    <option value='1:30-3:00'>1:30-3:00</option>
                    <option value='3:00-4:30'>3:00-4:30</option>
                    <option value='4:30-6:00'>4:30-6:00</option>
                    <option value='6:00-7:30'>6:00-7:30</option>
                  </Select>
                  {formError && <div className="form-error" style={{color: 'red'}}>{formError}</div>}
                  <ButtonSubmit type='submit'>
                    <ButtonType>Add Class</ButtonType>
                  </ButtonSubmit>
                  <CancelLink>
                    <CancelButton onClick={() => {navigate("/professor-classes")}}>Cancel</CancelButton>
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

export default AddProfessorClassComp