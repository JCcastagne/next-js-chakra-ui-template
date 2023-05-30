import {
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme
} from '@chakra-ui/react'

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  colors: {
    indigo: {
      50: '#f8f6ff',
      100: '#e1dcfd',
      200: '#c8befc',
      300: '#a899fa',
      400: '#9684f9',
      500: '#7c66f7',
      600: '#644af6',
      700: '#4c32db',
      800: '#412bba',
      900: '#2f1f87'
    },
    gray: {
      50: '#faf9fd',
      100: '#f2f0fb',
      200: '#e8e5f8',
      300: '#d5d0f1',
      400: '#aea5e5',
      500: '#8078b1',
      600: '#555076',
      700: '#37344c',
      800: '#201e2d',
      900: '#1a1824'
    }
  }
})

export default theme
