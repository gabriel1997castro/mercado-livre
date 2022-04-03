import { createGlobalStyle } from 'styled-components'
import { MEDIA_BREAKPOINTS } from '../utils/constants'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background.primary};
    color:  ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;

    @media ${MEDIA_BREAKPOINTS.mobile} {
      font-size: 12px;
    }

    @media ${MEDIA_BREAKPOINTS.tablet} {
      font-size: 14px;
    }
    @media ${MEDIA_BREAKPOINTS.laptop} {
      font-size: 16px;
    }
  }
`
