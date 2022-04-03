import styled from 'styled-components'
import { MEDIA_BREAKPOINTS } from '../../utils/constants'
export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 3rem;
  background-color: ${props => props.theme.colors.background.fourth};
  justify-content: center;
  align-items: center;
  min-width: 25rem;
`

export const Logo = styled.img`
  object-fit: contain;
  height: 2rem;
  margin-right: 2rem;
  @media ${MEDIA_BREAKPOINTS.mobile} {
    margin-right: 1rem;
  }
  cursor: pointer;
`

export const ContainerAndLogo = styled.div`
  display: flex;
  width: 70%;
  min-width: 25rem;
  @media ${MEDIA_BREAKPOINTS.mobile} {
    width: 90%;
  }
`
