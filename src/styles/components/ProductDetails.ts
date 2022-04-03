import styled from 'styled-components'
import { Column, Row } from './BaseComponents'

export const Container = styled.div`
  width: 70%;
  margin: 2rem;
  background-color: ${props => props.theme.colors.background.tertiary};
  min-height: 70vh;
  min-width: 25rem;

  @media (max-width: 700px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const ProductImg = styled.img`
  object-fit: contain;
  height: 100%;
`

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 30rem;
  padding: 0.5rem;

  cursor: pointer;

  @media (max-width: 700px) {
    width: 8rem;
  }
`

export const ProductTitle = styled.h1`
  font-size: 1.2rem;
`

export const ProductInfo = styled.span`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
  font-weight: 400;
  white-space: pre-wrap;
  padding: 0.5rem;
`

export const Price = styled.span`
  display: flex;
  font-size: 1.8rem;
  padding: 2rem 0.5rem;
  font-weight: 500;
  span {
    display: flex;
    padding: 0.1rem;
    span {
      font-size: 1.2rem;
    }
  }
`

export const DescriptionTitle = styled.h2`
  font-size: 1rem;
`

export const Description = styled.span``

export const ProductDetailsColumn = styled(Column)`
  @media (max-width: 700px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`

export const ProductDetailsRow = styled(Row)`
  @media (max-width: 950px) {
    flex-direction: ${(props: { changeDirectionOnMobile?: boolean }) =>
      props.changeDirectionOnMobile && 'column-reverse'};
  }
`
