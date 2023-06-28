import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getCategory } from "../../utilities/products-api";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../../components/ProductCard";
import SideBarFilter from "../../components/SideBarFilter";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function getProductsByCategory() {
      const categoryProducts = await getCategory(category);
      setProducts(categoryProducts);
    }
    getProductsByCategory();
  }, [category]);

  const handlePriceRangeChange = (min, max) => {
    const filtered = products.filter(product => (
      product.price >= min && product.price <= max
    ));
    console.log(filtered)
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    if (priceRange.min === '' && priceRange.max === '') {
      setFilteredProducts(products); // Reset filteredProducts to all products
    } else {
      const filtered = products.filter(product => (
        product.price >= priceRange.min && product.price <= priceRange.max
      ));
      setFilteredProducts(filtered);
    }
  }, [products, priceRange]);

  return (
    <Grid as='section' templateColumns={{ md: 'repeat(6, 1fr)' }} m='1rem auto 3rem auto' width={{ xl: '100%', '2xl': '1400px' }}>
      <GridItem colSpan={{ md: 2 }} h='100%' borderRight='1px black solid' paddingRight='3rem'>
        <SideBarFilter onPriceRangeChange={handlePriceRangeChange} />
      </GridItem>
      <GridItem colSpan={{ md: 4 }} paddingLeft='3rem'>
        <SimpleGrid columns={[1, 2, 3]} spacing={6} w='100%'>
          {filteredProducts.map(product =>
            <ProductCard key={product.id} product={product} />
          )}
        </SimpleGrid>
      </GridItem>
    </Grid>
  )
}

export default CategoryPage;
