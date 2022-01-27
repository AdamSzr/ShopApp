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
import { URL_INCREMENT_PROD } from "app/config"

type ProductsTableProp = {
  products: Product[]
  onDecrementSucces: (p: Product) => void
}

type ProductRowProp = {
  product: Product
  onDecSuccess: (p: Product) => void
}

const ProductRow = (props: ProductRowProp) => {
  // const URL_INCREMENT_PROD = `http://localhost:3001/api/product/decrement`

  const CreateUrl = (productId, count = 1) => `${URL_INCREMENT_PROD}?id=${productId}&${count}`

  const onIncrement = async () => {
    const response = await fetch(CreateUrl(props.product.id), { method: "PUT" })
    const data = await response.json()
    const product = Product.parse(data)

    props.onDecSuccess(product)
  }

  return (
    <Tr>
      <Td>{props.product.name}</Td>
      <Td> {props.product.count}</Td>
      <Td>
        <Button onClick={onIncrement}>DECREMENT</Button>
      </Td>
    </Tr>
  )
}

export const ProductsTableView = (props: ProductsTableProp) => {
  return (
    <Box id="create_product">
      <Table variant="simple">
        <Tbody>
          {props.products.map((p) => (
            <ProductRow key={RandomInt(0, 999_999_999)} product={p} onDecSuccess={props.onDecrementSucces} />
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}
