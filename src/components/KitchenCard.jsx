import { Box, Button, Heading, Img, Text, Stack } from "@chakra-ui/react"
import kitchen from '../assets/tienda-kitchen.png'

const KitchenImage = () => {
    return (
      <Box w='100%' h='100%' position='relative'>
        <Img src={kitchen} h='100%' w='100%' objectFit='cover' objectPosition='center' />
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
            CASA Y COCINA
          </Heading>
          <Text fontSize='xl'>
            A curation of handcrafted home and kitchen items emblematic of Guatemalan traditions & culture
          </Text>
          <Button bg='rgb(255, 160, 76)' color='white' variant='outline' _hover={{ bg: 'rgb(230, 137, 50)' }} transition='background-color 0.3s ease' borderRadius='full'>
            SHOP CASA Y COCINA
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default KitchenImage;