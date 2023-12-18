// HomeHowItWorks.js
import React from 'react';
import styled from 'styled-components';

const HowItWorksContainer = styled.div`
background: linear-gradient(to right, #808080, #808080); /* Replace these colors with your desired gradient */
  padding: 20px; /* Adjust padding as needed */
  color: #ffffff; /* White text color */
  text-align: center;
  border-radius: 100px; /* Adjust the value for the desired border curve */
`;

const HowItWorksTitle = styled.h2`
  font-size: 20px;
  margin-bottom:  0px;
`;

const HowItWorksSteps = styled.div`
  display: flex;
  justify-content: space-around;
`;

const HowItWorksStep = styled.div`
  flex: 1;
  margin: 0 20px;
`;

const HowItWorksStepNumber = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const HowItWorksStepText = styled.p`
  font-size: 16px;
`;

const HomeHowItWorks = () => {
  return (
    <HowItWorksContainer>
      <HowItWorksTitle>How It Works</HowItWorksTitle>
      <HowItWorksSteps>
        <HowItWorksStep>
          <HowItWorksStepNumber>1</HowItWorksStepNumber>
          <HowItWorksStepText>Select Your Device</HowItWorksStepText>
        </HowItWorksStep>
        <HowItWorksStep>
          <HowItWorksStepNumber>2</HowItWorksStepNumber>
          <HowItWorksStepText>Get a Free Quote Instantly</HowItWorksStepText>
        </HowItWorksStep>
        <HowItWorksStep>
          <HowItWorksStepNumber>3</HowItWorksStepNumber>
         
          <HowItWorksStepText>Technician visits you to fix the device on time</HowItWorksStepText>
        </HowItWorksStep>
      </HowItWorksSteps>
    </HowItWorksContainer>
  );
};

export default HomeHowItWorks;
