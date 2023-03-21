import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'

export default function App ({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  )
}
