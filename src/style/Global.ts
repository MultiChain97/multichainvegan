import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background: url(https://i.ibb.co/QMGdGJ6/1378083.png);
    

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
