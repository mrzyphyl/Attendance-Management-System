import { styled } from "styled-components";
import { devices } from "../Device/DeviceSizes";

export const ClassContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const ClassBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 2px 2px 2px rgba(15, 15, 15, 0.28);

    @media ${devices.laptop} {
        width: 100%;
    }
`

export const AddClassContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const AddClassBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${devices.tablet} {
        display: flex;
        align-items: end;
        justify-content: space-between;
        flex-direction: row;
    }
`

export const AddClass = styled.button`
    cursor: pointer;
    border-radius: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 80%;
    padding-top: 1rem;
    padding-bottom: 2rem;
    margin-top: 5px;
    text-align: center;
    background: #0e796cb2;

    @media ${devices.tablet} {
        width: 20%;
        padding-bottom: 2.5rem;
        margin: 20px 20px 20px;
    }
`

export const AddClassText = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    color: white;
    font-weight: 200;
    font-size: 15px;
    margin-top: 25px;

    @media ${devices.tablet} {
        margin-top: 50px;
        font-size: 23px;
    }
`

export const ClassAddedBox = styled.div`
    width: 97%;
    border-radius: 10px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background: #ebe8e8;
    box-shadow: inset 0px 0px 35px 0px rgba(145, 142, 142, 0.24);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const AddClassHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media ${devices.tablet} {
        justify-content: start;
    }
`

export const AddClassHeader = styled.h2`
    margin-left: 0;
    font-size: 20px;
    font-weight: 600;

    @media ${devices.tablet} {   
        font-size: 30px;
        margin-left: 2rem;
    }
`

export const CreateClassBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`

export const CreateClassForm = styled.form`
    position: relative;
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-items: center;
    flex-direction: column;
`

export const Input = styled.input `
    width: 97%;
    height: 50px;
    outline: none;
    border: 1.5px solid rgba(44, 43, 43, 0.1);
    padding: 0px 10px;
    transition: all 200ms ease-in-out;
    font-size: 15px;
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

    @media ${devices.tablet} {
      width: 80%;
      font-size: 20px;
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

export const ButtonSubmit = styled.a `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 3.5rem;
    color: #fff;
    text-decoration:none
`

export const Select = styled.select `
    width: 97%;
    height: 50px;
    outline: none;
    border: 1.5px solid rgba(44, 43, 43, 0.1);
    padding: 0px 10px;
    padding-right: 1rem;
    transition: all 200ms ease-in-out;
    font-size: 15px;
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

    @media ${devices.tablet} {
      width: 80%;
      font-size: 20px;
    }
`

export const ClassAdded = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 85%;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 2px 2px 2px rgba(15, 15, 15, 0.28);
`

export const Classes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    text-align: justify;

    @media ${devices.tablet} {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        margin-left: 1rem;
    }
`

export const ClassLabels = styled.p`
    font-weight: 500;
    font-size: 15px;
    @media ${devices.tablet} {
        font-size: 20px;
    }
`

export const HeadingContainer = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 0;
    @media ${devices.tablet} {
        margin-left: 2rem;
    }
`