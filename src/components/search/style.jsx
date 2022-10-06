import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Input = styled.input`
  width: 100%;
  height: 48px;
  text-align: center;
  outline: none;
  padding: 4px 8px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.light};
  border-radius: 8px;

  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
  color: ${theme.colors.medium};

  margin: 20px;
`;
