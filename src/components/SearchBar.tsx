import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Container, IconButton, Input, SearchIcon } from '../styles/components/SearchBar'
import { translate } from '../utils/translation';
import { useUiContext } from '../store/UiContext';

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const [{ language }] = useUiContext()
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/items?search=' + query)
  }

  return (
    <Container onSubmit={handleSearch}>
      <Input placeholder={translate(language, 'Never stop searching')} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} />
      <IconButton aria-label={translate(language, 'search')} type="submit" disabled={query === ""}>
        <SearchIcon src="/magnifying-glass-solid.svg" alt={translate(language, 'search')} />
      </IconButton>
    </Container>
  )
}
