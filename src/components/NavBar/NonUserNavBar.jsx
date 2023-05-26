import { HStack, Image, Box } from '@chakra-ui/react'
import logo from '../../assets/tienda-image.png'

const NonUserNavBar = () => {
  return (
    <Box>
        <HStack w='1400px' m='0px auto'>
            <Image src={logo} w="100px" h="70px" objectFit="cover"/>
        </HStack>
    </Box>
  )
}

export default NonUserNavBar