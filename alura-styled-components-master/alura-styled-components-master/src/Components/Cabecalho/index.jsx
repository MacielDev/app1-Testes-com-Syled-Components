import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import * as C from './styles';

export const Cabecalho = () => {
  return (
    <C.StyledHeader>
      <C.Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <C.BtnCabecalho primary ={"white"} href="https://google.com">
          Ajuda
        </C.BtnCabecalho>
        <C.BtnCabecalho  href="https://google.com">
          Sair
        </C.BtnCabecalho>
      </div>
    </C.StyledHeader>
  );
};




