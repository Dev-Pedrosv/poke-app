import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

`;

export const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.background};
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${theme.colors.darkGray};
  display: flex;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "12px"};
`;
