import { styled } from "styled-components";
import { devices } from "../Device/DeviceSizes";

export const BoxContent  = styled.div`
    width: 100%;
    background: #0e796cb2;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const WelcomeHeader = styled.h1`
    color: white;
    text-align: center;
`

export const Paragraph = styled.p`
    color: white;
    text-align: center;
`

export const ImageContainer = styled.div `
    height: 100%;
    width: 100%;
    border-radius: 20px 0 0 20px;
    display: none;
    justify-content: center;
    align-items: center;

    @media ${devices.laptop} {
        display: grid;
    }
`

export const LogoImg = styled.img `
    width: 500px;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`

export const StartButton = styled.button`
    cursor: pointer;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 14px 40px;
    border-radius: 50px;
    transition: 0.3s;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
    border: 2px solid rgba(255, 255, 255, 0.1);

    &:hover{
        border-color: rgba(255, 255, 255, 0.5);
    }
`

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    margin-bottom: 150px;
`

export const CardBox = styled.div`
    margin-top: -170px; 
    width: 100%;   
    display: flex;
    align-items: center;
    justify-content: center;
`
