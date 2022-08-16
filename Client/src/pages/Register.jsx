import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { newUser } from "../Redux/apiCalls";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100w;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    url("https://mrserie.fr/wp-content/uploads/2021/09/netflix-library-photo-scaled.jpg")
      center;
  background-size: cover;
  display: flex;
    align-items:center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`;

const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`;

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`;

const Agreement = styled.span`
    font-size:12px;
    margin:20px 0px;
`;

const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:#00203FFF;
    color:white;
    cursor:pointer;
`;

const Register = () => {
  const [inputs,setInputs] = useState({})
  const {success} =  useSelector((state)=>state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e)=>{
    setInputs(prev=>{
      return{ ...prev ,[e.target.name]:e.target.value}
    })
  }
const handleSumbit = (e)=>{
  e.preventDefault()
  const user= {...inputs}
  newUser(dispatch,user)
}

useEffect(()=>{
  if(success){
    navigate('/login')
  }
},[success,navigate])


  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form onSubmit={(e)=>handleSumbit(e)}             >
          {/* <Input  placeholder="name" /> */}
          {/* <Input placeholder="lastname" /> */}
          <Input name="username" placeholder="username" onChange={(e)=>handleChange(e)} />
          <Input name="email" placeholder="email"  onChange={(e)=>handleChange(e)}/>
          <Input name="password" placeholder="password"  onChange={(e)=>handleChange(e)}/>
          <Input name="password" placeholder="confirm Password"  onChange={(e)=>handleChange(e)}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;