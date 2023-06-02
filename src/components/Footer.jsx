import { Box, Center, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as='section' bg="rgb(238, 22, 47)" py={4}>
      <Center>
        <Text color="white" fontSize="sm" fontWeight="bold">
          © 2023 Tienda Maya
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;