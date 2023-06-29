import { Center, VStack, Button, Image, Box, Flex, Text, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import QuantityInput from './QuantityInput'

const CartItemCard = ({ item, cart, setCart }) => {
    const handleRemove = () => {
        const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(updatedCart);
    };

  return (
    <Center m='0rem auto 0rem auto' width={{ xl: '100%', '2xl': '1400px' }}>
      <Box borderBottom="1px solid RGBA(0, 0, 0, 0.24)" w={'100%'} p={6}>
        <Flex justifyContent="space-between" alignItems="center" mb="2">
          <Image src={item.image} objectFit={"scale-down"} boxSize={'9rem'} mr="2" flex="0 0 33%"/>
          <Stack direction={['column', 'row']} align={"center"} w={'100%'} justifyContent={"space-evenly"}>
            <VStack>
                <Link to={`/products/${item.title}`}>
                  <Text
                      fontSize={['14px', '16px', '18px']}
                  >{item.title}</Text>
                </Link>
                <Center>
                      <QuantityInput item={item} cart={cart} setCart={setCart} />
                </Center>
            </VStack>
            <VStack>
                <Text fontWeight="bold">${(item.price * item.quantity).toFixed(2)}</Text>
                <Button size="sm" onClick={handleRemove}>
                  Remove
                </Button>
            </VStack>
          </Stack>
        </Flex>
      </Box>
    </Center>
  )
}

export default CartItemCard