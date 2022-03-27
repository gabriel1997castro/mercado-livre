import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.primaryBackground};
    color:  ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;

    @media (max-width: 700px) {
      font-size: 14px;
    }

    @media (max-width: 450px) {
      font-size: 12px;
    }
  }
`
