import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Home from './Home';



const RegistrationPage = ({name ,setName, email  ,setEmail}) => {


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    



  };

  return (
    <Container>
      <Card>
        <Title>Registration Form</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" value={name} onChange={handleNameChange} />
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" value={email} onChange={handleEmailChange} />
          <Link to="/Home"><Button  type="submit">Register</Button></Link>
        </Form>
      </Card>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Card = styled.div`
  width: 450px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.5rem;
  margin:1rem;
`;

const Input = styled.input`
  height: 40px;
  padding: 0.5rem;
  font-size: 1.2rem;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 1rem;
`;

const Button = styled.button`
  height: 3rem;
  font-size: 1.3rem;
  margin: 1rem;
  background-color: #4285f4;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #3270e6;
  }
`;

export default RegistrationPage;
