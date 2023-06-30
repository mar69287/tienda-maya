import { getOrders } from "../../utilities/orders-api";
import { useEffect, useState } from "react";
import { VStack, HStack, Text, Button, Spacer, Spinner, Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAll() {
      const orders = await getOrders();
      setOrders(orders);
      setLoading(false);
    }
    getAll();
  }, []);

  if (loading) {
    return (
        <Box m='1rem auto 3rem auto' width={{ xl: '100%', '2xl': '1400px' }}>
            <Spinner size="xl" thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" />
        </Box>
    );
  }

  if (orders.length === 0) {
    return (
      <>
        <VStack m='1rem auto 3rem auto' width={{ xl: '100%', '2xl': '1400px' }}>
          <Text fontSize="3xl" fontWeight="bold" mb="10">
            No purchases made
          </Text>
          <Link to="/products">
            <Button colorScheme="blue" size="lg">
              Continue Shopping
            </Button>
          </Link>
        </VStack>
      </>
    );
  }


  return (
    <VStack m="1rem auto 3rem auto" maxWidth={{ xl: "100%", "2xl": "1400px" }}>
      <Text fontSize="3xl" fontWeight="bold" mb="10">
        Order History
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Ordered On</Th>
            <Th>Confirmation #</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order._id}>
              <Td>{new Intl.DateTimeFormat("en-US").format(new Date(order.createdAt))}</Td>
              <Td>{order._id.toString().slice(-6)}</Td>
              <Td fontWeight="bold">${order.total.toFixed(2)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  )
}

export default OrderHistoryPage