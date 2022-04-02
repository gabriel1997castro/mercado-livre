import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Container, IconContainer, Input, SearchIcon } from '../styles/components/SearchBar'

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault()
    router.push('/items?search=' + query)
  }

  return (
    <Container onSubmit={handleSearch}>
      <Input onChange={(e) => setQuery(e.target.value)} />
      <IconContainer type="submit"><SearchIcon src="/magnifying-glass-solid.svg" /></IconContainer>
    </Container>
  )
}
