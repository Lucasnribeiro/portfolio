import { MantineProvider } from '@mantine/core'
import '../styles/globals.css'
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return(
    <>

      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      
      <Head>
        <title>Lucas Ribeiro</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider withCSSVariables
                      withNormalizeCSS
                      theme={{colorScheme: 'light'}}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  ) 
  
}

export default MyApp
