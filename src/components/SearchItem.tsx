import React from 'react'
import { CityName, Container, ContainerImg, ContainerInfo, Divider, InternalContainer, Price, PriceAndTitle, ProductImg, Title } from '../styles/components/SearchItem';
import { result as resultType } from "../types/result"

interface Props {
  result: resultType;
}

export default function SearchItem({ result }: Props) {
  return (
    <Container>
      <InternalContainer>
        <ContainerImg>
          <ProductImg src={result.thumbnail} />
        </ContainerImg>
        <ContainerInfo>
          <PriceAndTitle>
            <Price>
              {
                Intl.NumberFormat('en-US', { style: 'currency', currency: result.prices.presentation.display_currency })
                  .format(result.price)
              }
            </Price>
            <Title>{result.title}</Title>
          </PriceAndTitle>
          <CityName>{result.seller_address.city.name}</CityName>
        </ContainerInfo>
      </InternalContainer>
      <Divider />
    </Container>
  )
}
