import { Box, Heading, SimpleGrid, Text, VStack, Stack, scroll, Flex, Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const NewItemsCard = ({ products }) => {
  const newProducts = products.slice(-4);

  return (
        <Box width={{ sm: '100%', '2xl': '1400px' }} m='0px auto 3rem auto' px={3}>
            <Stack >
                <Box width={'8.5rem'} _hover={{ cursor: 'pointer', color: 'rgb(255, 160, 76)', transition: 'color 0.2s ease-in-out' }}>
                    <Link to='/products'>
                        <Text fontSize={'1.2rem'} fontWeight={'bold'}>
                            Shop All Items
                        </Text>
                    </Link>
                </Box>
            </Stack>
            <Heading as="h2" size="lg" mb={4} textAlign={'center'} mt={'0rem'}>
                    New Items
                </Heading>
            {/* <VStack>
                <Heading as="h2" size="lg" mb={4} textAlign={'center'} mt={'0rem'}>
                    New Items
                </Heading>
                <SimpleGrid  columns={[1, 2, 2, 4]} spacing={6} w={'100%'}>
                    {newProducts.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </SimpleGrid >
            </VStack> */}
            <Flex overflowX="scroll" justify="space-between" w={'100%'}>
                {newProducts.map(product => (
                    <Link to={`/products/${product.title}`}>
                        <Box
                        w={{base: '18.35rem', md: '20rem'}}
                        transition="border-color 0.3s ease"
                        _hover={{ borderColor: 'rgb(255, 160, 76)' }}
                        border="1px solid transparent"
                        // overflow="hidden"
                        >
                            <Image
                                w={"100%"}
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
                ))}
            </Flex>
        </Box>
  )
}

export default NewItemsCard