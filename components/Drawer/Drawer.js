const {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Grid,
  Icon,
  useColorMode,
  DrawerFooter,
  Text,
  HStack,
  Heading,
  IconButton,
  Divider,
  Tooltip
} = require('@chakra-ui/react')
import { useRouter } from 'next/router'
// https://react-icons.github.io/react-icons/icons?name=io5
import {
  IoDocumentText,
  IoSearch,
  IoCart,
  IoFileTrayFull,
  IoCog,
  IoPerson,
  IoExitOutline
} from 'react-icons/io5'
import { MoonIcon } from '@chakra-ui/icons'

export default function DrawerNavbar ({
  isOpen,
  onClose,
  drawerButtonRef,
  colorMode,
  toggleColorMode
}) {
  const router = useRouter()

  const links = [
    { title: 'page', icon: IoDocumentText, href: '/page' },
    { title: 'search', icon: IoSearch, href: '/search' },
    { title: 'shop', icon: IoCart, href: '/shop' },
    { title: 'inbox', icon: IoFileTrayFull, href: '/inbox' },
    { title: 'settings', icon: IoCog, href: '/settings' }
  ]

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={drawerButtonRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={colorMode === 'dark' ? 'gray.800' : ''}>
          <DrawerCloseButton />
          <DrawerHeader paddingTop={10}></DrawerHeader>

          <DrawerBody>
            <Grid
              templateColumns='repeat(2, 1fr)'
              templateRows='repeat(2, 1fr)'
              gap={4}
            >
              {links &&
                links.map((link, index) => {
                  return (
                    <Button
                      onClick={() => router.push(`${link.href}`)}
                      leftIcon={<Icon as={link.icon} boxSize={5} />}
                      key={index}
                      alignItems='center'
                      justifyContent='start'
                      paddingTop={20}
                      style={{ aspectRatio: '1 / 1' }}
                      width='100%'
                      height='100%'
                      textTransform='capitalize'
                      colorScheme='indigo'
                      // color='white'
                    >
                      {link.title}
                    </Button>
                  )
                })}

              <Button
                id='ColorModeButton'
                aria-label='Dark and light mode toggle'
                onClick={toggleColorMode}
                leftIcon={
                  colorMode === 'light' ? (
                    <SunIcon
                      height={'1.2em'}
                      width={'1.2em'}
                      style={{ marginInlineEnd: '0' }}
                    />
                  ) : (
                    <MoonIcon height={'1.2em'} width={'1.2em'} />
                  )
                }
                alignItems='center'
                justifyContent='start'
                paddingTop={20}
                style={{ aspectRatio: '1 / 1' }}
                width='100%'
                height='100%'
                colorScheme='indigo'
              >
                {colorMode === 'dark' ? 'Dark' : 'Light'}
              </Button>
            </Grid>
          </DrawerBody>

          <DrawerFooter paddingBottom={5} width='100%' flexDirection='column'>
            <Divider marginBottom={5} />
            <HStack justifyContent='space-between' width='100%'>
              <Tooltip hasArrow label='View profile'>
                <Button
                  onClick={() => router.push('/')}
                  variant='ghost'
                  leftIcon={<Icon as={IoPerson} />}
                  colorScheme={colorMode === 'dark' ? 'black' : 'gray'}
                >
                  <Text>Profile</Text>
                </Button>
              </Tooltip>

              <Tooltip hasArrow label='Logout'>
                <IconButton
                  onClick={() => router.push('/')}
                  variant='ghost'
                  icon={<Icon as={IoExitOutline} boxSize={5} />}
                  colorScheme={colorMode === 'dark' ? 'black' : 'gray'}
                />
              </Tooltip>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

function SunIcon () {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      aria-hidden='true'
      focusable='false'
      height='1.2em'
      width='1.2em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z'></path>
    </svg>
  )
}
