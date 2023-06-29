import { Box, VStack, Text, Button, Grid, GridItem } from '@chakra-ui/react'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CartItemCard from '../../components/CartItemCard';

const CartPage = ({ user, cart, setCart, setCountCart }) => {

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