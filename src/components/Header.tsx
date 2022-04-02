import React from 'react'
import { Container, ContainerAndLogo, Logo } from '../styles/components/Header'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <Container>
      <ContainerAndLogo>
        <Logo src="/logo-meli.png" alt="logo" />
        <SearchBar />
      </ContainerAndLogo>
    </Container>
  )
}
