import { styled } from "styled-components";
import { devices } from "../../Device/DeviceSizes";

export const AppContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BoxContainer = styled.div `
    height: 97%;
    width: 93%;
    display: flex;
    align-items: center;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 2px 2px 2px rgba(15, 15, 15, 0.28);

    @media ${devices.laptop} {
        height: 50%;
        width: 40%;
    }
`

export const FormContainer = styled.div`
    height: 97%;
    width: 97%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormH1 = styled.h1`
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 2rem;
`

export const Form = styled.form `
    width: 100%;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`

export const Input = styled.input `
    width: 80%;
    height: 50px;
    outline: none;
    padding-left: 7px;
    border: 1.5px solid rgba(44, 43, 43, 0.1);
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
    border-bottom: 2px solid #007260;
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
    text-decoration: none
`

export const ButtonType = styled.button `
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
    background: #39B68D;
    background: linear-gradient(
    58deg,
    #39B68D 20%,
    #007260 100%
    );
    &:hover {
    filter: brightness(1.03);
    }

    @media ${devices.mobileL} {
        font-size: 20px;
    }
`

export const ButtonSubmit = styled.a `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 3.5rem;
    color: #fff;
    text-decoration:none
`