import styled from 'styled-components'
import { MEDIA_BREAKPOINTS } from '../../utils/constants'

export const Container = styled.div`
  width: 70%;
  margin: 1rem;
  background-color: ${props => props.theme.colors.background.tertiary};
  min-height: 70vh;

  @media ${MEDIA_BREAKPOINTS.mobile} {
    width: 90%;
  }

  @media ${MEDIA_BREAKPOINTS.tablet} {
    width: 100%;
  }
`

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.colors.background.tertiary};
  min-height: 60vh;
`
