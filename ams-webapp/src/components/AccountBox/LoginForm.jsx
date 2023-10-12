import React, { useState } from 'react'
import { styled } from "styled-components";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton, SubmitLink, HeaderContainer, HeaderText, Error} from './Common';
import LogoNoBG from '../../assets/Logo/Attendance Management System-Mobile no bg.png'
import { Marginer } from '../Marginer/Margin';
import { devices } from '../Device/DeviceSizes';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function LoginForm(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loginError, setLoginError] = useState()
  
    const navigate = useNavigate()
  
    const onSubmit = (e) => {
        e.preventDefault()
        // Flag to track if an error has occurred
        let studentError = false
        let professorError = false

        // Send a request to the student login endpoint
        axios.post('http://localhost:5000/api/student-user/login', { email, password })
        .then(studentResult => {
            console.log('Student Login:', studentResult.data)
            const userId = studentResult.data._id
            const userData = studentResult.data
            localStorage.setItem('userId', userId)
            localStorage.setItem('userData', userData)
            navigate('/student-home')
        })
        .catch(studentErr => {
            console.log('Student Login Error:', studentErr);
            if (studentErr.response && studentErr.response.status === 400) {
                studentError = true
            }
        })

        // Send a request to the professor login endpoint
        axios.post('http://localhost:5000/api/professor-user/login', { email, password })
        .then(professorResult => {
            console.log('Professor Login:', professorResult.data)
            const userId = professorResult.data._id
            const userData = professorResult.data
            localStorage.setItem('userId', userId)
            localStorage.setItem('userData', userData)
            navigate('/professor-home')
        })
        .catch(professorErr => {
            console.log('Professor Login Error:', professorErr)
            if (professorErr.response && professorErr.response.status === 400) {
                professorError = true
            }
        })

        // Check both errors and set loginError if both requests fail
        if (studentError && professorError) {
            setLoginError('Invalid email or password')
        } else if (studentError || professorError) {
            setLoginError('An error occurred. Please try again.')
        }
    }

    return(
        <BoxContainer>
            <ImageContainer>
                <LogoImg src={LogoNoBG}/>
            </ImageContainer>
            <FormContainer onSubmit={onSubmit}>
                <HeaderContainer>
                    <HeaderText>Welcome Back</HeaderText>
                    <SmallText>Please sign-in to continue!</SmallText>
                </HeaderContainer>
                <Input 
                type='email' 
                placeholder='Email'
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
                <Input 
                type='password' 
                placeholder='Password'
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>
                <Marginer direction="vertical" margin={5} />
                {/* Error message */}
                {loginError && <Error>{loginError}</Error>}
                <Marginer direction="vertical" margin={5} />
                <MutedLink href="#">Forget your password?</MutedLink>
                <Marginer direction="vertical" margin="1.6em" />
                <SubmitButton type="submit">
                    <SubmitLink>Sign in</SubmitLink>
                </SubmitButton>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href="#">
                Don't have an account?{" "}
                <BoldLink href="/roles">
                Signup
                </BoldLink>
                </MutedLink>
            </FormContainer>
        </BoxContainer>
    )
}

const LogoImg = styled.img `
    width: 500px;
`

const ImageContainer = styled.div `
    height: 100%;
    width: 100%;
    border-radius: 20px 0 0 20px;
    display: none;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        #39B68D 20%, 
        #007260 100%)
    ;

    @media ${devices.laptop} {
        display: grid;
    }
`

const SmallText = styled.h5 `
    color: #030303;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin: 0;
    margin-top: 7px;
`
