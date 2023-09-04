import { styled } from "styled-components";
import { devices } from "../Device/DeviceSizes";


export const BoxContainer = styled.div `
    height: 97%;
    width: 93%;
    display: flex;
    align-items: center;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 2px 2px 2px rgba(15, 15, 15, 0.28);

    @media ${devices.laptop} {
        height: 80%;
        width: 80%;
    }
`

export const FormContainer = styled.div `
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
`

export const MutedLink = styled.a `
    font-size: 12px;
    color: rgba(107, 105, 105, 0.8);
    font-weight: 500;
    text-decoration: none;
`

export const BoldLink = styled.a `
    font-size: 12px;
    color: rgb(241, 196, 15);
    font-weight: 500;
    text-decoration: none;
`

export const Input = styled.input `
    width: 80%;
    height: 50px;
    outline: none;
    border: 1.5px solid rgba(44, 43, 43, 0.1);
    padding: 0px 10px;
    transition: all 200ms ease-in-out;
    font-size: 12px;
    font-weight: 500;

    &::placeholder {
    color: black;
    }

    &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }

    &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
    }
`

export const SubmitButton = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 11px;
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
`

export const SubmitLink = styled.a `
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    text-decoration:none
`

export const HeaderContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2.5rem;

    @media ${devices.laptop} {
    }
`

export const HeaderText = styled.h2 `
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    color: #020202;
    z-index: 10;
    margin: 0;
`

export const SignUpContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;

    @media ${devices.tablet} {
        align-items: center;
    }
`

export const SignUpBoxContainer = styled.div `
    width: 93%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
`

export const SignUpFormBoxContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`

export const SignUpScrollableContent = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
`

export const SignUpFormContainer = styled.div `
    width: 98%;
    display: grid;
    align-items: stretch;
    justify-items: center;

    @media ${devices.laptop} {
        display: flex;
    }
`

export const CancelButton = styled.button `
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
    background: rgb(216, 59, 59);
    background: linear-gradient(
    58deg,
    #db4949 20%,
    #e40d0d 100%
    );
    &:hover {
    filter: brightness(1.03);
    }

    @media ${devices.mobileL} {
        font-size: 20px;
    }
`

export const CancelLink = styled.a `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 3.5rem;
    color: #fff;
    text-decoration:none
`