import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
    padding: 0 16px 0 16px;
    background-color: #2F2E41;
  }

  body, input, button {
    font-family: "Open Sans", sans-serif;
  }

  #root {
    margin: 0 auto;
    max-width: 1024px;
    @media screen and (max-width: 715px) {
      max-width: 340px;
    }
    @media screen and (min-width: 716px) and (max-width: 1200px) {
      max-width: 681px;
    }
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
