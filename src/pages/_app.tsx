import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/globalstyles'
import theme from '../styles/theme'
import { fontInter } from '../styles/fonts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={fontInter.className}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  )
}
