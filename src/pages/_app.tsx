import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import Layout from '../components/Layout';
import { StoreProvider } from "../store/StoreProvider";
import { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <Layout><Component {...pageProps} /></Layout>
      </StoreProvider>
    </ThemeProvider>
  )
}

export default MyApp
