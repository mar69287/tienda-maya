import { useEffect, useState } from "react";
import { getProducts, getCategory, searchProducts } from "../../utilities/products-api";
import { Grid, GridItem } from "@chakra-ui/react";

const ProductsPage = () => {
    const [products, setProducts] = useState([])

  useEffect(() => {
      async function getAll() {
          const products = await getProducts()
          setProducts(products)
      }
      getAll()
  }, [])

  return (
    <Grid as='section' templateColumns={{ md: 'repeat(6, 1fr)', }} m='0px auto 3rem auto' width={{ xl: '100%', '2xl': '1400px' }}>
        <GridItem colSpan={{ md: 2}}>

        </GridItem>
        <GridItem colSpan={{ md: 4}}>

        </GridItem>
    </Grid>
  )
}

export default ProductsPage