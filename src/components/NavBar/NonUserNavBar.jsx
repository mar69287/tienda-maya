import { HStack, Image, Box, useBreakpointValue, Text, Heading, Hide } from '@chakra-ui/react'
import logo from '../../assets/tienda-image.png'
import {  FiShoppingCart } from 'react-icons/fi';
import {  BiUserCircle } from 'react-icons/bi';

const NonUserNavBar = () => {
    const iconSize = useBreakpointValue({ base: 25, md: 26, lg: 27 });

  return (
    <Box>
        <HStack width={{xl: '100%', '2xl': '1400px'}} m='0px auto' justifyContent={'space-between'} p='0 1.2rem'>
            <HStack>
                <Image src={logo} w={{ base: '80px', md: '90px', lg: '100px' }} h="70px" objectFit="cover"/>
                <Heading as='h1' fontSize={{ base: '1.2rem', md: '1.5rem', lg: '1.7rem' }}>Tienda Maya</Heading>
            </HStack>
            <HStack spacing={{ base: 0, md: 3, lg: 5 }}>
                <HStack borderRadius={3} p='.4rem .4rem' _hover={{ cursor: 'pointer', backgroundColor: 'gray.100', transition: 'background-color 0.2s ease-in-out' }}>
                    <BiUserCircle size={iconSize} />
                    <Hide below='sm'>
                        <Text> Sign In</Text>
                    </Hide>
                </HStack>
                <Box borderRadius={3} p='.4rem .4rem' _hover={{ cursor: 'pointer', backgroundColor: 'gray.100', transition: 'background-color 0.3s ease-in-out' }}>
                    <FiShoppingCart size={iconSize} />
                </Box>
            </HStack>
        </HStack>
    </Box>
  )
}

export default NonUserNavBar