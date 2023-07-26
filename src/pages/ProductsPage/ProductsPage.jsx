import { useEffect, useState } from "react";
import { getProducts, searchProducts } from "../../utilities/products-api";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import ProductCard from '../../components/ProductCard';
import SideBarFilter from "../../components/SideBarFilter";

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
      async function getAll() {
          const products = await getProducts()
          setProducts(products)
      }
      getAll()
  }, [])

  const handlePriceRangeChange = (min, max) => {
    const parsedMin = parseInt(min);
    const parsedMax = parseInt(max);

    const clampedMin = isNaN(parsedMin) ? 0 : parsedMin;
    const clampedMax = isNaN(parsedMax) ? 100 : parsedMax;

    const filtered = products.filter((product) => product.price >= clampedMin && product.price <= clampedMax);
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    if (priceRange.min === '' && priceRange.max === '') {
      setFilteredProducts(products); 
    } else {
      handlePriceRangeChange(priceRange.min, priceRange.max)
    }
  }, [products, priceRange]);

  return (
    <Grid as='section' templateColumns={{ md: 'repeat(6, 1fr)', }} m='1rem auto 3rem auto' width={{ xl: '100%', '2xl': '1400px' }}>
        <GridItem colSpan={{ md: 2}} h={'100%'} borderRight={{ base: 'none', md: '1px solid black' }} paddingRight={'3rem'} pl={{ base: 3}}>
            <SideBarFilter onPriceRangeChange={handlePriceRangeChange} setFilteredProducts={setFilteredProducts} products={products} />
        </GridItem>
        <GridItem colSpan={{ md: 4}} pl={{ base: 0, md: '3rem'}} px={3}>
            <SimpleGrid  columns={[1, 2, 3]} spacing={6} w={'100%'}>
                {filteredProducts.map(product => 
                    <ProductCard key={product.id} product={product} />
                )}
            </SimpleGrid >
        </GridItem>
    </Grid>
  )
}

export default ProductsPage