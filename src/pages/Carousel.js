// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css'; // Remove the '/lib' and 'min' from the path

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  
`;
const CarouselComponent = ({ images }) => {
  const carouselSettings = {
    
    showStatus: false,
    showThumbs: false,
   // infiniteLoop: true,
   // interval: 2000, // Set the autoplay interval in milliseconds (e.g., 3000ms = 3 seconds)
  };
  
  return (
    <Carousel {...carouselSettings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
  src={image}
  alt={`Carousel Image ${index + 1}`}
  style={{ width: '80%', height: '400px', borderRadius:'10%', marginTop:'2%' }}
/>

        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
