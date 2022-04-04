import GlobalStyle from "../styles/global"
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <GlobalStyle />
    </>
  )
}
