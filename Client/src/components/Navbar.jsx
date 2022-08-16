import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import  Badge  from "@mui/material/Badge";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  heigth: 60px;
`;
const Wrapper = styled.div`
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`;
const Langage = styled.span`
  font-size: 14px;
`;
const SearchContainer = styled.div`
  border:0.5px solid lightgray;
  display:flex;
  align-items:center;
  margin-left:25px;
  padding;2px;
`;

const Input = styled.input`
  border: none;
`;

const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`;
const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
  text-decoration:none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Navbar = () => {
 const quantity = useSelector(state => state.cartReducer.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Langage>EN</Langage>
          <SearchContainer>
            <Input  placeholder="Search"/>
            <Search  style={{color:"gray",fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Movie-SHOP</Logo>
        </Center>
        <Right>
          <Link to="/register" style={{textDecoration:"none"}}>
          
          <MenuItems>REGISTER</MenuItems>
          </Link>
          <Link to="/login" style={{textDecoration:"none"}}>
          <MenuItems>SIG IN</MenuItems>
          </Link>
          <Link to="/cart">

          <MenuItems>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItems>
          </Link>         
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;