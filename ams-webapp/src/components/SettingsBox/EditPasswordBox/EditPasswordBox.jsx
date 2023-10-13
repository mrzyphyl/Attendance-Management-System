import React, { useState } from 'react'
import { AppContainer, BoxContainer, ButtonSubmit, ButtonType, Form, FormContainer, FormH1, Input } from './Style'
import { Marginer } from '../../Marginer/Margin'
import axios from 'axios'

function EditPasswordBox() {
  const [ password, setPassword ] = useState()

  const userId = localStorage.getItem('userId')

  console.log(userId)

  const onSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:5000/api/professor-user/forgotpass/${userId}`,{
      password
    })
    .then(response => {
      console.log(response.data)
      window.localStorage.clear()
      window.location.href = "/"
    })
    .catch(error => {
      console.error('Error fetching professor user data:', error);
    })
    axios.put(`http://localhost:5000/api/student-user/forgotpass/${userId}`,{
      password
    })
    .then(response => {
      console.log(response.data)
      window.localStorage.clear()
      window.location.href = "/"
    })
    .catch(error => {
      console.error('Error fetching student user data:', error);
    })
  }

  return (
    <AppContainer>
      <BoxContainer>
        <FormContainer>
          <FormH1>Enter your new password</FormH1>
            <Form onSubmit={onSubmit}>
              <Input
              type='password' 
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />

              <Marginer direction="vertical" margin={'5px'}/>

              <Input
              type='password' 
              placeholder='Confirm Password'
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

export default EditPasswordBox