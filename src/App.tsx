import React, { useState } from "react";
import styled, { css, keyframes, ThemeProvider } from "styled-components";

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 42px;
`;
const StyledData = styled("p")`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.secundary};
`;

type TStyledButtonProps = {
  variant?: "success" | "failed";
};

const RotateKeyFrame = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
const themeBlue = {
  main: "blue",
  secundary: "#8d8dff"
};

const themeRed = {
  main: "red",
  secundary: "#ff4343"
};

const StyledButton = styled.button<TStyledButtonProps>`
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid black;
  padding: 8px 16px;

  :hover {
    cursor: pointer;
    background-color: lightgray;
  }

  ${(props) => {
    if (props.variant === "success") {
      return css`
        background-color: green;
        color: green;
      `;
    }
    if (props.variant === "failed") {
      return css`
        background-color: red;
        color: red;
      `;
    }
  }}
`;

function App() {
  const [theme, setTheme] = useState(themeBlue);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <StyledHeader>Fabio Moreno</StyledHeader>

        <StyledButton onClick={()=> setTheme(themeBlue)}>Set Blue Theme</StyledButton>
        <StyledButton onClick={()=> setTheme(themeRed)}>Set Red Theme</StyledButton>
        <StyledData>linkiez@gmail.com</StyledData>
        <StyledData>19 9 99241665</StyledData>
        <StyledData>Brasileiro</StyledData>
        <StyledButton variant="success">Adicionar</StyledButton>
        <StyledButton variant="failed" style={{ marginLeft: "8px" }}>
          Remover
        </StyledButton>
        <StyledButton style={{ marginLeft: "8px" }}>Detalhes</StyledButton>
      </ThemeProvider>
    </div>
  );
}

export default App;
