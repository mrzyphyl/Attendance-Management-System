import { styled } from "styled-components";

export const WelcomeHeader = styled.h1`
    color: white;
    text-align: center;
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
