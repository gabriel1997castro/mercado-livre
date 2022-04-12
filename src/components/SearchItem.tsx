import Link from 'next/link';
import React from 'react'
import { useUiContext } from '../store/UiContext';
import { Row } from '../styles/components/BaseComponents';
import { CityName, Container, ContainerImg, ContainerInfo, Divider, InternalContainer, Price, PriceAndTitle, ProductImg, Title, FreeShippingIcon } from '../styles/components/SearchItem';
import { result as resultType } from "../types/result"
import { parsePrice } from '../utils/parsers';
import { translate } from '../utils/translation';

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
            <Row style={{ alignItems: "center", maxHeight: "3rem" }}>
              <Price>{parsePrice(language, result, 0)}</Price>
              {result.shipping.free_shipping && <FreeShippingIcon src="/truck-solid.svg" alt={translate(language, 'free-shipping')} />}
            </Row>
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
