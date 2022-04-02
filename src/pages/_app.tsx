import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/global"
import theme from "../styles/theme"
import Layout from '../components/Layout';
import { StoreProvider } from "../store/StoreProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <Layout><Component {...pageProps} /></Layout>
        <GlobalStyle />
      </StoreProvider>
    </ThemeProvider>
  )
}

export default MyApp
