import React, { useState, useEffect } from 'react';
import KitchenCard from './KitchenCard';
import ClothingCard from './ClothingCard';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroCarousel = () => {

  return (
    <Carousel emulateTouch infiniteLoop showArrows={false} autoPlay interval={5000} showStatus={false} showThumbs={false}>
      <KitchenCard />
      
      <ClothingCard />
     
    </Carousel>
  );
};

export default HeroCarousel;
