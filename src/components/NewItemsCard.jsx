import { Box, Heading, Image, SimpleGrid, Text, VStack, Stack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const NewItemsCard = ({ products }) => {
  const newProducts = products.slice(-4);

  return (
    <>
        <Stack width={{ xl: '100%', '2xl': '1400px' }} m='0px auto 0px auto'>
            <Box width={'8.5rem'} _hover={{ cursor: 'pointer', color: 'rgb(255, 160, 76)', transition: 'color 0.2s ease-in-out' }}>
                <Link to='/products'>
                    <Text fontSize={'1.2rem'} fontWeight={'bold'}>
                        Shop All Items
                    </Text>
                </Link>
            </Box>
        </Stack>
        <VStack width={{ xl: '100%', '2xl': '1400px' }} m='0px auto 3rem auto'>
            <Heading as="h2" size="lg" mb={4} textAlign={'center'} mt={'0rem'}>
                New Items
            </Heading>
            <SimpleGrid  columns={[1, 2, 2, 4]} spacing={6} w={'100%'}>
                {newProducts.map(product => 
                    <ProductCard key={product.id} product={product} />
                )}
            </SimpleGrid >
        </VStack>
    </>
  )
}

export default NewItemsCard