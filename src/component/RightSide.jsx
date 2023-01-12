import React, { useState } from 'react'
import styled from 'styled-components'

const RightSide = () => {
    const iniCredentials = {
        id:'',
        password:''
    }
    const [credentials,setCredentials] = useState(iniCredentials)
    const [passwordVisible,setPasswordVisible] = useState(false)
    const handleCredentialsChange =(e)=>{
        const {name,value} = e.target
        setCredentials(prev=>({
            ...prev,
            [name]:value
        }))
    }
  return (
    <Container>
        <Heading>Login</Heading>
        <InputDiv>
            <InpP>Login ID</InpP>
            <Input type='text' placeholder='Enter Login ID' name = 'id' value={credentials.id} onChange = {handleCredentialsChange}/>
        </InputDiv>
        <InputDiv>
            <InpP>Password</InpP>
            <InpContainer>
                <PasswordInput placeholder='Enter Password' type = {passwordVisible?'text':'password'} name = 'password' value={credentials.password} onChange = {handleCredentialsChange}/>
                <Img onClick={()=>{setPasswordVisible(!passwordVisible)}} src = {passwordVisible?'./notseepassword.jpg':'./seepassword.jpg'}/>
            </InpContainer>
        </InputDiv>
        <InputDiv style ={{marginTop:'1rem'}}>
            <Container1>
                <InpContainer>
                    <CheckBoxInput type='checkbox' />
                    <Span>Remember Me</Span>
                </InpContainer>
                <InpContainer>
                    <OrangeText>Chnage Password</OrangeText>
                </InpContainer>
            </Container1>
            <InpContainer style ={{marginTop:'1rem'}}>
                <CheckBoxInput type='checkbox' />
                <Span>Agree to <OrangeText><Underline>Terms & Conditions</Underline></OrangeText></Span>
            </InpContainer>
        </InputDiv>
        <Button>Login</Button>
        <P>Don't have an account?<OrangeText><Underline>Register Here</Underline></OrangeText></P>
    </Container>
  )
}

export default RightSide

const Underline = styled.span({
    textDecoration:'underline'
})
const InpP = styled.p({
    margin:'1rem 0rem 0.5rem 0rem',
    fontSize:'18px',
    fontWeight:500,
})
const Button = styled.button`
    background-color:#1575A7;
    color:white;
    width:25rem;
    height:2.5rem;
    border-radius:10px;
    cursor:pointer;
    margin:2rem 0px;
    @media(max-width:510px){
        width:80vw;
    };
`
const OrangeText = styled.span({
    color:'#F78719',
    cursor:'pointer'
})
const Container1 = styled.div`
    display:flex;
    justify-content:space-between;
    width:32rem;
    @media (max-width:510px){
        width:95vw;
    }
`
const CheckBoxInput = styled.input({
    marginRight:'0.5rem'
})
const Span = styled.span({

})
const P = styled.p({
    margin:'1rem 0rem 0.5rem 0rem',
    fontSize:'18px',
})
const InputDiv = styled.div({

})
const Input = styled.input`
    padding:15px;
    width:30rem;
    border:1px solid #04072F;
    outline:none;
    border-radius:10px;
    @media (max-width:510px){
        width:90vw;
    };
`
const PasswordInput = styled.input`
    width:27rem;
    padding:15px;
    border:1px solid #04072F;
    border-right-color:white;
    outline:none;
    border-radius:10px 0px 0px 10px;
    @media (max-width:510px){
        width:75vw;
    };
`
const Heading = styled.h1({
    marginBottom:'1rem',
    fontSize:'48px',
    fontWeight:700,
})
const Img = styled.img`
    height:30px;
    cursor:pointer;
    width:30px;
    padding:10px 10px;       
    margin-left:-1px;
    border:1px solid #04072F;
    border-left-color:white;
    border-radius:0px 10px 10px 0px;
    @media (max-width:510px){
        width:10vw;
    };
`
const Container = styled.div({
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
})
const InpContainer = styled.div({
    display:'flex',
    alignItems:'center'
})