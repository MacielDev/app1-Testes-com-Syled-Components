import React from "react";

import * as S from './styles'  
import { Titulo } from "../Titulo";
import { Conta } from "../Conta";
import { Extrato } from "../Extrato"

export const Container = () => {
  return (
    <S.Container>
      <Titulo>Olá Fulano!</Titulo>
      <S.Conteudo className="conteudo">
        <Conta />
        <Extrato />
      </S.Conteudo>
    </S.Container>
  );
};
