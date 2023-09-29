import React from 'react'
import styled from 'styled-components'
import UpangLogo from '../../../assets/Logo/Upang Logo no bg.png'
import { 
    AiFillFacebook, 
    AiFillTwitterCircle, 
    AiFillRedditCircle, 
    AiFillLinkedin,
    AiFillGithub
} from 'react-icons/ai'
 
function Footer() {
  return (
    <FooterBox>
        <ImageContainer>
            <LogoImage src={UpangLogo} alt='Upang Logo'/>
        </ImageContainer>
        <TextContainer>
            <Text>© 2023 Techo Buddies</Text>
        </TextContainer>
        <TextContainer style={{marginTop: '-20px'}}>
            <Text>All Rights Reserve</Text>
        </TextContainer>
        <TextContainer style={{marginTop: '-20px'}}>
            <Text style={{fontSize: '15px'}}>Follow Us On</Text>
        </TextContainer>
        <IconsContainer>
            <Link href='https://www.facebook.com' target='_blank'>
                <AiFillFacebook/>
            </Link>
            <Link href='https://www.twitter.com' target='_blank'>
                <AiFillTwitterCircle/>
            </Link>
            <Link href='https://www.github.com/mrzyphyl' target='_blank'>
                <AiFillGithub/>
            </Link>
            <Link href='https://www.reddit.com' target='_blank'>
                <AiFillRedditCircle/>
            </Link>
            <Link href='https://www.linkedin.com' target='_blank'>
                <AiFillLinkedin/>
            </Link>
        </IconsContainer>
    </FooterBox>
  )
}


const FooterBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
    background: #4A9990;
`

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
`

const LogoImage = styled.img`
    width: 100px;
    height: 100px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Text = styled.p`
    font-size: 12px;
    color: white;
`

const IconsContainer = styled.div`
    margin-top: -5px;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: white;
    margin-bottom: 15px;
`

const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none
`

export default Footer