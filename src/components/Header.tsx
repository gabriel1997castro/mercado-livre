import { useRouter } from 'next/router';
import React from 'react'
import { Container, ContainerAndLogo, Logo } from '../styles/components/Header'
import SearchBar from './SearchBar'

export default function Header() {
  const router = useRouter();
  return (
    <Container>
      <ContainerAndLogo>
        <Logo onClick={() => router.push('/')} src="/logo-meli.png" alt="logo" />
        <SearchBar />
      </ContainerAndLogo>
    </Container>
  )
}
