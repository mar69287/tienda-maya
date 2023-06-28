import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.title}`}>
      <Box
        width="100%"
        transition="border-color 0.3s ease"
        _hover={{ borderColor: 'rgb(255, 160, 76)' }}
        border="1px solid transparent"
        overflow="hidden"
      >
        <Image
          w="100%"
          h="20rem"
          objectFit="cover"
          src={product.image}
          mb="1rem"
        />
        <Heading as="h3" size="sm" textAlign="center">
          {product.title}
        </Heading>
        <Text textAlign="center">${product.price}</Text>
      </Box>
    </Link>
  );
}

export default ProductCard;
