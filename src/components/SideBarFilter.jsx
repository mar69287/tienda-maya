import { VStack, Heading, Text, Input, Button, Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const SideBarFilter = ({ onPriceRangeChange, setFilteredProducts, products }) => {
  const categories = ["Kitchen", "Clothing"];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const min = parseInt(event.target.elements.min.value);
    const max = parseInt(event.target.elements.max.value);
    // console.log(min,max)
    onPriceRangeChange(min, max);
  };

  const handleLinkClick = () => {
    setFilteredProducts(products); // Reset filtered products to all products
  };

  return (
    <VStack align='start' spacing={4} py={6}>
      <Heading as="h3" size="md">Categories</Heading>
      {categories.map(category => (
        <Link key={category} to={`/products/${category}`} onClick={handleLinkClick} >
          <Text _hover={{ cursor: 'pointer', color: 'rgb(255, 160, 76)', transition: 'color 0.2s ease-in-out' }} paddingLeft={'.4rem'}>{category}</Text>
        </Link>
      ))}
      <Heading as="h3" size="md">Price Range</Heading>
      <form onSubmit={handleFormSubmit}>
        <Flex>
          <Input type="number" name="min" placeholder="$ Min" marginRight="1rem" />
          <Input type="number" name="max" placeholder="$ Max" marginRight="1rem" />
          <Button paddingX={'2rem'} type="submit" colorScheme="teal">Apply</Button>
        </Flex>
      </form>
      <Link to={`/products`} onClick={handleLinkClick}>
        <Text _hover={{ cursor: 'pointer', color: 'rgb(255, 160, 76)', transition: 'color 0.2s ease-in-out' }} paddingLeft={'.4rem'}>View All</Text>
      </Link>
    </VStack>
  )
}

export default SideBarFilter;


