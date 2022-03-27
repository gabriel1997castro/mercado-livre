import React from 'react'
import { GetServerSideProps } from "next"
import SearchResults from '../components/SearchResults'
import { api } from '../services/apis'
import { result as resultType } from '../types/result'
import { Container } from '../styles/pages/Items'



interface Props {
  results: resultType[]
  error: boolean;
}

export default function Items({ results, error }: Props) {
  return (
    <Container><SearchResults results={results} error={error} /></Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const props = { results: [], error: false }
  await api.get("/sites/MLA/search?q=:" + context.query.search)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        props.results = res.data.results
      } else {
        props.results = []
        props.error = true
      }
    })
  return { props: props }
}
