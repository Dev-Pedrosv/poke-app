import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  position: absolute;
  top: 70px;
  width: 360px;
  height: 550px;
  background-color: #74cb48;
  padding: 6px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .container-name {
    display: flex;
    align-items: center;
    gap: 12px;

    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #ffffff;
  }

  .z-index {
    z-index: 1;
  }

  .pokebola {
    width: 208px;
    height: 208px;
    position: absolute;
    right: 20px;
    top: 12px;
  }
`;

export const ContainerName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
`;

export const Number = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 32px;
  color: #ffffff;
`;

export const ContainerDescription = styled.div`
  position: absolute;
  top: 39%;
  width: 96%;
  height: 60%;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container-types {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    gap: 12px;
  }

  .about {
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #74cb48;
    margin-top: 12px;
  }
`;

export const Type = styled.p`
  background: #74cb48;
  border-radius: 10px;
  padding: 4px 8px;

  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
`;
