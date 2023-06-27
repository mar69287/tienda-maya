import { Box, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import React from 'react'

const NewItemsCard = ({ products }) => {
  const newProducts = products.slice(-4);

  return (
    <VStack width={{ xl: '100%', '2xl': '1400px' }} m='0px auto 3rem auto'>
        <Heading as="h2" size="lg" mb={4} textAlign={'center'}>
            New Items
        </Heading>
        <SimpleGrid columns={4} spacing={6} w={'100%'}>
            {newProducts.map(product => 
                <Box key={product.id} width='100%'>
                    <Image
                        w={'100%'} 
                        h={'20rem'}
                        objectFit={'cover'}
                        src={product.image}
                        mb={'1rem'}
                    />
                    <Heading as="h3" size="sm" textAlign={'center'}>
                        {product.title}
                    </Heading>
                    <Text textAlign={'center'}>
                        ${product.price}
                    </Text>
                </Box>
            )}
        </SimpleGrid >
    </VStack>
  )
}

export default NewItemsCard