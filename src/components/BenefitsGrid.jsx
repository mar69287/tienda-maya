import { Box, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react';
import { TbHeartHandshake } from 'react-icons/tb';
import { BiRecycle } from 'react-icons/bi';
import { GiHandBandage, GiFeather } from 'react-icons/gi';
import { HiHome } from 'react-icons/hi';

const BenefitsGrid = () => {
  return (
    <Grid as='section' templateColumns={{ xl: 'repeat(3, 1fr)', '2xl': 'repeat(6, 1fr)', }} m='0px auto 3rem auto' width={{ xl: '100%', '2xl': '1400px' }}>
      <GridItem colSpan={{ xl: 2, '2xl': 2 }}>
        <Box p={6} border="1px solid" borderColor="black">
          <VStack>
            <TbHeartHandshake size={40} color="black" />
            <Box>
                <Heading fontSize="xl" mb={2}>Preserving Cultural Heritage</Heading>
                <Text>
                    Our Mayan items are crafted by skilled artisans, preserving the rich cultural heritage of the Mayan people. By supporting these artisans, we contribute to the preservation of their traditional craftsmanship.
                </Text>
            </Box>
          </VStack>
        </Box>
      </GridItem>
      <GridItem colSpan={{ xl: 2, '2xl': 2 }}>
        <Box p={6} border="1px solid" borderColor="black">
          <VStack>
            <BiRecycle size={40} color="black" />
            <Box>
                <Heading fontSize="xl" mb={2}>Sustainable and Eco-Friendly</Heading>
                <Text>
                    Embrace sustainability with our Mayan items. Handcrafted using sustainable materials and traditional techniques, they promote eco-friendly practices. Each purchase supports a more sustainable future.
                </Text>
            </Box>
          </VStack>
        </Box>
      </GridItem>
      <GridItem colSpan={{ xl: 2, '2xl': 2 }}>
        <Box p={6} border="1px solid" borderColor="black">
          <VStack>
              <GiHandBandage size={40} color="black" />
              <Box>
                  <Heading fontSize="xl" mb={2}>Empowering Artisan Communities</Heading>
                  <Text>
                    When you choose our Mayan items, you empower artisan communities. Your support provides fair wages and sustainable livelihoods, helping to uplift these communities and preserve their artistic traditions.
                  </Text>
              </Box>
          </VStack>
        </Box>
      </GridItem>
      <GridItem colSpan={{ xl: 3, '2xl': 3 }}>
        <Box p={6} border="1px solid" borderColor="black">
          <VStack>
              <GiFeather size={40} color="black" />
              <Box>
                  <Heading fontSize="xl" mb={2}>Authentic and Unique</Heading>
                  <Text>
                    Discover the authenticity and uniqueness of Mayan craftsmanship. Each item tells a story and carries the spirit of the Mayan culture. By owning a Mayan piece, you embrace individuality and celebrate cultural diversity.
                  </Text>
              </Box>
          </VStack>
        </Box>
      </GridItem>
      <GridItem colSpan={{ xl: 3, '2xl': 3 }}>
        <Box p={6} border="1px solid" borderColor="black">
          <VStack>
              <HiHome size={40} color="black" />
              <Box>
                  <Heading fontSize="xl" mb={2}>Artisanal Mastery at Your Home</Heading>
                  <Text>
                    Bring the mastery of Mayan artisans into your home. Our carefully curated selection of Mayan items showcases their exceptional skill and artistry. Experience the beauty and craftsmanship firsthand.
                  </Text>
              </Box>
          </VStack>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default BenefitsGrid;
