import React from 'react'
import styled from 'styled-components'
import { result as resultType } from '../types/results'
import SearchItem from "./SearchItem"

const Container = styled.div`
  width: 80%;
  margin: 2rem;
  background-color: ${(props) => props.theme.colors.tertiaryBackground};
  min-height: 80vh;
`

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
