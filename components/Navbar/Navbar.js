import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Link,
  useColorMode,
  useDisclosure
} from '@chakra-ui/react'
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'

import { useRouter } from 'next/router'
import { useRef } from 'react'
import DrawerNavbar from '../Drawer/Drawer'

export default function Navbar () {
  // Hooks
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()

  // Drawer
  const { isOpen, onOpen, onClose } = useDisclosure()
  const drawerButtonRef = useRef()

  return (
    <HStack id='Navbar' as='nav' justifyContent='center' width='100vw'>
      <Box
        Box
        id='container'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        width='100%'
        maxWidth={1080}
        padding={8}
        height='114px'
      >
        <HStack id='logo' onClick={() => router.push('/')} cursor='pointer'>
          {/* <img
            src={
              colorMode === 'dark'
                ? 'image_dark.svg'
                : 'image_light.svg'
            }
            height='30px'
            width='30px'
          /> */}
          <Heading
            as='h1'
            size='lg'
            letterSpacing='3.75px'
            textTransform='uppercase'
          >
            Logo
          </Heading>
        </HStack>

        <HStack
          id='CTA'
          display={{ base: 'none', md: 'flex' }}
          alignItems='center'
          justifyContent='flex-end'
        >
          <IconButton
            id='ColorModeButton'
            aria-label='Dark and light mode toggle'
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          />

          <Button variant='outline' onClick={() => router.push('/')}>
            Secondary
          </Button>

          <Button colorScheme='teal' onClick={() => router.push('/')}>
            Primary
          </Button>
        </HStack>

        {/* DrawerNavbar toggle */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label='Open sidebar menu'
          ref={drawerButtonRef}
          variant='ghost'
          onClick={onOpen}
          icon={<HamburgerIcon width={'1.5em'} height={'1.5em'} />}
        />
      </Box>

      <DrawerNavbar
        isOpen={isOpen}
        onClose={onClose}
        drawerButtonRef={drawerButtonRef}
      />
    </HStack>
  )
}
