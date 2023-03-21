import links from './links'

import {
  Box,
  Link,
  Heading,
  Text,
  VStack,
  HStack,
  useColorMode
} from '@chakra-ui/react'

export default function Footer () {
  const { colorMode } = useColorMode()
  return (
    <HStack
      id='Navbar'
      justifyContent='center'
      alignItems='center'
      width='100vw'
      height='100%'
      backgroundColor={colorMode === 'dark' ? 'teal.800' : 'teal'}
      color='white'
    >
      <HStack
        id='container'
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        maxWidth={1080}
        paddingX={8}
        paddingY={16}
        height='100%'
      >
        <Box display='grid' gridTemplateColumns='1fr 1fr' width='100%'>
          {links &&
            links.map((item, index) => {
              return (
                <Link href={`${item?.url}`} key={index * 99} paddingBottom={2}>
                  {item?.title}
                </Link>
              )
            })}
        </Box>

        <VStack height='80px' alignItems='start' justifyContent='space-between'>
          <Heading fontSize='2xl' justifyContent='flex-start'>
            LOGO.
          </Heading>

          <Text opacity='0.66' width='max-content'>
            JC Castagne &copy; 2023
          </Text>
        </VStack>
      </HStack>
    </HStack>
  )
}
