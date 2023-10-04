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

export const AddClassBox = styled.div`
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: flex-end;
`

export const AddClass = styled.button`
    cursor: pointer;
    border-radius: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 2rem;
    margin: 20px 20px 20px;
    text-align: center;
    background: #0e796cb2;

    @media ${devices.tablet} {
        width: 20%;
        padding-bottom: 2.5rem;
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
`

export const AddClassHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
    width: 100%;
    @media ${devices.tablet} {
        justify-content: start;
    }
`

export const AddClassHeader = styled.h2`
    font-size: 20px;
    font-weight: 600;

    @media ${devices.tablet} {   
        font-size: 30px;
    }
`
