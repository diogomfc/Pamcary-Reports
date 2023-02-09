import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/globalstyles'
import theme from '../styles/theme'
import { fontInter } from '../styles/fonts'

//barra de progresso personalizada
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import { Router } from 'next/router'

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 300,
});

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});
//

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={fontInter.className}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
      <style global jsx>
        {`
          #nprogress {
            position: relative;
            z-index: 9999999;
          }
          #nprogress .bar {
            background: #dd4545
              linear-gradient(
                to right,
                #dd4545,
                #338ae8,
                #14aa4b,
                #7cb342,
                #00897b
              ) !important;
            height: 3px;
          }
        `}
      </style>
    </>
  )
}
