import React from 'react'
import { styled } from 'styled-components'
import { CancelButton, CancelLink, HeaderText, Input, SignUpBoxContainer, SignUpContainer, SignUpFormBoxContainer, SignUpFormContainer, SignUpScrollableContent } from '../Common'
import { Marginer } from '../../Marginer/Margin'
import { devices } from '../../Device/DeviceSizes'

export function StudSignUpForm () {
    return (
        <SignUpContainer>
            <SignUpBoxContainer>
                <HContainer>
                    <HeaderText>Registration Form: </HeaderText>
                </HContainer>
                <SignUpScrollableContent>
                    <SignUpFormBoxContainer>
                        <SignUpFormContainer>
                            <Input type='text' placeholder='First Name'/>
                            <Input type='text' placeholder='Middle Name'/>
                            <Input type='text' placeholder='Last Name'/>
                        </SignUpFormContainer>
                        <Marginer direction="vertical" margin={'1.5em'}/>
                        <SignUpFormContainer>
                            <Input type='number' inputMode='numeric' placeholder='Age'/>
                            <Input type='date' placeholder='Birthday'/>
                            <Input type='text' placeholder='Gender'/>
                        </SignUpFormContainer>
                        <Marginer direction="vertical" margin={'1.5em'}/>
                        <SignUpFormContainer>
                            <Input type='text' placeholder='Complete Address'/>
                            <Input type='text' placeholder='Marital Status'/>
                        </SignUpFormContainer>
                        <Marginer direction="vertical" margin={'1.5em'}/>
                        <SignUpFormContainer>
                            <Input type='number' inputmode="numeric" placeholder='Employee Number'/>
                            <Input type='text' placeholder='Department'/>
                        </SignUpFormContainer>
                        <Marginer direction="vertical" margin={'1.5em'}/>
                        <SignUpFormContainer>
                            <Input type='email' placeholder='Email Address'/>
                            <Input type='password' placeholder='Password'/>
                            <Input type='password' placeholder='Confirm Password'/>
                        </SignUpFormContainer>
                        <Marginer direction="vertical" margin={'1.5em'}/>
                        <ButtonSubmit href='/student-home'>
                            <ButtonType>Register</ButtonType>
                        </ButtonSubmit>
                        <Marginer direction="vertical" margin={'0.5em'}/>
                        <CancelLink  href='/'>
                            <CancelButton>Cancel</CancelButton>
                        </CancelLink>
                    </SignUpFormBoxContainer>
                </SignUpScrollableContent>
            </SignUpBoxContainer>
        </SignUpContainer>
    )
}

const HContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: start;
    margin-left: 20px;
    margin-top: 10px;
    justify-content: Start;
    flex-direction: column;

    @media ${devices.mobileS} {
        margin-bottom: 1.5rem;
    }
`

const ButtonType = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    width: 100%;
    height: 100%;
    color: #fff;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(241, 196, 15);
    background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
    );
    &:hover {
    filter: brightness(1.03);
    }

    @media ${devices.mobileL} {
        font-size: 20px;
    }
`

const ButtonSubmit = styled.a `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 3.5rem;
    color: #fff;
    text-decoration:none
`