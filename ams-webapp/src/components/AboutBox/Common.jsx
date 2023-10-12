import { styled } from "styled-components";
import { devices } from "../Device/DeviceSizes";

export const WelcomeHeader = styled.h1`
    color: white;
    text-align: center;
`

export const AboutContent = styled.div`
    width: 100%;
    background: #0e796cb2;
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
    background: #0e796cb2;
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
    background: #0e796cb2;
`

export const AboutImageContainer = styled.div`
    width: 15rem;
    padding: 0%.5rem;
    background-color: rgb(255 255 255);
    border-radius: 0.75rem;
    margin-bottom: 2rem;
    margin-top: 1.5em;
    transition: 2s;

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

export const ContactUsContent = styled.div`
    width: 100%;
    background: #0e796cb2;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContactUsBox = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form `
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
    color: #007260;
    font-weight: 500;
    text-decoration: none;
`

export const Input = styled.input `
    width: 97%;
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

    @media ${devices.tablet} {
      width: 80%;
    }
`

export const TextArea = styled.textarea`
    width: 97%;
    height: 200px;
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

    @media ${devices.tablet} {
      width: 80%;
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
    #007260 100%
    );
    &:hover {
    filter: brightness(1.03);
    }
    @media ${devices.tablet} {
      width: 30%;
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

export const SmallText = styled.h5 `
    color: #030303;
    font-weight: 500;
    font-size: 17px;
    z-index: 10;
    margin: 0;
    margin-top: 7px;
`