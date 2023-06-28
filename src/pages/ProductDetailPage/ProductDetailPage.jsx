import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getProduct } from "../../utilities/products-api";
import { Box, SimpleGrid, Image, Heading, Text, VStack, Button} from "@chakra-ui/react";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function getProductById() {
            const product = await getProduct(productId);
            setProduct(product);
        }
        getProductById();
    }, []);


  return (
    <SimpleGrid columns={2} spacing={10} width={{ xl: '100%', '2xl': '1400px' }} m='0px auto 0px auto' paddingTop={'3rem'}>
        <Box width='100%' paddingTop={'2rem'}>
          <Image
              w={'100%'}
              h={'35rem'}
              objectFit={'center'}
              src={product.image}
              mb={'1rem'}
          />
        </Box>
        <Box >
            <Heading as="h2" size="xl" mb={6} textTransform="uppercase" fontWeight="normal">
                {product.title}
            </Heading>
            <Text fontSize="md" mb={6}>
                ${product.price}
            </Text>
            <Text fontSize={'.9rem'} mb={6}>
                {product.description}
            </Text>
            <Heading as="h3" size="md" fontSize={'.9rem'}  mb={6}>
                DETAILS:
            </Heading>
            <VStack align="start" spacing={1} mx={4} mb={6}>
                {product.details.map((detail, index) => (
                <Text key={index} fontSize={'.9rem'}>
                    - {detail}
                </Text>
                ))}
            </VStack>
           
            <Button w={'100%'} bg='rgb(255, 160, 76)' color='white' variant='outline' _hover={{ bg: 'rgb(230, 137, 50)' }} transition='background-color 0.3s ease' >
                ADD TO CART
            </Button>
        </Box>
    </SimpleGrid>
  )
}

export default ProductDetailPage