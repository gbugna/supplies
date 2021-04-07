import { Center, ChakraProvider, Container, Flex, extendTheme } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Navbar from './components/NavBar'
import Insumos from './components/Insumos'
import Stock from './components/Stock'

function App () {
  return (
    <Flex direction='column'>
      <Router>

        <Navbar />
        <Switch>
          <Route path='/stock' component={Stock} />
          <Route path='/insumos' component={Insumos} />
          <Route exact path='/' />
        </Switch>
      </Router>

    </Flex>
  )
}

export default App
