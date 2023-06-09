import { Heading, Img, Stack, VStack, Text, Box, HStack, Show } from '@chakra-ui/react';
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AboutCard = () => {
  return (
    <Stack as='section' direction={['column', 'column', 'row']} w='100%' p={['3rem 1.4rem', '4rem 3.5rem']} bg="rgb(233, 227, 224)" spacing={{ base: 0, md: 3, lg: 10 }}>
      <VStack justifyContent='center' alignItems='center' mb={{ base: '2rem', md: '0' }} w={['100%', '100%', '50%']}>
        <Box w={['90%', '80%']}>
          <Heading marginBottom='1.5rem' textAlign='center'>Journey to the Heart of Mayan Artistry</Heading>
          <Text textAlign='center'>With deep roots in tradition, every piece we offer is meticulously crafted using centuries-old techniques passed down from mothers to daughters for generations. By celebrating their remarkable craftsmanship, Tienda Maya becomes a bridge between cultures, honoring Guatemala's vibrant heritage and the enduring spirit of the Mayan people.</Text>
        </Box>
      </VStack>
      <Show above='sm'>
        <HStack w={['100%', '100%', '50%']} spacing={5} justifyContent={'center'}>
          <Img src={about1} w={['45%', '50%', '50%', '43%']} h={['20rem', '20rem', '22rem', '30rem']} objectFit={'cover'} />
          <Img src={about2} w={['45%', '50%', '50%', '43%']} h={['20rem', '20rem', '22rem', '30rem']} objectFit={'cover'} />
        </HStack>
      </Show>
      <Show below='sm'>
        <Carousel emulateTouch infiniteLoop showArrows={false} autoPlay={true} interval={5000} showStatus={false}>
          <Img src={about1} h={'20rem'} objectFit={'cover'} />
          <Img src={about2}  h={'20rem'} objectFit={'cover'} />
        </Carousel>
      </Show>
    </Stack>
  );
};

export default AboutCard;