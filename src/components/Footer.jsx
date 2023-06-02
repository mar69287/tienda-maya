import { Box, Center, Divider, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Divider/>
      <Box as='section'  py={4}>
        <Center>
          <Text color="black" fontSize="sm" fontWeight="bold">
            © 2023 Tienda Maya
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default Footer;