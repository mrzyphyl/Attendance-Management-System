import React from 'react'
import { styled } from 'styled-components'
import { Marginer } from '../Marginer/Margin'

export function RolesButton () {
    return(
        <ButtonContainer>
            <ButtonSubmit href='/professor-sign-up'>
                <ButtonType>Instructor</ButtonType>
            </ButtonSubmit>
            <Marginer direction="vertical" margin="1.6em"/>
            <ButtonSubmit href='/student-sign-up'>
                <ButtonType>Student</ButtonType>
            </ButtonSubmit>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div `
    gap: 5;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ButtonType = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    height: 100%;
    padding: 11px;
    color: #fff;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: #39B68D;
    background: linear-gradient(
    58deg,
    #39B68D 20%,
    #007260 100%
    );
    &:hover {
    filter: brightness(1.03);
    }
`

const ButtonSubmit = styled.a `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 3.5rem;
    color: #fff;
    text-decoration:none
`
