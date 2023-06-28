import { VStack, Heading, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const SideBarFilter = () => {
    const categories = ["Kitchen", "Clothing"];

  return (
        <VStack align='start' spacing={4} py={6} >
          <Heading as="h3" size="md">Categories</Heading>
          {categories.map(category => (
                <Link key={category} to={`/products/${category}`} >
                    <Text _hover={{ cursor: 'pointer', color: 'rgb(255, 160, 76)', transition: 'color 0.2s ease-in-out' }} paddingLeft={'.4rem'}>{category}</Text>
                </Link>
            ))}
          <Heading as="h3" size="md">Price Range</Heading>
        </VStack>
  )
}

export default SideBarFilter