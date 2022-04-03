import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  margin: 2rem;
  background-color: ${props => props.theme.colors.background.tertiary};
  min-height: 70vh;

  @media (max-width: 700px) {
    width: 90%;
  }

  @media (max-width: 600px) {
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
