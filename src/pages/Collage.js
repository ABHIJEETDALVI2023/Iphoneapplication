// Collage.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const translateXAnimation = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-100% + 150px)); /* Adjust the width of each image for the transition */
  }
`;

const CollageContainer = styled.div`
  display: flex;
  width: fit-content; /* Adjust the width to fit the content */
  overflow: hidden;
`;

const SlidingWrapper = styled.div`
  white-space: nowrap;
  animation: ${translateXAnimation} 30s linear infinite;
  transition: transform 0.5s ease; /* Add a smooth transition effect */
`;

const CollageImage = styled.img`
  width: 150px; /* Adjust the image size */
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 10px; /* Add margin between images for spacing */
  transition: transform 0.3s ease; /* Add a smooth transition effect on hover */

  &:hover {
    transform: scale(1.8); /* Scale up on hover for emphasis */
  }
`;

const Collage = ({ imageUrls }) => {
  const extendedImages = [...imageUrls, ...imageUrls]; // Duplicate the images to create a continuous loop

  return (
    <SlidingWrapper>
      <CollageContainer>
        {extendedImages.map((imageUrl, index) => (
          <CollageImage
            key={index}
            src={imageUrl}
            alt={`Collage Image ${index + 1}`}
          />
        ))}
      </CollageContainer>
    </SlidingWrapper>
  );
};

export default Collage;
