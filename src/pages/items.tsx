import React, { useEffect, useState } from 'react'
import { GetStaticProps } from "next"
import styled from 'styled-components'
import SearchResults from '../components/SearchResults'
import { api } from '../services/apis'
import { result as resultType } from '../types/results'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface Props {
  results: resultType[]
}

export default function Items({ results }: Props) {

  return (
    <Container><SearchResults results={results} /></Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const props = { results: [] }
  await api.get("/sites/MLA/search?q=:query")
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        props.results = res.data.results
      }
    })
  return { props: props }
}
