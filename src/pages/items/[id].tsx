import { GetServerSideProps } from "next"
import { useEffect } from "react";
import styled from "styled-components";
import ProductDetails from "../../components/ProductDetails";
import { api } from "../../services/apis"
import { categories as categoriesType } from "../../types/categories";
import { product as productType, description as descriptionType } from "../../types/product";


interface Props {
  error: boolean;
  product: productType;
  description: descriptionType;
  categories: categoriesType;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Product({ product, error, description, categories }: Props) {
  useEffect(() => {
    console.log(categories)
  }, [])
  return (
    <Container>
      <ProductDetails product={product} description={description} />
    </Container>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const props = { product: {}, error: false, description: {}, categories: {} }
  await api.get("/items/" + context.params.id)
    .then((res) => {
      console.log(res)
      if (res.status >= 200 && res.status < 300) {
        props.product = res.data
      } else {
        props.product = {}
        props.error = true
      }
      return res
    }).then(async (res) => {
      if (res.status >= 200 && res.status < 300) {
        if (res.data.category_id) {
          await api.get("/categories/" + res.data.category_id)
            .then((res) => {
              if (res.status >= 200 && res.status < 300) {
                props.categories = res.data
              } else {
                props.categories = {}
              }
            })
        }

      }
    })

  await api.get("/items/" + context.params.id + '/description')
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        props.description = res.data
      } else {
        props.description = {}
        props.error = true
      }
    })


  return { props: props }
}
