import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    display: flex;
    flex-direction: column;
  }

  #root {
    display: flex;

    flex-direction: column;
    min-height: 100%;

  }

  main {
    flex-grow: 1;
    max-width: 1400px;
    margin: auto !important;
    width: 100%;
    padding: 15px;
    position: relative;
  }
`;

export default GlobalStyles;
