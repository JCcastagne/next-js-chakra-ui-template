import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'
import theme from './_theme'

export default function App ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  )
}
