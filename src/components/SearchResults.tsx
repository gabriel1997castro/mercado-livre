import React from 'react'
import { Container, Error } from '../styles/components/SearchResults';
import { result as resultType } from '../types/result'
import SearchItem from "./SearchItem"


interface Props {
  results: resultType[];
  error: boolean;
}
export default function SearchResults({ results, error }: Props) {

  return (
    <Container>
      {error && <Error><span>Houve um problema, tente novamente mais tarde.</span></Error>}
      {results && Array.isArray(results) && results.map(item => (<SearchItem key={item.id} result={item} />))}
    </Container>
  )
}
