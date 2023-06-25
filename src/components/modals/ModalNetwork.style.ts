import { styled } from "styled-components";

export const ModalNetworkStyled = styled.div`
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0,0,0,0.4); 
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 50%;
  height: 400px;
  font-size: 20px;
  gap: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-botton: 20px;
  `;

export const CLoseModalButton = styled.div`
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

`;