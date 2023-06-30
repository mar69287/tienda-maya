import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchProducts } from "../../utilities/products-api";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import ProductCard from '../../components/ProductCard';
import SideBarFilter from "../../components/SideBarFilter";

const SearchPage = () => {
    const { itemSearch } = useParams();
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    useEffect(() => {
        const searchItems = async () => {
            const products = await searchProducts(itemSearch);
            setProducts(products);
        };
    
        searchItems();
      }, [itemSearch]);

      useEffect(() => {
        const filterProducts = async () => {
          if (priceRange.min === '' && priceRange.max === '') {
            setFilteredProducts(products);
          } else {
            const filtered = products.filter(product => (
              product.price >= priceRange.min && product.price <= priceRange.max
            ));
            setFilteredProducts(filtered);
          }
        };
    
        filterProducts();
      }, [products, priceRange]);

      const handlePriceRangeChange = (min, max) => {
        const filtered = products.filter(product => (
          product.price >= min && product.price <= max
        ));
        console.log(filtered)
        setFilteredProducts(filtered);
      };

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

export default SearchPage