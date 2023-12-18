// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';  

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderContainer = styled.header`
  background-color: #333;
  background: linear-gradient(to right, #080808); /* Replace these colors with your desired gradient */
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 0.8s ease-in-out; /* Apply the fadeIn animation */
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const BrandNames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BrandName = styled.h1`
  font-family: 'Arial', sans-serif;
  font-size: 15px;
  font-weight: bold;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin-right: 20px;
  padding-bottom: 5px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #fff;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-in-out;
  }

  &:hover:before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoImage src="/apple1.jpeg " alt="Logo" style={{ width: '15%', borderRadius: '50px' }} />
        <BrandNames>
          <BrandName>GadgetZippy</BrandName>
          <BrandName>iPhone Repair Center</BrandName>
        </BrandNames>
      </Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
     
    </HeaderContainer>
    
  );
};

export default Header;
