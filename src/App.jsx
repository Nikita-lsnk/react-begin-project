import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const App = () => {

  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount( count + 1);
  };
  const Decrement = () => {
    setCount( count - 1);
  };

  return (
    <Container>
      <Title>Счётчик</Title>
      <SubTitle>{count}</SubTitle>
      <ButtonMinus onClick={Decrement}>- Минус</ButtonMinus>
      <ButtonPlus onClick={Increment}>+ Плюс</ButtonPlus>
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;
const Title = styled.h1`
  color: #556581;
  font-size: 2rem;
  margin: 0;
`;
const SubTitle = styled.h2`
  color: #000;
  font-size: 7rem;
  margin: 0;
  margin-bottom: 20px;
`;
const ButtonMinus = styled.button`
  background: transparent;
  border: 2px solid transparent;
  text-align: center;
  font-size: 22px;
  border-radius: 15px;
  padding: 10px 25px;
  cursor: pointer;
  margin: 0 10px;
  transition: all 0.05s ease-in-out;
  background-color: #e63946;
  color: #fff;
  box-shadow: 0 4px 0 darken(#e63946, 10%);
  border: 1px solid darken(#e63946, 15%);
`;
const ButtonPlus = styled.button`
  background: transparent;
  border: 2px solid transparent;
  text-align: center;
  font-size: 22px;
  border-radius: 15px;
  padding: 10px 25px;
  cursor: pointer;
  margin: 0 10px;
  transition: all 0.05s ease-in-out;
  background-color: #2a9d8f;
  color: #fff;
  box-shadow: 0 4px 0 darken(#2a9d8f, 10%);
  border: 1px solid darken(#2a9d8f, 15%);
`;