import { Box, Flex } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import KitchenCard from './KitchenCard';
import ClothingCard from './ClothingCard';

const HeroCarousel = () => {
  const [activeCard, setActiveCard] = useState(0);
  const cards = [<KitchenCard />, <ClothingCard />];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveCard((prevCard) => (prevCard === cards.length - 1 ? 0 : prevCard + 1));
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeCard]);

  const handleDotClick = (index) => {
    setActiveCard(index);
  };

  return (
    <Box as='section' w="100%" h="40rem" position="relative" mb='3rem'>
      {cards.map((card, index) => (
        <Box
          key={index}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          transform={index === activeCard ? 'translateX(0)' : 'translateX(100%)'}
          transition="transform 0.3s ease"
        >
          {card}
        </Box>
      ))}

      <Flex justifyContent="center" position="absolute" bottom={4} w="100%">        
        <Box
          w="2"
          h="2"
          borderRadius="full"
          bg={activeCard === 0 ? 'gray.100' : 'gray.400'}
          mx={1}
          cursor="pointer"
          onClick={() => handleDotClick(0)}
          p='.3rem'
        />
        <Box
          w="2"
          h="2"
          borderRadius="full"
          bg={activeCard === 1 ? 'gray.100' : 'gray.400'}
          mx={1}
          cursor="pointer"
          onClick={() => handleDotClick(1)}
          p='.3rem'
        />
      </Flex>
    </Box>
  );
};

export default HeroCarousel;
