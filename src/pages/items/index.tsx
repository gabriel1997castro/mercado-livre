import React from 'react'
import { GetServerSideProps } from "next"
import SearchResults from '../../components/SearchResults'
import { api } from '../../services/apis'
import { result as resultType } from '../../types/result'
import { categories as categoriesType, filterCategory } from '../../types/categories'
import { Container } from '../../styles/pages/Items'
import { Breadcrumb } from '../../components/Breadcrumb'
import { extractFilterCategories } from '../../utils/parsers'



interface Props {
  results: resultType[]
  error: boolean;
  categories: filterCategory[]
}

export default function Items({ results, error, categories }: Props) {
  return (
    <Container>
      {categories && <Breadcrumb categories={categories} />}
      <SearchResults results={results} error={error} />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const props = { results: [], error: false, categories: {} }
  await api.get("/sites/MLA/search?q=:" + context.query.search + "&limit=4")
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        props.results = res.data.results
        props.categories = extractFilterCategories(res.data.filters)
        console.log('aqui: ', props.categories)
      } else {
        props.results = []
        props.error = true
      }
      return res
    })
  return { props: props }
}
