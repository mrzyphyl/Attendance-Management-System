import React from 'react'
import { styled } from "styled-components"
import PartyParrot from '../../assets/icons/partyparrot.gif'

function SecretPage() {
  return (
    <SecretBox>
        <AnimationBox>
            <Parrot src={PartyParrot}/>
        </AnimationBox>
    </SecretBox>
  )
}

const SecretBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const AnimationBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Parrot = styled.img`
    height: 200px;
    width: 200px;
`

export default SecretPage