import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType } from "blitz"
import { Box, Button, Input } from "@chakra-ui/react"
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption } from "@chakra-ui/react"
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"
import Product from "app/core/models/Product"
import { useState } from "react"
import { RandomInt } from "../utils/base"

type ProductsTableProp = {
  products: Product[]
  onIncrementSucces: (p: Product) => void
}

type ProductRowProp = {
  product: Product
  onIncSuccess: (p: Product) => void
}

const ProductRow = (props: ProductRowProp) => {
  const URL_INCREMENT_PROD = `http://localhost:3001/api/product/increment`

  const CreateUrl = (productId, count = 1) => `${URL_INCREMENT_PROD}?id=${productId}&${count}`

  const onIncrement = async () => {
    const response = await fetch(CreateUrl(props.product.id),{method:"PUT"})
    const data = await response.json()
    const product = Product.parse(data)
    
    props.onIncSuccess(product)
  }


  return (
    <Tr>
      <Td>{props.product.name}</Td>
      <Td> {props.product.count}</Td> 
      <Td> <Button onClick={onIncrement}>INCREMENT</Button></Td>
    </Tr>
  )
}

export const ProductsTableView = (props: ProductsTableProp) => {
  function handleIncremet() {
    props.onIncrementSucces(new Product())
  }



  return (
    <Box id="create_product">
      <Table variant="simple">
        {/* <Thead>
          <Tr>
            <Th>Nazwa produktu</Th>
            <Th>ilość</Th>
          </Tr>
        </Thead> */}
        <Tbody>
          {props.products.map((p) => (
            <ProductRow product={p} onIncSuccess={props.onIncrementSucces} />
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}
