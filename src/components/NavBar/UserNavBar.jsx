import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 
import { HStack, Image, Box, useBreakpointValue, Text, Heading, Hide, Badge } from '@chakra-ui/react'
import logo from '../../assets/tienda-image.png'
import {  FiShoppingCart } from 'react-icons/fi';
import {  BiUserCircle } from 'react-icons/bi';
import {  RxHamburgerMenu } from 'react-icons/rx';
import SearchInput from '../SearchInput';
import { useState } from 'react'
import SideDrawer from '../SideDrawer';

export default function UserNavBar({ user, setUser, countCart }) {
    const iconSize = useBreakpointValue({ base: 25, md: 26, lg: 27 });
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <>
        <Box>
            <HStack width={{xl: '100%', '2xl': '1400px'}} m='0px auto' justifyContent={'space-between'} p='0 1.2rem'>
                {/* <Hide above='sm'>
                    <HStack borderRadius={3} p='.4rem .4rem' _hover={{ cursor: 'pointer', backgroundColor: 'gray.100', transition: 'background-color 0.3s ease-in-out' }}>
                        <RxHamburgerMenu size={iconSize}/>
                    </HStack>
                </Hide> */}
                    <HStack>
                        <Link to='/' >
                            <Image src={logo} w={{ base: '80px', md: '90px', lg: '100px' }} h="70px" objectFit="cover" _hover={{ cursor: 'pointer', backgroundColor: 'gray.100', transition: 'background-color 0.3s ease-in-out' }}/>
                        </Link>
                        <Hide below='md'>
                            <Heading as='h1' fontSize={{ base: '1.2rem', md: '1.5rem', lg: '1.7rem' }}>Tienda Maya</Heading>
                        </Hide>
                    </HStack>
                <Hide below='sm'>
                    <SearchInput />
                </Hide>
                <HStack spacing={{ base: 0, md: 3, lg: 5 }}>
                    {/* <Link to='' onClick={handleLogOut}> */}
                        <HStack borderRadius={3} p='.4rem .4rem' _hover={{ cursor: 'pointer', backgroundColor: 'gray.100', transition: 'background-color 0.2s ease-in-out' }}>
                            <BiUserCircle size={iconSize} onClick={() => setIsDrawerOpen(true)}/>
                            {/* <Hide below='sm'>
                                <Text>Log Out</Text>
                            </Hide> */}
                            <SideDrawer 
                                isOpen={isDrawerOpen}
                                onClose={() => setIsDrawerOpen(false)}
                                handleUser={handleLogOut}
                            />
                        </HStack>
                    {/* </Link> */}
                    <Link to='/cart'>
                        <Box position="relative" borderRadius={3} p='.4rem .4rem' _hover={{ cursor: 'pointer', backgroundColor: 'gray.100', transition: 'background-color 0.3s ease-in-out' }}>
                            <Badge colorScheme="red" borderRadius="full" position="absolute" top="-10px" right="-12px" fontSize="sm" px={2}>
                                {countCart}
                            </Badge>
                            <FiShoppingCart size={iconSize} />
                        </Box>
                    </Link>
                </HStack>
            </HStack>
        </Box>
        <Hide above='sm'>
            <Box m='0 1rem .5rem 1rem'>
                <SearchInput />
            </Box>
        </Hide>
    </>
    )
}