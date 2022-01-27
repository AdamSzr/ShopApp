import { Suspense, useState } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import FullScreen from "app/core/components/FullScreen"
import { GenerateRandomString, RandomInt } from "app/core/utils/base"
import Product from "app/core/models/Product"
import { Box, Button, Select } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import CreateProduct from "app/core/components/CreateProduct"
import { ProductsTableView } from "app/core/components/ProductsTableView"
import { URL_ALL_PROD } from "app/config"
/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  // const URL_ALL_PROD = `http://localhost:3001/api/products`

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

  function addItemToProducts(product: Product) {
    let arr = [...products, product]
    arr = sortProductByDate(arr)
    setProducts(arr)
  }

  function sortProductByDate(products: Product[]) {
    return products.sort((p1, p2) => (p1.createdAt < p2.createdAt ? 1 : -1))
  }

  function handleInc(product:Product){
    const newArr = [ product ,...products.filter(p => p.id != product.id) ]
    setProducts(newArr)
  }

  return (
    
      <FullScreen>
        <Box id="main_view">
          <CreateProduct
            onCreateSucces={(product) => {
              addItemToProducts(product)
            }}
          />
          <ProductsTableView  products={products} onIncrementSucces={handleInc}/>
        </Box>
      </FullScreen>
  
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
