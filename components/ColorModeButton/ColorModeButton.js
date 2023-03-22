import './ColorModeButton.module.css'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function ColorModeButton () {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      id='ColorModeButton'
      position='fixed'
      right={4}
      bottom={16}
      aria-label='Dark and light mode toggle'
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
    />
  )
}
