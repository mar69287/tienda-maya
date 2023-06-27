import { useEffect, useState } from "react";
import { getProducts, getCategory, searchProducts } from "../../utilities/products-api";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import ProductCard from '../../components/ProductCard';

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
    <Grid as='section' templateColumns={{ md: 'repeat(6, 1fr)', }} m='1rem auto 3rem auto' width={{ xl: '100%', '2xl': '1400px' }}>
        <GridItem colSpan={{ md: 2}} h={'100%'} borderRight={'1px black solid'} paddingRight={'3rem'}>

        </GridItem>
        <GridItem colSpan={{ md: 4}} paddingLeft={'3rem'}>
            <SimpleGrid  columns={[1, 2, 3]} spacing={6} w={'100%'}>
                {products.map(product => 
                    <ProductCard key={product.id} product={product} />
                )}
            </SimpleGrid >
        </GridItem>
    </Grid>
  )
}

export default ProductsPage