import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/global"
import theme from "../styles/theme"
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout><Component {...pageProps} /></Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
