import React, { useState, useEffect } from 'react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Spinner, Container, Flex } from '@chakra-ui/react'

function Stock() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:4000/App-insumos/stock')
      .then(res => res.json())
      .then(result => {
        setIsLoaded(true)
        console.log(result)
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

      <Flex color='white'>
        <Spinner
          thickness='2px'
          speed='0.65s'
          emptyColor='orange.100'
          color='orange.300'
          size='md'
        />
      </Flex>
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
            </Tr>
          </Thead>
          <Tbody>
            {items.map(item => (
              <Tr key={item.id}>
                <Td>{item.modelo}</Td>
                <Td>{item.estado}</Td>
                <Td>{item.fecha}</Td>
                <Td>{item.sector}</Td>
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
