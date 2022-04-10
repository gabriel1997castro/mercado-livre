import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import { StoreProvider } from '../store/StoreProvider'
import Layout from '../components/Layout'


const Wrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <Layout>{children}</Layout>
      </StoreProvider>
    </ThemeProvider>
  )
}


const customRender = (ui: JSX.Element, options = {}) =>
  render(ui, {
    wrapper: Wrapper,
    ...options
  })

export * from '@testing-library/react'
export { customRender as render }
