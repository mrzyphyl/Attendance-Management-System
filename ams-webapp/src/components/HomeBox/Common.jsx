import { styled } from "styled-components";
import { devices } from "../Device/DeviceSizes";

export const BoxContent  = styled.div`
    width: 100%;
    background: #0083749c;
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

export const AboutContent = styled.div`
    width: 100%;
    background: #0083749c;
    display: flex;
    align-items: center;
    justify-content: start;
`

export const AboutHeaderContent = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    margin-left: 30px;
`

export const AboutParagraphContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #0083749c;
`

export const AboutParagraphBox = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AboutParagraph = styled.p`
    text-align: justify;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: white;
`

export const AboutImageBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const AboutImageContent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    background: #0083749c;
`

export const AboutImageContainer = styled.div`
    width: 15rem;
    padding: 0%.5rem;
    background-color: rgb(255 255 255);
    border-radius: 0.75rem;
    margin-bottom: 2rem;
    margin-top: 1.5em;

    &:hover{
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
`

export const AboutHeaderContainer = styled.div`
    padding: 0.5rem;
`

export const AboutImage = styled.img`
    height: 10rem;
    object-fit: cover;
    border-radius: 0.75rem;
    width: 100%;
`

export const AboutHeader = styled.h2`
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: 0.5rem;
`

export const AboutInfo = styled.p`
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgb(75 85 99 / var(--tw-text-opacity));
`
