import React from 'react';
import styled from 'styled-components';

const CollageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ImageCollage = ({ imageUrls }) => {
  return (
    <CollageContainer>
      {imageUrls.map((imageUrl, index) => (
        <Image key={index} src={imageUrl} alt={`Image ${index + 1}`} />
      ))}
    </CollageContainer>
  );
};

const gridimages = () => {
  const collageImages = [
    './Macbook11.jpg',
    'https://placekitten.com/201/301',
    'https://placekitten.com/202/302',
    'https://placekitten.com/203/303',
    'https://placekitten.com/204/304',
    'https://placekitten.com/205/305',
  ];

  return (
    <div>
      <h1>Image Collage</h1>
      <ImageCollage imageUrls={collageImages} />
    </div>
  );
};

export default gridimages;