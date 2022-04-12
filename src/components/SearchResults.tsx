import React from 'react'
import { useUiContext } from '../store/UiContext';
import { Column, Row } from '../styles/components/BaseComponents';
import { Container, Error } from '../styles/components/SearchResults';
import { result as resultType } from '../types/result'
import { translate } from '../utils/translation';
import SearchItem from "./SearchItem"


interface Props {
  results: resultType[];
  error: boolean;
}
export default function SearchResults({ results, error }: Props) {
  const [{ language }] = useUiContext()
  // results = []
  return (
    <Container>
      {error && <Error><span>Houve um problema, tente novamente mais tarde.</span></Error>}
      {results && Array.isArray(results) && results.length === 0 &&
        <Row>
          <Column alignItems='center'>
            {translate(language, "There are no results for your search.")}
          </Column>
        </Row>}
      {results && Array.isArray(results) && results.map(item => (<SearchItem key={item.id} result={item} />))}
    </Container>
  )
}
