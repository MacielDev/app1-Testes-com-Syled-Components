import React, { useState } from "react";
import {  Conteudo } from './styles';

import { ImageIcon,Box } from '../UI/index';

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

export const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <Conteudo>
        Saldo disponível{" "}
        <span>
          <ImageIcon src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <div>
            <span>R$</span> 0,00{" "}
          </div>
        ) : null}
      </Conteudo>

      <button onClick={toggleHandler}>
        <ImageIcon
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </button>
    </Box>
  );
};

