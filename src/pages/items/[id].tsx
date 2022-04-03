import { GetServerSideProps } from "next"
import Head from "next/head";
import styled from "styled-components";
import { Breadcrumb } from "../../components/Breadcrumb";
import ProductDetails from "../../components/ProductDetails";
import { api } from "../../services/apis"
import { useUiContext } from "../../store/UiContext";
import { categories as categoriesType, filter } from "../../types/categories";
import { product as productType, description as descriptionType } from "../../types/product";
import { extractBreadcrumbData } from "../../utils/parsers";
import { translate } from "../../utils/translation";


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
  flex-direction: column;
`;

export default function Product({ product, error, description, categories }: Props) {
  const [{ language }] = useUiContext()
  return (
    <Container>
      <Head>
        <title>{translate(language, "Product details page")}</title>
        <meta name="description" content={translate(language, "Show the product details") + ": " + product.title} />
      </Head>
      {categories && <Breadcrumb categories={extractBreadcrumbData(categories, product)} />}
      <ProductDetails product={product} description={description} />
    </Container>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const props = { product: {}, error: false, description: {}, categories: {} }
  await api.get("/items/" + context.params.id)
    .then((res) => {
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
