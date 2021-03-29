import Insumos from './components/Insumos'
import { ChakraProvider, Container } from '@chakra-ui/react'

function App() {
  return (

    <ChakraProvider>
      <Container>
        <Insumos />
      </Container>

    </ChakraProvider>

  )
}

export default App
