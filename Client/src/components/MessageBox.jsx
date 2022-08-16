import React, {  useState } from "react";
import { Send } from "@mui/icons-material";
import styled from "styled-components";
import {currentUser,userRequest} from "../requestMethode"
const Container = styled.div`
  height: 60vh;
  background-color: #00203FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color:white;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  color:white;

`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: red;
  color: white;
  cursor:pointer;
  
`;
const MessageBox = () => {
  const [email,setEmail] = useState("")
  const handleClick  = async()=>{
    if(email === ""){
      console.log("Please enter your email ")
    }
    if(email === currentUser.email){
      console.log(currentUser.email)
      const {data} = await userRequest.post("/user/sendEmail",{email:email})
      console.log(data)
    }
    else{
      console.log("Please enter a valid email..")
    }
  }
  
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get Timely Updated From your favorite products</Desc>
      <InputContainer>
        <Input placeholder="your email"  name= "email" onChange={(e)=>setEmail(e.target.value)}  />
        <Button onClick={handleClick}>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default MessageBox;
