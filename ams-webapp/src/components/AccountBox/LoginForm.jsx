import React, { useState } from 'react'
import { styled } from "styled-components";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton, SubmitLink, HeaderContainer, HeaderText} from './Common';
import LogoNoBG from '../../assets/Logo/Attendance Management System-Mobile no bg.png'
import { Marginer } from '../Marginer/Margin';
import { devices } from '../Device/DeviceSizes';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function LoginForm(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  
    const navigate = useNavigate()
  
    const onSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5000/api/professor-user/login', { email, password })
      .then(result => console.log(result))
      .catch(err => console.log(err))
      navigate("/")
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
        rgba(241, 196, 15, 1) 20%, 
        rgba(243, 172, 18, 1) 100%)
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
