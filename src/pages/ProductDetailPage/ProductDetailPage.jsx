import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getProduct } from "../../utilities/products-api";
import { Box, SimpleGrid, Image, Heading, Text, VStack, Button, HStack, Spinner, useToast, Show } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const ProductDetailPage = ({ cart, setCart, setCountCart }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const toast = useToast();

    useEffect(() => {
        let totalQuantity = 0;
        
        for (let item of cart) {
            totalQuantity += parseInt(item.quantity);
        }
        
        setCountCart(totalQuantity);
    }, [cart]);

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

    const addToCart = () => {
        const cartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: quantity,
        };
  
        const existingItemIndex = cart.findIndex((item) => item.id === cartItem.id);
        if (existingItemIndex !== -1) {
          const updatedCart = [...cart];
          updatedCart[existingItemIndex].quantity += quantity;
          setCart(updatedCart);
        } else {
          setCart((prevCart) => [...prevCart, cartItem]);
        }

        toast({
            title: "Product added to cart",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
      
    };

  return (
    <>
        
            <SimpleGrid columns={[1, 1, 2]} spacing={10} width={{ xl: '100%', '2xl': '1400px' }} m='0px auto 0px auto' paddingTop={{base: 0, md:'3rem'}} px={3}>
                <Box width='100%' paddingTop={'2rem'}>
                <Image
                    w={'100%'}
                    h={{base: '25rem', md: '38rem'}}
                    objectFit={'scale-down'}
                    src={product.image}
                    mb={{base: 0, md: '1rem'}}
                />
                </Box>
                <Box >
                    <Heading as="h2" size={{base: "md", md: 'lg'}} mb={{base: 3, md: 4, lg: 6}} textTransform="uppercase" fontWeight="normal">
                        {product.title}
                    </Heading>
                    <Text fontSize={{base: "sm", md: 'md'}} mb={{base: 3, md: 4, lg: 6}}>
                        ${product.price}
                    </Text>
                    <Text fontSize={'.9rem'} mb={{base: 5, lg: 6}}>
                        {product.description}
                    </Text>
                    <Heading as="h3" size="md" fontSize={'.9rem'}  mb={{base: 3, md: 4, lg: 6}}>
                        DETAILS:
                    </Heading>
                    <VStack align="start" spacing={1} mx={4} mb={{base: 5, lg: 6}}>
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
                    <Button mb={2} onClick={addToCart} w={'100%'} bg='rgb(255, 160, 76)' color='white' variant='outline' _hover={{ bg: 'rgb(230, 137, 50)' }} transition='background-color 0.3s ease' >
                        ADD TO CART
                    </Button>
                    <Link to={`/products`}>
                        <Button  w={'100%'} bg='rgb(227, 130, 52)' color='white' variant='outline' _hover={{ bg: 'rgb(250, 127, 70)' }} transition='background-color 0.3s ease' >
                            GO BACK
                        </Button>
                    </Link>
                </Box>
            </SimpleGrid>
       
    </>
  )
}

export default ProductDetailPage