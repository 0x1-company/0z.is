import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from "nextjs-google-analytics"
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
