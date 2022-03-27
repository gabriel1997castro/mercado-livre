import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  margin: 2rem;
  background-color: ${props => props.theme.colors.tertiaryBackground};
  min-height: 80vh;

  @media (max-width: 700px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`
