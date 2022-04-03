import React from 'react'
import { useUiContext } from '../store/UiContext';
import { Container, ContainerImg, Description, DescriptionTitle, Price, ProductDetailsColumn, ProductImg, ProductInfo, ProductTitle, ProductDetailsRow } from '../styles/components/ProductDetails';
import { parseCondition, parsePrice, parseSoldQuantity } from '../utils/parsers';
import { translate } from '../utils/translation';


export default function ProductDetails({ product, description }) {
  const [{ language }] = useUiContext();
  const price = parsePrice(language, product).split(",");
  return (
    <Container>
      <ProductDetailsRow changeDirectionOnMobile>
        <ProductDetailsColumn flex="3">
          <ContainerImg>
            <ProductImg src={product.pictures[0].url} />
          </ContainerImg>
          <DescriptionTitle>{translate(language, "Product Description")}</DescriptionTitle>
          <Description>{description.plain_text}</Description>
        </ProductDetailsColumn>
        <ProductDetailsColumn flex="1">
          <ProductInfo>{parseCondition(product)} - {parseSoldQuantity(language, product)}</ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <Price>
            {price[0]}
            <span>
              <span>{price[1]}</span>
            </span>
          </Price>
        </ProductDetailsColumn>
      </ProductDetailsRow>
    </Container>
  )
}
