import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Box, useColorMode, VStack } from '@chakra-ui/react'

export default function RootLayout ({ children }) {
  const { colorMode } = useColorMode()
  return (
    <Box
      id='RootLayout'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
      minWidth='100vw'
      minHeight='calc(100vh - 72px)'
      color={colorMode === 'dark' ? 'whitesmoke' : '#344949'}
      backgroundColor={colorMode === 'dark' ? 'gray.800' : ''}
    >
      <Navbar />

      <VStack
        id='DefaultPageLayout'
        width='100%'
        height='100%'
        minHeight={'calc(110vh - 114px)'}
      >
        <Box id='container' maxWidth={1080} paddingX={8} paddingY={4}>
          <main>{children && children}</main>
        </Box>
      </VStack>
      <Footer />
    </Box>
  )
}
