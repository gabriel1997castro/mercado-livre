import React from 'react'
import styled from 'styled-components'
import { categories as categoriesType, filterCategory, filterItem } from '../types/categories'


const Container = styled.div`
  display: flex;
  height: 45px;
  width: 70%;
  padding-top: 3rem;

  span {
    color: ${props => props.theme.colors.text.primary};
    cursor: pointer;
    &:last-child,
    &:hover {
      color: ${(props) => props.theme.colors.text.secondary};
    }
    & ~ span {
      position: relative;
      margin-left: 22px;
      &::before {
        position: absolute;
        left: -22px;
        content: url('/chevron.svg');
      }
    }
  }
`
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
          return (<span key={category.id}>{category.name} {!isTheLastOne(categories, index) && ' >'}</span>)
        })
      }
    </Container>
  )
}
