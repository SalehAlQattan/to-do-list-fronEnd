// improting components from styled components
import styled, { createGlobalStyle } from 'styled-components';
// creating style for the whole website
export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: Arial, Helvetica, sans-serif;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
  }
`;

export const AppWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const DoneButtonStyled = styled.button`
  background: ${({ theme }) => theme.darkGray};
  color: ${({ theme }) => theme.backgroundColor};
  border: none;
  padding: 1rem;
  border-radius: 5px;
  font-size: 2rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
`;

export const DeleteButtonStyled = styled.button`
  background: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.backgroundColor};
  border: none;
  padding: 1rem;
  border-radius: 5px;
  font-size: 2rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
`;

export const AddButtonStyled = styled.button`
  background: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.backgroundColor};
  border: none;
  padding: 1rem;
  border-radius: 5px;
  font-size: 2rem;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 1rem;
  font-weight: bold;
`;

export const ToggleButtonStyled = styled.button`
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.backgroundColor};
  border: none;
  padding: 1rem;
  border-radius: 5px;
  font-size: 2rem;
  text-transform: uppercase;
  cursor: pointer;
`;

export const AddInputStyled = styled.input`
  border: none;
  padding: 1rem;
  font-size: 2rem;
  margin-left: 1rem;
  border-radius: 5px;
`;
