import { Box, VStack, Text, Button, HStack, Spacer } from '@chakra-ui/react'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CartItemCard from '../../components/CartItemCard';
import StripeCheckout from "react-stripe-checkout";

const CartPage = ({ user, cart, setCart, setCountCart }) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    useEffect(() => {
        let totalQuantity = 0;
      
        for (let item of cart) {
          totalQuantity += parseInt(item.quantity);
        }
      
        setCountCart(totalQuantity);
    }, [cart]);

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
                <HStack w="100%" paddingBottom={"4"}>
                  <Spacer />
                  <Link to="/products">
                    <Button colorScheme="gray" size="md">
                      Continue Shopping
                    </Button>
                  </Link>
                  {/* <StripeCheckout
                    stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY || ""}
                    token={handleToken}
                    currency="USD"
                    name="Fresh Finds"
                  >
                    <Button  colorScheme="blue" size="md" >
                      Purchase
                    </Button>
                  </StripeCheckout> */}
                </HStack>
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