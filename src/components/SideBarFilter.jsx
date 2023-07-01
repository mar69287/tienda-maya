import { VStack, Heading, Text, Input, Button, Flex, Show, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const SideBarFilter = ({ onPriceRangeChange, setFilteredProducts, products }) => {
  const categories = ["Kitchen", "Clothing"];
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const min = parseInt(event.target.elements.min.value);
    const max = parseInt(event.target.elements.max.value);
    onPriceRangeChange(min, max);
  };

  const handleLinkClick = () => {
    setFilteredProducts(products);
  };

  return (
    <>
      <Show above="md">
        <VStack align='start' spacing={4} py={6}>
          <Heading as="h3" size="md">Categories</Heading>
          {categories.map(category => (
            <Link key={category} to={`/products/category/${category}`} onClick={handleLinkClick} >
              <Text _hover={{ cursor: 'pointer', color: 'rgb(255, 160, 76)', transition: 'color 0.2s ease-in-out' }} paddingLeft={'.4rem'}>{category}</Text>
            </Link>
          ))}
          <Heading as="h3" size="md">Price Range</Heading>
          <form onSubmit={handleFormSubmit}>
            <Flex>
              <Input type="number" name="min" placeholder="$ Min" marginRight="1rem" />
              <Input type="number" name="max" placeholder="$ Max" marginRight="1rem" />
              <Button fontWeight={'regular'} px={'2rem'} bg='white' color='black' borderRadius={0} border={'1px solid black'}  _hover={{  color: 'rgb(255, 160, 76)', borderColor: 'rgb(255, 160, 76)' }} transition='all .3s ease' >
                  Apply
              </Button>
            </Flex>
          </form>
          <Link to={`/products`} onClick={handleLinkClick}>
            <Text _hover={{ cursor: 'pointer', color: 'rgb(255, 160, 76)', transition: 'color 0.2s ease-in-out' }} paddingLeft={'.4rem'}>View All</Text>
          </Link>
        </VStack>
      </Show>
      <Show below="lg">
        <Button onClick={onOpen} mb={'1rem'}>Filters</Button>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
            <ModalContent>
              <ModalHeader>Filters</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight='bold' mb='.5rem'>
                  Categories
                </Text>
                {categories.map(category => (
                  <Link key={category} to={`/products/category/${category}`} onClick={handleLinkClick} >
                    <Text _hover={{ cursor: 'pointer', color: 'rgb(255, 160, 76)', transition: 'color 0.2s ease-in-out' }} paddingLeft={'.4rem'} pb={3}>{category}</Text>
                  </Link>
                ))}
                <Text fontWeight='bold' mb='1rem'>
                  Price Range
                </Text>
                <form onSubmit={handleFormSubmit}>
                  <Flex pb={3}>
                    <Input type="number" name="min" placeholder="$ Min" marginRight="1rem" />
                    <Input type="number" name="max" placeholder="$ Max" marginRight="1rem" />
                    <Button fontWeight={'regular'} px={'2rem'} bg='white' color='black' borderRadius={0} border={'1px solid black'}  _hover={{  color: 'rgb(255, 160, 76)', borderColor: 'rgb(255, 160, 76)' }} transition='all .3s ease' >
                        Apply
                    </Button>
                  </Flex>
                </form>
                <Link to={`/products`} onClick={handleLinkClick}>
                  <Text mb='1rem' fontWeight={"bold"} _hover={{ cursor: 'pointer', color: 'rgb(255, 160, 76)', transition: 'color 0.2s ease-in-out' }}>View All</Text>
                </Link>
                <Flex w={'100%'} justify={"flex-end"}>
                  <Button colorScheme='blue'  onClick={onClose}>
                    Close
                  </Button>
                </Flex>
              </ModalBody>
            </ModalContent>
        </Modal>
      </Show>
    </>
  )
}

export default SideBarFilter;


