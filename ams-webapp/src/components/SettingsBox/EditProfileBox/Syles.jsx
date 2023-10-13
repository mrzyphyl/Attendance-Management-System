import { styled } from "styled-components";
import { devices } from "../../Device/DeviceSizes";


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
    border-bottom: 2px solid #007260;
    }
`

export const Select = styled.select `
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
    border-bottom: 2px solid #007260;
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
    background: #39B68D;
    background: linear-gradient(
    58deg,
    #39B68D 20%,
    #007260 100%,
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

export const EditContainer = styled.div `
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

export const EditBoxContainer = styled.div `
    width: 93%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
`

export const EditFormBoxContainer = styled.form `
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`

export const EditScrollableContent = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
`

export const EditFormContainer = styled.div `
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
    text-decoration: none
`

export const Error = styled.p`
    text-align: center;
    color: rgb(239, 68, 68);
    margin-top: 2.25rem;
`

export const HContainer = styled.div `
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