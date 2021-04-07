import React from 'react'
import { Box, Heading, Flex, Link, useColorMode, IconButton } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa'

const MenuItems = ({ children }) => (
  <Link mt={{ base: 4, md: 0 }} mr={6} display='block'>
    {children}
  </Link>
)

const Navbar = props => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding='1.5rem'
      bg={colorMode === 'light' ? 'gray.900' : 'orange.500'}
      color={colorMode === 'light' ? 'orange.400' : 'gray.100'}
      borderBottom='1px solid black'
      {...props}
    >
      <Flex align='center' mr={5}>
        <Heading as='h1' size='lg' letterSpacing='-.1rem'>
          Stock de insumos
        </Heading>
      </Flex>

      <Box
        display='flex'
        width='auto'
        alignItems='center'
        flexGrow={1}
        color={colorMode === 'light' ? 'orange.400' : 'white'}
      >
        <Link as={ReachLink} to='/stock'>
          <MenuItems>Stock</MenuItems>
        </Link>
        <Link as={ReachLink} to='/insumos'>
          <MenuItems>Modelos</MenuItems>
        </Link>
        <Link as={ReachLink} to='/fabricantes'>
          <MenuItems>Fabricantes</MenuItems>
        </Link>
        <Link as={ReachLink} to='/equipos'>
          <MenuItems>Equipos</MenuItems>
        </Link>

      </Box>

      <IconButton
        icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='sm'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />

    </Flex>
  )
}

export default Navbar
