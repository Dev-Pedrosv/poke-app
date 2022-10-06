import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Item = styled.div`
  width: 140px;
  height: 140px;

  background: #ffffff;
  border: 1px solid #74cb48;
  border-radius: 8px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: end;
  position: relative;

  img {
    position: absolute;
    width: 80%;
    top: 10px;
  }
`;

export const Description = styled.p`
  width: 100%;
  height: 24px;
  background: #74cb48;
  text-align: center;

  font-weight: 400;
  font-size: 16px;

  color: #ffffff;
`;

export const Number = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #74cb48;

  position: absolute;
  right: 5px;
  top: 2px;
`;
