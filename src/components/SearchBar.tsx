import React from 'react'
import { Container, IconContainer, Input, SearchIcon } from '../styles/components/SearchBar'

export default function SearchBar() {
  return (
    <Container>
      <Input />
      <IconContainer><SearchIcon src="./magnifying-glass-solid.svg" /></IconContainer>
    </Container>
  )
}
