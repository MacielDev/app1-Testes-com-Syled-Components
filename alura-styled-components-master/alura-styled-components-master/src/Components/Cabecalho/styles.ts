import styled from "styled-components";
import { corPrimaria } from "../UI/variaveis";

interface Props{
  primary: string;
}

export const BtnCabecalho = styled.button<Props>`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background : ${(props) => props.primary ? "white" : corPrimaria };
  color : ${(props) => props.primary ? corPrimaria : "white" };
`;

export const StyledHeader = styled.nav `
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;
export const Logo = styled.img `
  height: 50px;
  width: 50px;
`;
