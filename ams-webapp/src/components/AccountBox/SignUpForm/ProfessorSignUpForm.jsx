import React, { useState } from 'react'
import { styled } from 'styled-components'
import { CancelButton, CancelLink, HeaderText, Input, Select, SignUpBoxContainer, SignUpContainer, SignUpFormBoxContainer, SignUpFormContainer, SignUpScrollableContent } from '../Common'
import { Marginer } from '../../Marginer/Margin'
import { devices } from '../../Device/DeviceSizes'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export function ProfSignUpForm () {
    const navigate = useNavigate()

    const [ firstname, setFirstname ] = useState()
    const [ middlename, setMiddlename ] = useState()
    const [ lastname, setLastname ] = useState()
    const [ age, setAge ] = useState()
    const [ birthday, setBirthday ] = useState()
    const [ gender, setGender ] = useState()
    const [ address, setAddress ] = useState()
    const [ user_status, setUser_Status ] = useState()
    const [ employee_number, setEmployee_Number ] = useState()
    const [ department, setDepartment ] = useState('CITE')
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/professor-user', { 
            firstname, 
            middlename, 
            lastname, 
            age, 
            birthday, 
            gender, 
            address, 
            user_status, 
            employee_number, 
            department, 
            email, 
            password  
        })
        .then(result => {
            console.log('Professor Data:', result.data)
            const userId = result.data._id
            localStorage.setItem('userId', userId)
        })
        .catch(err => console.log(err))
        navigate("/professor-home")
    }

    return (
        <SignUpContainer>
            <SignUpBoxContainer>
                <HContainer>
                    <HeaderText>Registration Form: </HeaderText>
                </HContainer>
                <SignUpScrollableContent>
                    <SignUpFormBoxContainer onSubmit={onSubmit}>
                        <SignUpFormContainer>
                            <Input 
                            type='text' 
                            placeholder='First Name'
                            value={firstname} 
                            onChange={(e) => setFirstname(e.target.value)}/>

                            <Input 
                            type='text' 
                            placeholder='Middle Name'
                            value={middlename}
                            onChange={(e) => setMiddlename(e.target.value)}/>

                            <Input 
                            type='text' 
                            placeholder='Last Name'
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}/>

                        </SignUpFormContainer>
                        <Marginer direction="vertical" margin={'1.5em'}/>
                        <SignUpFormContainer>
                            <Input 
                            type='number' 
                            inputMode='numeric'
                            placeholder='Age'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}/>

                            <Input 
                            type='date' 
                            placeholder='Birthday'
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}/>

                            <Input 
                            type='text' 
                            placeholder='Gender'
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}/>

                        </SignUpFormContainer>
                        <Marginer direction="vertical" margin={'1.5em'}/>
                        <SignUpFormContainer>
                            <Input 
                            type='text' 
                            placeholder='Complete Address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}/>

                            <Input 
                            type='text' 
                            placeholder='Marital Status'
                            value={user_status}
                            onChange={(e) => setUser_Status(e.target.value)}/>

                        </SignUpFormContainer>
                        <Marginer direction="vertical" margin={'1.5em'}/>
                        <SignUpFormContainer>
                            <Input 
                            type='number' 
                            inputMode="numeric" 
                            placeholder='Employee Number'
                            value={employee_number}
                            onChange={(e) => setEmployee_Number(e.target.value)}/>

                            <Select 
                            value={department} 
                            onChange={(e) => setDepartment(e.target.value)}
                            >
                                <option value='CITE'>CITE</option>
                                <option value='CELA'>CELA</option>
                                <option value='CEA'>CEA</option>
                                <option value='CSS'>CSS</option>
                                <option value='CMA'>CMA</option>
                                <option value='CHS'>CHS</option>
                                <option value='CAS'>CAS</option>
                            </Select>

                        </SignUpFormContainer>
                        <Marginer direction="vertical" margin={'1.5em'}/>
                        <SignUpFormContainer>
                            <Input 
                            type='email' 
                            placeholder='Email Address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>

                            <Input 
                            type='password' 
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>

                            <Input type='password' placeholder='Confirm Password'/>

                        </SignUpFormContainer>
                        <Marginer direction="vertical" margin={'1.5em'}/>
                        <ButtonSubmit>
                            <ButtonType>Register</ButtonType>
                        </ButtonSubmit>
                        <Marginer direction="vertical" margin={'0.5em'}/>
                        <CancelLink>
                            <CancelButton onClick={() => {navigate("/")}}>Cancel</CancelButton>
                        </CancelLink>
                    </SignUpFormBoxContainer>
                </SignUpScrollableContent>
            </SignUpBoxContainer>
        </SignUpContainer>
    )
}

const HContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: start;
    margin-left: 20px;
    margin-top: 10px;
    justify-content: Start;
    flex-direction: column;

    @media ${devices.mobileS} {
        margin-bottom: 1.5rem;
    }
`

const ButtonType = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    width: 100%;
    height: 100%;
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

    @media ${devices.mobileL} {
        font-size: 20px;
    }
`

const ButtonSubmit = styled.a `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 3.5rem;
    color: #fff;
    text-decoration:none
`
