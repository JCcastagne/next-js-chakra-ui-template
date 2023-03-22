import {
  Box,
  Button,
  Heading,
  HStack,
  Link,
  useColorMode
} from '@chakra-ui/react'

export default function Navbar () {
  const { colorMode } = useColorMode()

  return (
    <HStack id='Navbar' justifyContent='center' width='100vw'>
      <Box
        id='container'
        display='grid'
        gridTemplateColumns={'1fr 1fr 1fr'}
        alignItems='center'
        width='100%'
        maxWidth={1080}
        paddingY={4}
      >
        <Heading fontSize='3xl' justifyContent='flex-start'>
          LOGO.
        </Heading>
        {/* <img
          src={
            colorMode === 'dark'
              ? 'image_dark.svg'
              : 'image_light.svg'
          }
          // height is 40px to match button heights
        /> */}

        <HStack id='Links' justifyContent='center' gap={8} opacity='0.66'>
          <Link>Link 1</Link>
          <Link>Link 2</Link>
          <Link>Link 3</Link>
        </HStack>

        <HStack
          id='CTA'
          display='flex'
          alignItems='center'
          justifyContent='flex-end'
        >
          <Button variant='outline'>Secondary</Button>
          <Button colorScheme='teal'>Primary</Button>
        </HStack>
      </Box>
    </HStack>
  )
}
