import { Heading, Img, Stack, VStack, Text, Box, HStack, Button } from '@chakra-ui/react';
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';

const AboutCard = () => {
  return (
    <Stack as='section' direction={['column', 'column', 'row']} w='100%' p={['3rem 1.4rem', '4rem 3.5rem']} bg="rgb(233, 227, 224)" spacing={{ base: 0, md: 3, lg: 10 }}>
      <VStack justifyContent='center' alignItems='center' mb={{ base: '2rem', md: '0' }} w={['100%', '100%', '50%']}>
        <Box w={['90%', '80%']}>
          <Heading marginBottom='1.5rem' textAlign='center'>Journey to the Heart of Mayan Artistry</Heading>
          <Text textAlign='center'>With deep roots in tradition, every piece we offer is meticulously crafted using centuries-old techniques passed down from mothers to daughters for generations. By celebrating their remarkable craftsmanship, Tienda Maya becomes a bridge between cultures, honoring Guatemala's vibrant heritage and the enduring spirit of the Mayan people.</Text>
        </Box>
          {/* <Button colorScheme='green' variant='outline'>Shop Now</Button> */}
      </VStack>
      <HStack w={['100%', '100%', '50%']} spacing={5} justifyContent={'center'}>
        <Img src={about1} w={['45%', '45%', '42%', '38%']} h={['20rem', '20rem', '22rem', '30rem']} />
        <Img src={about2} w={['45%', '45%', '42%', '38%']} h={['20rem', '20rem', '22rem', '30rem']} />
      </HStack>
    </Stack>
  );
};

export default AboutCard;