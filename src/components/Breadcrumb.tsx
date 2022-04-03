import React from 'react'
import { Container } from '../styles/components/Breadcrumb';
import { filterItem } from '../types/categories'

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
            <span key={index}>
              <span key={index}>{category.name}</span>
              {!isTheLastOne(categories, index) && <span>{'>'}</span>}
            </span>
          )
        })
      }
    </Container>
  )
}
