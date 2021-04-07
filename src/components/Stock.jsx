import React, { useState, useEffect } from 'react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Spinner, Container, Flex, VStack, IconButton } from '@chakra-ui/react'
import { FaPen } from 'react-icons/fa'
function Stock () {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  const options = Intl.DateTimeFormatOptions = {
    year: 'numeric',
    day: 'numeric',
    month: 'numeric'
  }

  useEffect(() => {
    fetch('http://127.0.0.1:4000/App-insumos/stock')
      .then(res => res.json())
      .then(result => {
        setIsLoaded(true)
        setItems(result)
      },
      (error) => {
        setIsLoaded(false)
        setItems(error)
      }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <VStack justifyContent='center' alignItems='center'>
        <Spinner
          thickness='2px'
          speed='0.65s'
          emptyColor='orange.100'
          color='orange.300'
          size='md'
        />
      </VStack>
    )
  } else {
    return (

      <Container maxW='container.md'>
        <Table size='sm' colorScheme='facebook'>
          <TableCaption placement='top'>Stock</TableCaption>
          <Thead>
            <Tr>
              <Th>Modelo</Th>
              <Th>Estado</Th>
              <Th>Fecha</Th>
              <Th>Sector</Th>
              <Th>Accion</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map(item =>
              (
                <Tr key={item.id}>
                  <Td>{item.modelo}</Td>
                  <Td>{item.estado}</Td>
                  <Td>{new Date(item.fecha).toLocaleString('es-AR', options)}</Td>
                  <Td>{item.sector}</Td>
                  <Td><IconButton icon={<FaPen />} size='sm' /></Td>
                </Tr>
              ))}
          </Tbody>
          <Tfoot />
        </Table>
      </Container>

    )
  }
}

export default Stock
