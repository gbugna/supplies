import React from 'react'
import { Box, Heading, Flex, Link, useColorMode, IconButton, Button } from '@chakra-ui/react'

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
            color={colorMode === 'light' ? 'orange.300' : 'gray.100'}
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
                color={colorMode === 'light' ? 'orange.300' : 'white'}
            >
                <MenuItems>Stock</MenuItems>
                <MenuItems>Modelos</MenuItems>
                <MenuItems>Fabricantes</MenuItems>
                <MenuItems>Equipos</MenuItems>

            </Box>
            <Box
                display='block'
                mt={{ base: 4, md: 0 }}
            >
                <Button onClick={toggleColorMode}>
                    Modo {colorMode === 'light' ? 'Oscuro' : 'Claro'}
                </Button>

            </Box>
        </Flex>
    )
}

export default Navbar
