import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
  max-width: 28rem;
  margin: 2.5rem auto;
  padding: 1rem;
  background-color: #f9f9f9; /* Example background color */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  color: #333; /* Example text color */
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #555; /* Example label color */
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd; /* Example border color */
  border-radius: 4px;
  font-size: 1rem;
  color: #333; /* Example input text color */
  background-color: #fff; /* Example input background color */
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff; /* Example focus color */
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff; /* Example button text color */
  background-color: #007bff; /* Example button background color */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Example button hover color */
  }
`;

const JoinQueue = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('User Joined Queue:', { name, phone });
  };

  return (
    <Layout>
      <Container>
        <Title>Join the Queue</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label>Name</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label>Phone</Label>
            <Input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default JoinQueue;