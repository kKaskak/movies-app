import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
  }
  
  body {
  
  }

h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit; 
    text-decoration: inherit; 
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
