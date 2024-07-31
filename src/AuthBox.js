import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import logoImage from './logo.png'; // Update with your logo path
import backgroundImage from './background.jpg'; // Update with your background image path

// Keyframes for fading in the logo
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Keyframes for moving the logo to the top
const moveLogo = keyframes`
  from {
    opacity: 1;
    transform: translateY(-60);
  }
  to {
    opacity: 1;
    transform: translateY(-170px); /* Adjust based on your design */
  }
`;

// Keyframes for fading in the box
const fadeInBox = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${backgroundImage}) center/cover no-repeat;
  position: relative;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 28.88%; /* Adjust based on your design */
  left: 678px;
  animation: ${fadeIn} 2s forwards, ${moveLogo} 2s 2s forwards; /* Move after fade-in */
`;

const BoxContainer = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.9);
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
  animation: ${fadeInBox} 0.8s forwards; /* Appears after logo move */
  position: relative;
  top: 26px; /* Adjust based on logo movement */
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.3s;
  background:rgba(255,255,255,0.6);
  
  &:focus {
    border-color:green;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #28a745, #218838); /* Green gradient */
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  
  
  &:hover {
    background: linear-gradient(45deg, #2EB62C, #57C84D); /* Darker green gradient */
    box-shadow: 0 6px 12px rgba(255, 255, 255, 0.1); /* More prominent shadow */
  }
`;

const Message = styled.p`
  margin: 15px 0;
  font-size: 14px;
  color: white;
`;

const ToggleLink = styled.span`
  color: white;
  cursor: pointer;
  text-decoration: underline;
`;

const AuthBox = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showAuthBox, setShowAuthBox] = useState(false);

  useEffect(() => {
    // Show the auth box after the logo animation
    const moveLogoTimeout = setTimeout(() => {
      setShowAuthBox(true);
    }, 4000); // Duration of fade-in and moveLogo animations

    return () => clearTimeout(moveLogoTimeout);
  }, []);

  return (
    <Container>
      <LogoContainer>
        <img src={logoImage} alt="Logo" width="200" height="auto" />
      </LogoContainer>
      <BoxContainer show={showAuthBox}>
        <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
        <Form>
          {!isLogin && <Input type="text" placeholder="Username" />}
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
          <Message>
            {isLogin
              ? "Don't have an account? "
              : 'Already have an account? '}
            <ToggleLink onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Sign Up' : 'Login'}
            </ToggleLink>
          </Message>
        </Form>
      </BoxContainer>
    </Container>
  );
};

export default AuthBox;
