import { GetServerSideProps } from "next"
import { useEffect } from "react";
import styled from "styled-components";
import ProductDetails from "../../components/ProductDetails";
import { api } from "../../services/apis"
import { product as productType } from "../../types/product";


interface Props {
  error: boolean;
  product: productType;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Product({ product, error }: Props) {
  useEffect(() => {
    console.log(product)
  }, [])
  return (
    <Container><ProductDetails product={product} /></Container>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const props = { product: [], error: false }
  await api.get("/items/" + context.params.id)
    .then((res) => {
      console.log(res)
      if (res.status >= 200 && res.status < 300) {
        props.product = res.data
      } else {
        props.product = []
        props.error = true
      }
    })
  return { props: props }
}
