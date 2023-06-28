import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getProduct } from "../../utilities/products-api";
import { Box, SimpleGrid, Image, Heading, Text, VStack, Button, HStack, Spinner } from "@chakra-ui/react";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        async function getProductById() {
            const product = await getProduct(productId);
            setProduct(product);
            
        }
        getProductById();
    }, []);

    if (!product) {
        return <Spinner />; 
    }

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };
    
      const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
      };


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
            <HStack mb={6} border={'1px solid black'} display="inline-flex">
                <Button onClick={handleDecreaseQuantity} variant='ghost' borderRadius={0}  _hover={{ bg: 'RGBA(0, 0, 0, 0.24)' }} transition='background-color 0.3s ease'>-</Button>
                <Text>{quantity}</Text>
                <Button onClick={handleIncreaseQuantity} variant='ghost' borderRadius={0}  _hover={{ bg: 'RGBA(0, 0, 0, 0.24)' }} transition='background-color 0.3s ease'>+</Button>
            </HStack>
            <Button w={'100%'} bg='rgb(255, 160, 76)' color='white' variant='outline' _hover={{ bg: 'rgb(230, 137, 50)' }} transition='background-color 0.3s ease' >
                ADD TO CART
            </Button>
        </Box>
    </SimpleGrid>
  )
}

export default ProductDetailPage