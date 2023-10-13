import React, { useEffect, useState } from 'react'
import { AppContainer, BoxContainer, ButtonSubmit, ButtonType, Form, FormContainer, FormH1, Input } from './Style'
import { Marginer } from '../../Marginer/Margin'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function EmailConfirmationBox() {
  const navigate = useNavigate()
  const [ email, setEmail ] = useState()

  const [studentUserData, setStudentUserData] = useState([])
  const [professorUserData, setProfessorUserData] = useState([])

  const [studentUserEmails, setStudentUserEmails] = useState([])
  const [professorUserEmails, setProfessorUserEmails] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/student-user')
      .then(response => {
        const emails = response.data.map(user => user.email)
        setStudentUserEmails(emails)
        setStudentUserData(response.data)
      })
      .catch(error => {
        console.error('Error fetching student user data:', error)
      })

    axios.get('http://localhost:5000/api/professor-user')
      .then(response => {
        const emails = response.data.map(user => user.email)
        setProfessorUserEmails(emails)
        setProfessorUserData(response.data)
      })
      .catch(error => {
        console.error('Error fetching professor user data:', error)
      })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    let userId = null

    if (studentUserEmails.includes(email)) {
      userId = studentUserData[studentUserEmails.indexOf(email)]._id;
      console.log('Email exists in student users', userId)
      console.log('Email exists in student users', studentUserEmails)
      localStorage.setItem('userId', userId)
      navigate('/changepass')
    } else if (professorUserEmails.includes(email)) {
      userId = professorUserData[professorUserEmails.indexOf(email)]._id;
      console.log('Email exists in professor users', userId)
      console.log('Email exists in professor users', professorUserEmails)
      localStorage.setItem('userId', userId)
      navigate('/changepass')
    } else {
      console.log('Email does not exist in either')
    }
  }

  return (
    <AppContainer>
      <BoxContainer>
        <FormContainer>
          <FormH1>Enter your email address</FormH1>
            <Form onSubmit={onSubmit}>
              <Input
              type='email' 
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <Marginer direction="vertical" margin={'1.5em'}/>
              <ButtonSubmit type='submit'>
                <ButtonType>Enter</ButtonType>
              </ButtonSubmit>
            </Form>
        </FormContainer>
      </BoxContainer>
    </AppContainer>
  )
}

export default EmailConfirmationBox