import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/components/Breadcrumb';
import { categories as categoriesType, filterCategory, filterItem } from '../types/categories'

function isTheLastOne(categories: filterItem[], index: number) {
  return categories.length - 1 <= index;
}
interface Props {
  categories: filterItem[];
}
export function Breadcrumb({ categories }: Props) {

  if (!categories) return <></>
  return (
    <Container>
      {
        categories.map((category, index) => {
          return (
            <>
              <span key={category.name}>{category.name}</span>
              {!isTheLastOne(categories, index) && <span>{'>'}</span>}
            </>
          )
        })
      }
    </Container>
  )
}
