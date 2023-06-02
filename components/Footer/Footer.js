import {
  Link,
  Heading,
  Text,
  HStack,
  useColorMode,
  Stack,
  Divider,
  IconButton
} from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

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
          <Text color='muted'>Footer template, slogan goes here!</Text>
        </Stack>

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

      <Divider opacity={0.21} />

      <Stack
        pt='8'
        pb='12'
        justify='space-between'
        direction={{ base: 'column-reverse', md: 'row' }}
        width='100%'
        maxWidth={1080}
        px={8}
      >
        <Text fontSize='sm' color='subtle'>
          &copy; {new Date().getFullYear()} J-C Castagne. All rights reserved.
        </Text>
        <HStack minWidth='150px'>
          <IconButton
            as='a'
            href='https://linkedin.com/in/jc-castagne'
            aria-label='LinkedIn'
            variant='ghost'
            _hover={{ background: 'whiteAlpha.400' }}
            icon={<FaLinkedin fontSize='1.25rem' />}
            target='_blank'
          />
          <IconButton
            as='a'
            href='https://github.com/jccastagne'
            aria-label='GitHub'
            variant='ghost'
            _hover={{ background: 'whiteAlpha.400' }}
            icon={<FaGithub fontSize='1.25rem' />}
            target='_blank'
          />
          <IconButton
            as='a'
            href='https://instagram.com/jc.castagne'
            aria-label='Instagram'
            variant='ghost'
            _hover={{ background: 'whiteAlpha.400' }}
            icon={<FaInstagram fontSize='1.25rem' />}
            target='_blank'
          />
        </HStack>
      </Stack>
    </Stack>
  )
}
