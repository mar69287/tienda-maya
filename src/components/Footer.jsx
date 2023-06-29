import { Box, Center, Divider, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Box as='footer'>
        <Divider/>
        <Center py={5}>
          <Text color="black" fontSize="sm" fontWeight="bold">
            © 2023 Tienda Maya
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default Footer;