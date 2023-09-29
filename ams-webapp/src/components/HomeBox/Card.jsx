import React from 'react'
import styled from 'styled-components'
import { devices } from "../Device/DeviceSizes"
import Connect from '../../assets/icons/cloud-network.gif'
import QR from '../../assets/icons/qr-code.gif'
import Time from '../../assets/icons/hourglass.gif'

function Card() {
  return (
    <CardContainer>
        <CardBoxContainer>
            <CardBox>
                <ImageContainer>
                    <Image src={QR}/>
                </ImageContainer>
                <HeaderContainer>
                    <Header>Scan</Header>
                </HeaderContainer>
            </CardBox>
        </CardBoxContainer>
        <CardBoxContainer>
            <CardBox>
                <ImageContainer>
                    <Image src={Connect}/>
                </ImageContainer>
                <HeaderContainer>
                    <Header>Connect</Header>
                </HeaderContainer>
            </CardBox>
        </CardBoxContainer>
        <CardBoxContainer>
            <CardBox>
                <ImageContainer>
                    <Image src={Time}/>
                </ImageContainer>
                <HeaderContainer>
                    <Header>Time In</Header>
                </HeaderContainer>
            </CardBox>
        </CardBoxContainer>
    </CardContainer>
  )
}

const CardContainer = styled.div`
    display: grid;
    gap: 0.5rem;
    align-items: center;
    justify-items: center;
    margin-top: 50px;

    @media ${devices.tablet} {
        gap: 5rem;
        display: flex;
    }
`


const CardBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    background: white;
    border-radius: 8px;
    margin-bottom: 50px;
`


const CardBox = styled.div`
    align-items: center;
    justify-items: center;
    background: #ffffff9d;
    padding: 5px;
    width: 200px;
    height: 250px;
    border: 0px solid rgba(10, 10, 10, 1);
    border-radius: 8px;
    box-shadow: 0px 0px 139px 9px rgba(0, 0, 0, 0.3);
`

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
`

const HeaderContainer = styled.div`
    width: 100%;
    height: 30%;
    text-align: center;
`

const Header = styled.h2`
    text-align: center;
    font-weight: normal;
`

const Image = styled.img`
    margin-top: 15px;
    width: 90%;
    height: 100%;
`

export default Card