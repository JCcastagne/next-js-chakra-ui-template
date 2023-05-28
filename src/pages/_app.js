import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import RootLayout from '../../layouts/RootLayout/RootLayout'
import theme from './_theme'

export default function App ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  )
}
