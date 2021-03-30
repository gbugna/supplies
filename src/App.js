import Insumos from './components/Insumos'
import { Center, ChakraProvider, Container, Flex, extendTheme } from '@chakra-ui/react'
import Navbar from './components/NavBar'
import theme from './theme'

const initTheme = extendTheme({ theme });

function App() {
  return (

    <ChakraProvider theme={initTheme}>

      <Flex direction='column'>
        <Navbar />
        <Insumos />
      </Flex>

    </ChakraProvider>

  )
}

export default App
