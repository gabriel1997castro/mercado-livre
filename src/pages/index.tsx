import Head from 'next/head'
import Header from '../components/Header'
import { Container } from '../styles/pages/Home'


const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>MercadoLivre</title>
      </Head>
      <Header />
      <main>
      </main>
    </Container>
  )
}
export default Home
