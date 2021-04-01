import Insumos from './components/Insumos'
import { Center, ChakraProvider, Container, Flex, extendTheme } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/NavBar'
import Stock from './components/Stock'




function App() {
  return (
    <Flex direction='column'>
      <Navbar />
      <Stock />
    </Flex>
  )
}

export default App
