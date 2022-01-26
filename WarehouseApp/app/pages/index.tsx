import { Suspense, useState } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import FullScreen from "app/core/components/FullScreen"
import { GenerateRandomString, RandomInt } from "app/core/utils/base"
import Product from "app/core/models/Product"
import { Box, Button, Select } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import CreateProduct from "app/core/components/CreateProduct"
/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  const URL_ALL_PROD = `http://localhost:3001/api/products`
  const URL_INCREMENT_PROD = `http://localhost:3001/api/product/increment`

  const CreateUrl = (productId, count = 1) => `${URL_INCREMENT_PROD}?id=${productId}&${count}`

  const [products, setProducts] = useState([] as Product[])

  setup()

  function setup() {
    if (products.length > 0) {
      return 1
    } else {
      try {
        fetch(URL_ALL_PROD)
          .then((res) => res.json())
          .then((data) => data.map((item) => Product.parse(item)))
          .then((d) => sortProductByDate(d))
          .then((x) => setProducts(x))
      } catch (err) {
        console.error(err)
      }
    }
  }

  function addItemToProducts(product:Product)
  {
    let arr = [...products, product]
    arr = sortProductByDate(arr)
    setProducts(arr)
  }

  function sortProductByDate(products: Product[]) {
    return products.sort((p1, p2) => (p1.createdAt < p2.createdAt ? 1 : -1))
  }

  function productItem(product) {
    const onIncrement = () => {
      fetch(CreateUrl(product.id), { method: "PUT" })
        .then((r) => r.json())
        .then((product) => Product.parse(product))
        .then((p) => {
          return [...products.filter((i) => i.id != p.id), p]
        })
        .then((arr) => setProducts(sortProductByDate(arr)))
    }

    return (
      <Box key={RandomInt(0, 999_999_999)}>
        {JSON.stringify(product, null, 4)} <Button onClick={onIncrement}> INCREMENT </Button>
      </Box>
    )
  }

  return (
    <FullScreen>
      <Box>
        <CreateProduct  onCreateSucces={(product)=>{addItemToProducts(product)} } />
        <Box>{products.map((p) => productItem(p))}</Box>
      </Box>
    </FullScreen>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
