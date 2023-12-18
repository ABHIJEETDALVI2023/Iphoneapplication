// HomeWhoWeAre.js
import React from 'react';
import styled from 'styled-components';

const WhoWeAreContainer = styled.div`
  background-color: #fff;
  padding: 50px;
  text-align: center;
`;

const WhoWeAreTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
`;

const WhoWeAreItem = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const HomeWhoWeAre = () => {
  return (
    <WhoWeAreContainer>
    <WhoWeAreTitle>Who We Are</WhoWeAreTitle>
    <WhoWeAreItem>Google Ratings</WhoWeAreItem>
    <WhoWeAreItem>Instant Doorstep Repairs</WhoWeAreItem>
    <WhoWeAreItem>Repairs right in front of you!</WhoWeAreItem>
    <WhoWeAreItem>Lowest Prices</WhoWeAreItem>
    <WhoWeAreItem>Expert Technicians</WhoWeAreItem>
  </WhoWeAreContainer>
  );
};

export default HomeWhoWeAre;
