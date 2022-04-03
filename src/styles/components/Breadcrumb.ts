import styled from 'styled-components'
import { MEDIA_BREAKPOINTS } from '../../utils/constants'

export const Container = styled.div`
  display: inline-flex;
  height: 45px;
  width: 70%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  span {
    color: ${props => props.theme.colors.text.primary};
    cursor: pointer;
    &:last-child,
    &:hover {
      color: ${props => props.theme.colors.text.secondary};
    }
    & ~ span {
      position: relative;
      margin-left: 1rem;
    }
  }

  @media ${MEDIA_BREAKPOINTS.tablet} {
    width: 90%;
    padding: 1rem;
  }

  @media ${MEDIA_BREAKPOINTS.mobile} {
    width: 100%;
    padding: 1rem;
  }
`
