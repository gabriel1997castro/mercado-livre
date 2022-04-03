import Link from 'next/link';
import React from 'react'
import { useUiContext } from '../store/UiContext';
import { CityName, Container, ContainerImg, ContainerInfo, Divider, InternalContainer, Price, PriceAndTitle, ProductImg, Title } from '../styles/components/SearchItem';
import { result as resultType } from "../types/result"
import { parsePrice } from '../utils/parsers';

interface Props {
  result: resultType;
}

export default function SearchItem({ result }: Props) {

  const [{ language }] = useUiContext()

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
            <Price>{parsePrice(language, result, 0)}
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
