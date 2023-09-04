import React from "react";
import { styled } from "styled-components";
import { LoginForm } from "./LoginForm";

export function AccountBox(props){
    return (
        <AppContainer>
            <BoxContainer>
                <LoginContainer>
                    <LoginForm/>
                </LoginContainer>
            </BoxContainer>
        </AppContainer>
    )
}

const AppContainer = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const BoxContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

`

const LoginContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
