import { styled } from "styled-components";
import { devices } from "../../../Device/DeviceSizes"

export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BoxContainer = styled.div `
    height: 800px;
    width: 100%;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 2px 2px 2px rgba(15, 15, 15, 0.28);
    @media ${devices.tablet} {
        flex-direction: row;
        gap: 6rem;
    }
`

export const QRContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${devices.mobileL} {
        margin-top: 0;
    }
`

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const Header = styled.h1`
    font-size: 30px;
    font-weight: 200;
    @media ${devices.tablet} {
        font-size: 40px;
    }
`

export const AddHeader = styled.h1`
    margin-top: -10px;
    font-size: 20px;
    font-weight: 200;
`

export const H2 = styled.h2`
    margin-top: 2rem;
    font-size: 20px;
    font-weight: 200;
    
    @media ${devices.tablet} {
        font-size: 30px;
    }
`

export const AnotherH2 = styled.h2`
    margin-top: -25px;
    font-size: 20px;
    font-weight: 200;

    @media ${devices.tablet} {
        font-size: 30px;
        margin-top: -30px;
    }
`

export const CheckAttendance = styled.button`
    cursor: pointer;
    border-radius: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 100px;
    padding-top: 1rem;
    padding-bottom: 2rem;
    margin-top: 5px;
    text-align: center;
    background: #0e796cb2;

    @media ${devices.tablet} {
        width: 400px;
        padding-bottom: 2.5rem;
        margin: 10px 20px 20px;
    }
`

export const CheckAttendanceText = styled.p`
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

export const Button = styled.button`
    cursor: pointer;
    border-radius: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 100px;
    padding-top: 1rem;
    padding-bottom: 2rem;
    margin-top: 5px;
    text-align: center;
    background: #97110ccc;

    @media ${devices.tablet} {
        width: 400px;
        padding-bottom: 2.5rem;
        margin: 10px 20px 20px;
    }
`

export const ButtonText = styled.p`
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

export const HeadingContainer = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 0;
    @media ${devices.tablet} {
        width: 100%;
        margin-left: 2rem;
        display: flex;
        align-items: center;
        justify-content: start;
    }
`