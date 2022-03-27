import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'

const Container = styled.header`
  display: flex;
  width: 100%;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  object-fit: contain;
  height: 2rem;
  margin-right: 2rem;
  @media (max-width: 600px) {
    margin-right: 1rem;
  }
`

export default function Header() {
  return (
    <Container>
      <Logo src="./logo-meli.png" alt="logo" />
      <SearchBar />
    </Container>
  )
}
