import React from "react";

import { Cabecalho } from "./Components/Cabecalho";
import { Container } from "./Components/Container";
import { GlobalStyle } from "./Components/styles/GlobalStyles";

export function App() {
  return (
    <>
      <GlobalStyle/>
      <Cabecalho />
      <Container />
    </>
  );
}

