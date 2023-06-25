import styled from "styled-components";

export const ContainerLayout = styled.div`
  padding-bottom: 100px;
`;
export const NavBar = styled.div`
  display: flex;
  margin-bottom: 80px;
`;
export const UserSection = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  & span {
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`;

export const ButtonStyle = styled.button`
  display: flex;
  align-self: center;
  padding: 10px;
  color: #18456c;
  height: 40px;
  border: #18456c solid 1px;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  &:hover {
    border: none;
  }
  @media (max-width: 768px) {
    align-self: flex-end;
  }
`;
