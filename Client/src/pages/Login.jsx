import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../Redux/apiCalls";
import {  ToastContainer } from "react-toastify";
const Container = styled.div`
  width: 100w;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    url("https://mrserie.fr/wp-content/uploads/2021/09/netflix-library-photo-scaled.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #00203fff;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: red;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 10px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error, successLog } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  console.log(error);
  useEffect(() => {
    if (successLog) navigate("/");
  }, [successLog, navigate]);
  return (
    <>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={(e) => handleClick(e)} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <Error>Something went wrong...</Error>}
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>

            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Login;
