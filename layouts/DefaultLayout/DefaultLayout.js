import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Box, useColorMode, VStack } from '@chakra-ui/react'
import ColorModeButton from '../../components/ColorModeButton/ColorModeButton'

export default function DefaultLayout ({ children }) {
  const { colorMode } = useColorMode()
  return (
    <Box
      id='DefaultLayout'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
      minWidth='100vw'
      minHeight='calc(100vh - 72px)'
      color={colorMode === 'dark' ? 'whitesmoke' : '#344949'}
    >
      <Navbar />

      <VStack id='DefaultPageLayout' width='100%' height='100%'>
        <Box id='container' maxWidth={1080} paddingX={8} paddingY={4}>
          <main>{children && children}</main>
        </Box>
      </VStack>
      <Footer />

      <ColorModeButton />
    </Box>
  )
}
