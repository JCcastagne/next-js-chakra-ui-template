import links from './links'

import {
  Box,
  Link,
  Heading,
  Text,
  VStack,
  HStack,
  useColorMode,
  Stack,
  Divider,
  ButtonGroup,
  IconButton
} from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer () {
  const { colorMode } = useColorMode()
  return (
    <Stack
      as='footer'
      id='Navbar'
      justifyContent='center'
      alignItems='center'
      width='100vw'
      height='100%'
      backgroundColor={colorMode === 'dark' ? 'gray.700' : 'indigo.700'}
      color={colorMode === 'light' && 'white'}
    >
      <Stack
        width='100%'
        maxWidth={1080}
        spacing='8'
        direction={{ base: 'column', md: 'row' }}
        justify='space-between'
        py={{ base: '12', md: '16' }}
        px={8}
      >
        <Stack spacing={{ base: '6', md: '8' }} align='start'>
          <Heading fontSize='xl' justifyContent='flex-start'>
            LOGO.
          </Heading>
          <Text color='muted'>Create beautiful websites remarkably fast.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
          spacing={{ base: '12', md: '8' }}
        >
          <Stack direction='row' spacing='8'>
            <Stack spacing='4' minW='36' flex='1'>
              <Text fontSize='sm' fontWeight='semibold' color='subtle'>
                Product
              </Text>
              <Stack spacing='3'>
                <Link fontWeight='semibold' opacity={0.84}>
                  How it works
                </Link>
                <Link fontWeight='semibold' opacity={0.84}>
                  Pricing
                </Link>
                <Link fontWeight='semibold' opacity={0.84}>
                  Use Cases
                </Link>
              </Stack>
            </Stack>
            <Stack spacing='4' minW='36' flex='1'>
              <Text fontSize='sm' fontWeight='semibold' color='subtle'>
                Legal
              </Text>
              <Stack spacing='3'>
                <Link fontWeight='semibold' opacity={0.84}>
                  Privacy
                </Link>
                <Link fontWeight='semibold' opacity={0.84}>
                  Terms
                </Link>
                <Link fontWeight='semibold' opacity={0.84}>
                  License
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Divider opacity={0.21} />

      <Stack
        pt='8'
        pb='12'
        justify='space-between'
        direction={{ base: 'column-reverse', md: 'row' }}
        align='center'
        width='100%'
        maxWidth={1080}
        px={8}
      >
        <Text fontSize='sm' color='subtle'>
          &copy; {new Date().getFullYear()} J-C Castagne. All rights reserved.
        </Text>
        <ButtonGroup variant='ghost'>
          <IconButton
            as='a'
            href='#'
            aria-label='LinkedIn'
            icon={<FaLinkedin fontSize='1.25rem' />}
            _hover={{ background: 'whiteAlpha.400' }}
          />
          <IconButton
            as='a'
            href='#'
            aria-label='GitHub'
            icon={<FaGithub fontSize='1.25rem' />}
            _hover={{ background: 'whiteAlpha.400' }}
          />
          <IconButton
            as='a'
            href='#'
            aria-label='Twitter'
            icon={<FaTwitter fontSize='1.25rem' />}
            _hover={{ background: 'whiteAlpha.400' }}
          />
        </ButtonGroup>
      </Stack>
    </Stack>
  )
}
