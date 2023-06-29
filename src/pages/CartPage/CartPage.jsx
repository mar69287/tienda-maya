import { Box, VStack, Text, Button, HStack, Spacer, useToast, Stack } from '@chakra-ui/react'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createOrder } from "../../utilities/orders-api";
import CartItemCard from '../../components/CartItemCard';
import StripeCheckout from "react-stripe-checkout";

const CartPage = ({ user, cart, setCart, setCountCart }) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const toast = useToast();

    useEffect(() => {
        let totalQuantity = 0;
      
        for (let item of cart) {
          totalQuantity += parseInt(item.quantity);
        }
      
        setCountCart(totalQuantity);
    }, [cart]);
    
    const handleToken = async (token) => {
      try {
        await createOrder(cart, total, token);
        setCart([]);
        toast({
          title: "Purchase successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.log(error);
        toast({
          title: "Error processing purchase",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };
  return (
    <Box m='1rem auto 3rem auto' width={{ xl: '100%', '2xl': '1400px' }}>
        {cart.length > 0 ? ( 
            <>  
                {cart.map((item) => {
                    return <CartItemCard key={item.id} item={item} cart={cart} setCart={setCart}/>
                })}
                <VStack marginY={10} mx={4}>
                <HStack w="100%">
                  <Spacer />
                  <Text fontSize="lg" fontWeight="bold" mb={2}>
                    Total: ${total.toFixed(2)}
                  </Text>
                </HStack>
                <Stack direction={{base: 'column', md: 'row'}} spacing={4} w="100%" paddingBottom={4} align={'flex-end'}>
                  <Spacer />
                  <Link to="/products">
                    <Button colorScheme="gray" size="md">
                      Continue Shopping
                    </Button>
                  </Link>
                  {!user ? (
                    <Link to="/auth">
                      <Button colorScheme="blue" size="md">
                        Log in to Purchase
                      </Button>
                    </Link>
                  ) : (
                    <StripeCheckout
                      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY || ""}
                      token={handleToken}
                      currency="USD"
                      name="Tienda Maya"
                    >
                      <Button colorScheme="blue" size="md">
                        Purchase
                      </Button>
                    </StripeCheckout>
                  )}
                </Stack>
                <Text>
                  (Demo Card Number: 4242 4242 4242 4242 exp: 12/34 CVC: 123)
                </Text>
              </VStack>
            </>
        ) : ( 
            <VStack marginY={10} >
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Cart is empty
              </Text>
              <Link to="/products">
                  <Button colorScheme="gray" size="md">
                    Continue Shopping
                  </Button>
              </Link>
            </VStack>
        )}
    </Box>
  )
}

export default CartPage