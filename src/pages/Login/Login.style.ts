import { styled } from "styled-components";

export const LoginContainer = styled.div`
display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const FormLogin = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const ErrorLabel = styled.span`
font-size: 12px;
color: #B33A3A;
`;

export const ButtonStyle = styled.button`
    padding: 10px;
    color: #18456C;
    border: #18456C solid 1px;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    &:hover {
        border: none;
    }
`;
