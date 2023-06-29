import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Stack, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SideDrawer = ({ isOpen, onClose, handleUser,}) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Account</DrawerHeader>
        <DrawerBody>
          <Stack spacing={'20px'}>
            <Box _hover={{ cursor: 'pointer', color: 'gray.500', transition: 'color 0.2s ease-in-out' }}>
              <Link to='/products'>Products</Link>
            </Box>
            <Box _hover={{ cursor: 'pointer', color: 'gray.500', transition: 'color 0.2s ease-in-out' }}>
              <Link to='/orders'>Order History</Link>
            </Box>
            <Box _hover={{ cursor: 'pointer', color: 'gray.500', transition: 'color 0.2s ease-in-out' }}>
              {/* <Link to="/" onClick={handleUser}>Log Out</Link> */}
              <Text _hover={{ cursor: 'pointer', color: 'gray.500', transition: 'color 0.2s ease-in-out' }} onClick={handleUser}>Logout</Text>
            </Box>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
