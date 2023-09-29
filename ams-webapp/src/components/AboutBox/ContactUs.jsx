import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { devices } from "../Device/DeviceSizes"
import { FormContainer, HeaderContainer, HeaderText, Input, SmallText, SubmitButton, SubmitLink, TextArea } from './Common'
import { Marginer } from '../Marginer/Margin'
import emailjs from '@emailjs/browser'

function ContactUs() {
  const form = useRef();
  const [clearname, setClearName] = useState("")
  const [clearemail, setClearEmail] = useState("")
  const [clearbody, setClearBody] = useState("")
  const clrname = useRef("")
  const clremail = useRef("")
  const clrbody = useRef("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5uit6sd', 'template_ytmc7rq', form.current, 'SToOoK0rzDIp7x7x_')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent!")
      }, (error) => {
          console.log(error.text);
      });
      
    clrname.current.value = ""
    clremail.current.value = ""
    clrbody.current.value = ""
  };
  return (
    <ContactContainer>
      <CardContainer>
        <CardBoxContainer>
          <CardBox>
            <FormContainer
            ref={form}
            onSubmit={sendEmail} 
            >
              <HeaderContainer>
                <HeaderText>Want to Collab?</HeaderText>
                <SmallText>Send us an email 😎</SmallText>
              </HeaderContainer>
              <Input 
              type='text'
              name="user_name"
              placeholder='Name'
              value={clearname} 
              onChange={(a) => setClearName(a.target.value)}
              ref={clrname}
              />
              <Marginer direction="vertical" margin="0.5rem" />
              <Input 
              type='email'
              name="user_email"
              placeholder='Email'
              value={clearemail} 
              onChange={(a) => setClearEmail(a.target.value)}
              ref={clremail}
              />
              <Marginer direction="vertical" margin="0.5rem" />
              <TextArea 
              type='body' 
              name="message"
              placeholder='Message'
              value={clearbody} 
              onChange={(a) => setClearBody(a.target.value)}
              ref={clrbody}
              />
              <Marginer direction="vertical" margin="1.5rem" />
              <SubmitButton>
                <SubmitLink>Send</SubmitLink>
              </SubmitButton>
              <Marginer direction="vertical" margin="0.5rem" />
            </FormContainer>
          </CardBox>
        </CardBoxContainer>
      </CardContainer>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardContainer = styled.div`
    display: grid;
    width: 100%;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    @media ${devices.tablet} {
        gap: 5rem;
        display: flex;
    }
`


const CardBoxContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`


const CardBox = styled.div`
    align-items: center;
    justify-items: center;
    background: #ffffff9d;
    padding: 5px;
    width: 100%;
    border: 0px solid rgba(10, 10, 10, 1);
    border-radius: 8px;
    box-shadow: 0px 0px 139px 9px rgba(0, 0, 0, 0.3);

    @media ${devices.tablet} {
      width: 80%;
    }
`


export default ContactUs