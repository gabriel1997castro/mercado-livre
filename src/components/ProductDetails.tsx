import React from 'react'
import styled from 'styled-components';
import { useUiContext } from '../store/UiContext';
import { parseCondition, parseSoldQuantity } from '../utils/parsers';

const Container = styled.div`
  width: 70%;
  margin: 2rem;
  background-color: ${props => props.theme.colors.tertiaryBackground};
  min-height: 70vh;
  height: 40rem;

  @media (max-width: 700px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ProductImg = styled.img`
  object-fit: contain;
  width: 15rem;
  /* max-height: 7rem; */
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: ${(props: { flex?: number }) => props.flex || 1} ;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props: { flex?: number }) => props.flex || 1};
  padding: 2rem;
`

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30rem;
  padding: 0.5rem;

  cursor: pointer;

  @media (max-width: 700px) {
    width: 8rem;
  }
`

export const ProductTitle = styled.h1`
  font-size: 1rem;
  width: 100%;
`

export const ProductInfo = styled.span`
  color: rgba(0,0,0,.55);
  font-size: 14px;
  font-weight: 400;
  white-space: pre-wrap;
    `

export default function ProductDetails({ product }) {
  const [{ language }] = useUiContext();
  return (
    <Container>
      <Row>
        <Column flex={3}>
          <ContainerImg>
            <ProductImg src={product.pictures[0].url} />
          </ContainerImg>
        </Column>
        <Column flex={1}>
          <ProductInfo>{parseCondition(product)} - {parseSoldQuantity(language, product)}</ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
        </Column></Row>
    </Container>
  )
}
