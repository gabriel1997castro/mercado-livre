import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/components/SearchResults';
import { result as resultType } from '../types/result'
import SearchItem from "./SearchItem"


interface Props {
  results: resultType[];
}
export default function SearchResults({ results }: Props) {

  return (
    <Container>
      {results.map(item => (<SearchItem key={item.id} result={item} />))}
    </Container>
  )
}
