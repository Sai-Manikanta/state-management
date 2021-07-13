import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        color: #3b2e2e;
        font-family: 'Roboto', sans-serif;
        background-color: #ddf3bc;
    }
`;

export default GlobalStyles