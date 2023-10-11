import { styled } from "styled-components"
import { devices } from "../../../Device/DeviceSizes"

export const AppContainer = styled.div `
    height: 800px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 2px 2px 2px rgba(15, 15, 15, 0.28);
    @media ${devices.tablet} {
        align-items: center;
        justify-content: center;
    }
`

export const Container = styled.div`
    gap: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${devices.tablet} {
        gap: 10rem;
        flex-direction: row;
    }
`

export const ImageContiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    @media ${devices.tablet} {
        width: 400px;
        height: 400px;
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
    font-size: 50px;
    font-weight: 200;
`

export const AddHeader = styled.h1`
    margin-top: -30px;
    font-size: 20px;
    font-weight: 200;
`

export const H2 = styled.h2`
    margin-top: 1rem;
    font-size: 30px;
    font-weight: 200;
`

export const AddAttendance = styled.button`
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

export const AddAttendanceText = styled.p`
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
    margin-bottom: 1rem;
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

export const CheckAttendanceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media ${devices.tablet} {
        justify-content: start;
    }
`

export const CheckAttendanceHeader = styled.h2`
    margin-left: 0;
    font-size: 20px;
    font-weight: 600;

    @media ${devices.tablet} {   
        font-size: 30px;
        margin-left: 2rem;
    }
`

export const Error = styled.p`
    text-align: center;
    color: rgb(239, 68, 68);
    margin-top: 2.25rem;
`