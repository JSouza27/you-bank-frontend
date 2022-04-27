import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --color-black: #000;
    --color-white: #FFF;
    --color-grey: #252525;
    --color-medium-grey: #494949;
    --color-dark-grey: #1E1E1E;

    --font-weight-300: 300;
    --font-weight-400: 400;
    --font-weight-500: 500;////
    --font-weight-600: 600;
    --font-weight-700: 700;

    --font-family-Raleway: 'Raleway', sans-serif;
    --font-family-Int: 'Inter', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: var(--font-family-Int);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
