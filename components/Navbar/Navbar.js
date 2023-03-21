import { Box, Button, Heading, Link, Text } from '@chakra-ui/react'
import './Navbar.module.css'

export default function Navbar () {
  return (
    <Box
      id='Navbar'
      display='flex'
      justifyContent='center'
      alignItems='center'
      width='100vw'
    >
      <Box
        id='container'
        display='grid'
        gridTemplateColumns={'1fr 1fr 1fr'}
        alignItems='center'
        width='100%'
        maxWidth={1080}
        padding={2}
      >
        <Heading fontSize='3xl' justifyContent='flex-start'>
          LOGO.
        </Heading>

        <Box
          id='Links'
          display='flex'
          alignItems='center'
          justifyContent='center'
          gap={8}
          opacity='0.66'
        >
          <Link>Link 1</Link>
          <Link>Link 2</Link>
          <Link>Link 3</Link>
        </Box>

        <Box
          id='CTA'
          display='flex'
          alignItems='center'
          justifyContent='flex-end'
          gap={2}
        >
          <Button variant='outline'>Secondary</Button>
          <Button>Primary</Button>
        </Box>
      </Box>
    </Box>
  )
}
