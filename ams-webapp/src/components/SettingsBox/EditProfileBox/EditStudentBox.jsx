import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import StudentSideBar from '../../Navs/Sidebar/StudentSidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Marginer } from '../../Marginer/Margin'
import { ButtonSubmit, ButtonType, CancelButton, CancelLink, EditBoxContainer, EditContainer, EditFormBoxContainer, EditFormContainer, EditScrollableContent, HContainer, HeaderText, Input, Select } from './Syles'

function EditStudentBox() {
  const navigate = useNavigate()
  const userId = localStorage.getItem('userId')

  const [ firstname, setFirstname ] = useState()
  const [ middlename, setMiddlename ] = useState()
  const [ lastname, setLastname ] = useState()
  const [ age, setAge ] = useState()
  const [ birthday, setBirthday ] = useState()
  const [ gender, setGender ] = useState()
  const [ address, setAddress ] = useState()
  const [ user_status, setUser_Status ] = useState()
  const [ student_number, setStudent_Number ] = useState()
  const [ department, setDepartment ] = useState('CITE')
  const [ email, setEmail ] = useState()

  useEffect(() => {
    axios.get(`https://attendance-management-system-server.vercel.app/api/student-user/${userId}`)
    .then(response => {
      console.log(response.data)
      setFirstname(response.data.firstname)
      setMiddlename(response.data.middlename)
      setLastname(response.data.lastname)
      setAge(response.data.age)
      setBirthday(response.data.birthday)
      setGender(response.data.gender)
      setAddress(response.data.address)
      setUser_Status(response.data.user_status)
      setStudent_Number(response.data.student_number)
      setDepartment(response.data.department)
      setEmail(response.data.email)
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    })
  }, [userId])
  
  const onSubmit = (e) => {
    e.preventDefault()

    axios.put(`https://attendance-management-system-server.vercel.app/api/student-user/${userId}`, { 
      firstname, 
      middlename, 
      lastname, 
      age, 
      birthday, 
      gender, 
      address, 
      user_status, 
      student_number, 
      department, 
      email, 
    })
    .then(response => {
      console.log('Successfully edited your profile', response.data)
    })
    .catch(error => {
      console.error('Error editing user data:', error);
    })

  }
  return (
    <Box sx={{ display: 'flex' }}>
      <StudentSideBar/>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <EditContainer>
          <EditBoxContainer>
              <HContainer>
                  <HeaderText>Edit Profile: </HeaderText>
              </HContainer>
              <EditScrollableContent>
                  <EditFormBoxContainer onSubmit={onSubmit}>
                      <EditFormContainer>
                          <Input 
                          type='text' 
                          placeholder='First Name'
                          value={firstname} 
                          onChange={(e) => setFirstname(e.target.value)}/>

                          <Input 
                          type='text' 
                          placeholder='Middle Name'
                          value={middlename}
                          onChange={(e) => setMiddlename(e.target.value)}/>

                          <Input 
                          type='text' 
                          placeholder='Last Name'
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}/>

                      </EditFormContainer>
                      <Marginer direction="vertical" margin={'1.5em'}/>
                      <EditFormContainer>
                          <Input 
                          type='number' 
                          inputMode='numeric'
                          placeholder='Age'
                          value={age}
                          onChange={(e) => setAge(e.target.value)}/>

                          <Input 
                          type='date' 
                          placeholder='Birthday'
                          value={birthday}
                          onChange={(e) => setBirthday(e.target.value)}/>

                          <Input 
                          type='text' 
                          placeholder='Gender'
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}/>

                      </EditFormContainer>
                      <Marginer direction="vertical" margin={'1.5em'}/>
                      <EditFormContainer>
                          <Input 
                          type='text' 
                          placeholder='Complete Address'
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}/>

                          <Input 
                          type='text' 
                          placeholder='Marital Status'
                          value={user_status}
                          onChange={(e) => setUser_Status(e.target.value)}/>

                      </EditFormContainer>
                      <Marginer direction="vertical" margin={'1.5em'}/>
                      <EditFormContainer>
                          <Input 
                          type='number' 
                          inputmode="numeric" 
                          placeholder='Student Number'
                          value={student_number}
                          onChange={(e) => setStudent_Number(e.target.value)}/>

                          <Select 
                          value={department} 
                          onChange={(e) => setDepartment(e.target.value)}
                          >
                              <option value='CITE'>CITE</option>
                              <option value='CELA'>CELA</option>
                              <option value='CEA'>CEA</option>
                              <option value='CSS'>CSS</option>
                              <option value='CMA'>CMA</option>
                              <option value='CHS'>CHS</option>
                              <option value='CAS'>CAS</option>
                          </Select>

                      </EditFormContainer>
                      <Marginer direction="vertical" margin={'1.5em'}/>
                      <EditFormContainer>
                          <Input 
                          type='email' 
                          placeholder='Email Address'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}/>

                      </EditFormContainer>
                      <Marginer direction="vertical" margin={'1.5em'}/>
                      <ButtonSubmit>
                          <ButtonType>Save</ButtonType>
                      </ButtonSubmit>
                      <Marginer direction="vertical" margin={'0.5em'}/>
                      <CancelLink>
                          <CancelButton onClick={() => {navigate("/student-settings")}}>Cancel</CancelButton>
                      </CancelLink>
                  </EditFormBoxContainer>
              </EditScrollableContent>
          </EditBoxContainer>
        </EditContainer>
      </Box>
    </Box>
  )
}

export default EditStudentBox