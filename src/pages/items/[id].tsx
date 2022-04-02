import { GetServerSideProps } from "next"
import { useEffect } from "react";
import { api } from "../../services/apis"
import { product as productType } from "../../types/product";


interface Props {
  error: boolean;
  product: productType;
}
export default function Product({ product, error }: Props) {
  useEffect(() => {
    console.log(product)
  }, [])
  return (
    <div>{product.title}</div>
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
