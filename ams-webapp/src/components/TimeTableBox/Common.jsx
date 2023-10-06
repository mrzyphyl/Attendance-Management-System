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

export const ClassAdded = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 85%;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 2px 2px 2px rgba(15, 15, 15, 0.28);
    @media ${devices.tablet} {
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    
`

export const Classes = styled.div`
    cursor: pointer;
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