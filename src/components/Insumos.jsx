import React, { useState, useEffect } from 'react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Spinner, Container, Flex, IconButton } from '@chakra-ui/react'
import { FaPen } from 'react-icons/fa'
import MaterialTable, { tableIcons, handleRowUpdate, handleRowAdd, handleRowDelete } from 'material-table'

function Insumos() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  const columns = [

    { title: 'Modelo', field: 'modelo' },
    { title: 'Fabricante', field: 'marca' },
    { title: 'Equipo', field: 'equipo' }
  ]

  useEffect(() => {
    fetch('http://127.0.0.1:4000/App-insumos/insumos')
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
    console.log({ items })

    return (

      <Container maxW='container.md'>
        <MaterialTable
          title='User list from API'
          columns={columns}
          data={items}
          icons={tableIcons}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                handleRowUpdate(newData, oldData, resolve)
              }),
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                handleRowAdd(newData, resolve)
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                handleRowDelete(oldData, resolve)
              })
          }}
        />
      </Container>

    )
  }
}

export default Insumos
