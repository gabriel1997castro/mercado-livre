import Head from 'next/head'


const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <img src="./logo.png" alt="logo" />
        <h1>
          Hello World
        </h1>
      </main>
    </div>
  )
}
export default Home
