import React, { useState, useEffect } from 'react';
import KitchenCard from './KitchenCard';
import ClothingCard from './ClothingCard';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
    <Carousel emulateTouch infiniteLoop showArrows={false} autoPlay interval={5000} showStatus={false} showThumbs={false}>
      <KitchenCard />
      
      <ClothingCard />
     
    </Carousel>
  );
};

export default HeroCarousel;
