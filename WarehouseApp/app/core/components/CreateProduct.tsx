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

type CreateProductProps = {
  onCreateSucces: (p: Product) => void
}

export const CreateProduct = (props: CreateProductProps) => {
  const URL_CREATE_PRODUCT = `http://localhost:3001/api/product/new`

  const [name, setName] = useState("")
  const [count, setCount] = useState(1)

  function handeleNameInput(e) {
    console.log(e.target.value)
    setName(e.target.value)
  }

  function handeleNumberInput(e) {
    console.log({ numberek: e.target.value })
    setCount(Number(e.target.value))
  }

  async function handeleSaveInput() {
    if (count == ("" as any)) setCount(1)

    const data = { name, count }
    const response = await fetch(URL_CREATE_PRODUCT, { method: "POST", body: JSON.stringify(data) })
    let product = await response.json()
    product = Product.parse(product)
    props.onCreateSucces(product)
  }

  return (
    <Box id="create_product">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nazwa produktu</Th>
            <Th>ilość</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Input type={"text"} onChange={handeleNameInput} />
            </Td>
            <Td>
              <Input type={"number"} onChange={handeleNumberInput} defaultValue={count} />
            </Td>
          </Tr>
          <Tr>
            <Td colSpan={2}>
              <Button onClick={handeleSaveInput} id="save_product_button">
                Zapisz
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default CreateProduct
