import { useNumberInput, HStack, Button, Input } from '@chakra-ui/react';

const QuantityInput = ({ item, cart, setCart }) => {
  const handleQuantityChange = (value) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: value };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: item.quantity,
      min: 1,
      max: 10,
      precision: 0,
      onChange: handleQuantityChange,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="320px" mt={2}>
      <Button {...dec}>-</Button>
      <Input {...input} />
      <Button {...inc}>+</Button>
    </HStack>
  );
};

export default QuantityInput;
