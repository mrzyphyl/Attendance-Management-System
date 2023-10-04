import { styled } from "styled-components";
import { devices } from "../Device/DeviceSizes";

export const SettingsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const SettingsBox = styled.div`
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

export const HeaderContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    margin-top: 1.5rem;
    margin-left: 1rem;
    margin-bottom: 3.5rem;
`

export const HeaderText = styled.h2 `
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    line-height: 1.24;
    color: #020202;
    z-index: 10;
    margin: 0;
`

export const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProfileImage = styled.img`
    width: 150px;
    border-radius: 300px;
    margin-bottom: 2.5rem;
    box-shadow: 0 2px 2px 2px rgba(15, 15, 15, 0.28);

    @media ${devices.mobileL} {
        width: 300px;
    }
`

export const UserInfoContainer = styled.div`
    width: 97%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5rem;

    @media ${devices.laptop} {
        width: 70%;
    }
`

export const UserInformationBox = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;

    @media ${devices.laptop} {
        display: flex;
        gap: 0.5rem;
    }
`

export const UserInfo = styled.div`
    width: 100%;
    border: 2.5px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Label = styled.label`
    font-size: 20px;
    font-weight: 200;
`

export const Info = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: 200;
`

export const SubmitButton = styled.button `
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 50px;
    padding: 11px;
    color: #fff;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    font-size: 20px;
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

    @media ${devices.tablet} {
        width: 40%;
    }
`

export const ButtonBox = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    @media ${devices.tablet} {
        flex-direction: row;
    }
`