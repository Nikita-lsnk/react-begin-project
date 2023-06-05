import React, { useState } from 'react'
import styled from 'styled-components'

const App = () => {

  const [openModal, setOpenModal] = useState(false);

  

  return (
    <Container>
      <ModalBtn onClick={() => {setOpenModal(true)}}>Открыть окно</ModalBtn>
      <BlockModal>
        {openModal && (
          <MainModal>
          <MainSvg onClick={() => {setOpenModal(false)}} height="100" viewBox="0 0 200 200" width="100">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </MainSvg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </MainModal>
        )}
        
      </BlockModal>
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const ModalBtn = styled.button`
  z-index: 10;
  background: #fff;
  padding: 18px 25px;
  border-radius: 20px;
  font-weight: 500;
  border: 0;
  outline: none;
  font-size: 22px;
  cursor: pointer;
  line-height: 23px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.1s ease-in-out;
  :hover{
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
  :active{
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    transform: translateY(0);
  }
`;
const BlockModal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease-in-out;
`;

const MainModal = styled.div`
  z-index: 10;
  background-color: #fff;
  width: 70%;
  max-width: 500px;
  max-height: 300px;
  padding: 40px 30px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;
`;
const MainSvg = styled.svg`
  position: absolute;
  right: 10px;
  top: 10px;
  height: 24px;
  width: 24px;
  opacity: 0.3;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;
