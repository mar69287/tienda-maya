import { Box, Heading, Button, Text, Flex, Image, Center, Icon } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';

const NewItemsCard = ({ products }) => {
  const newProducts = products.slice(-4);

  return (
        <Box width={{ sm: '100%', '2xl': '1400px' }} m='0px auto 3rem auto' px={3}>
            <Flex justify={'flex-end'}>
                <Link to='/products'>
                {/* <Button
                rightIcon={<ArrowForwardIcon />}
                border='2px solid rgb(255, 160, 76)'
                _hover={{ bg: 'rgb(255, 160, 76)', color: 'white' }}
                transition='all 0.3s ease'
                variant='outline'
                borderRadius={0}
                >
                    Shop All
                </Button> */}
                <Flex align={'center'} className='button style1'>
                    <Text>Shop All</Text>
                    <ArrowForwardIcon ml={2}/>
                </Flex>
                </Link>
            </Flex>
            <Heading as="h2" size="lg" mb={4} textAlign={'center'} mt={'0rem'}> 
                    New Items
                </Heading>
            <Flex overflowX="scroll" justify="space-between" w={'100%'}>
                {newProducts.map(product => (
                    <Link to={`/products/${product.title}`}>
                        <Box
                        w={{base: '18.35rem', md: '20rem'}}
                        transition="border-color 0.3s ease"
                        _hover={{ borderColor: 'rgb(255, 160, 76)' }}
                        border="1px solid transparent"
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