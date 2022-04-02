import Link from 'next/link';
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
        <Link href={"items/" + result.id}>
          <ContainerImg>
            <ProductImg src={result.thumbnail} />
          </ContainerImg>
        </Link>
        <ContainerInfo>
          <PriceAndTitle>
            <Price>
              {
                Intl.NumberFormat('es-AR', { style: 'currency', currency: result.prices.presentation.display_currency })
                  .format(result.price)
              }
            </Price>
            <Link href={"items/" + result.id}>
              <Title>{result.title}</Title>
            </Link>
          </PriceAndTitle>
          <CityName>{result.seller_address.city.name}</CityName>
        </ContainerInfo>
      </InternalContainer>
      <Divider />
    </Container>
  )
}
