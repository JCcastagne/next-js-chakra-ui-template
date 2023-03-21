import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Box } from '@chakra-ui/react'

export default function DefaultLayout ({ children }) {
  return (
    <Box
      id='DefaultLayout'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
      minWidth='100vw'
      minHeight='100vh'
    >
      <Navbar />
      <Box id='DefaultPageLayout'>
        <main>{children && children}</main>
      </Box>
      <Footer />
    </Box>
  )
}
