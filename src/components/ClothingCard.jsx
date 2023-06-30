import { Box, Button, Heading, Img, Text, Stack } from "@chakra-ui/react"
import ClothingImage from '../assets/ClothingImage.jpeg'
import { Link } from 'react-router-dom';

const ClothingCard = () => {
  return (
    <Box w="100%" h="40rem" position='relative'>
        <Img src={ClothingImage} h='100%' w='100%' objectFit='cover' objectPosition='center' />
        <Stack
          direction='column'
          align='center'
          justify='center'
          position='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
          textAlign='center'
          px={6}
          py={8}
          bgGradient='linear(to-b, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))'
          color='white'
          spacing={2}
        >
          <Heading as='h2' fontSize='3xl' mb={2}>
            MODA MAYA
          </Heading>
          <Text fontSize='xl'>
            Discover the essence of Mayan heritage through our curated selection of handmade clothing
          </Text>
          <Link to={`/products/category/Clothing`}>
            <Button bg='rgb(255, 160, 76)' color='white' variant='outline' _hover={{ bg: 'rgb(230, 137, 50)' }} transition='background-color 0.3s ease' borderRadius='full'>
              SHOP MAYAN CLOTHING
            </Button>
          </Link>
        </Stack>
      </Box>
  )
}

export default ClothingCard