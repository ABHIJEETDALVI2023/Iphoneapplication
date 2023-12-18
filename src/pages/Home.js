// Home.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import HomeHowItWorks from './ HomeHowItWorks';
import HomeWhoWeAre from './ HomeWhoWeAre';
import PageEnding from './PageEnding';
import Carousel from './Carousel.js';
import Collage from './Collage';

const carouselImages = ['/camera.jpg', '/camera2.jpg', '/iPhone-14.png', '/applecare.png'];

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const DeviceSelectionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
  flex: 0 0 calc(50% - 20px);
  text-align: center;
`;

const DeviceOption = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: #333;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  margin-right: 20px;

  img {
    width: 180px;
    height: 80px;
    border-radius: 50%;
    padding: 10px;
  }
`;

const GradientBackgroundDiv = styled.div`
  background: linear-gradient(to right, #ff8c00, #ff0000);
  padding: 20px;
`;

const BoldTextContainer = styled.div`
  text-align: center;
  padding: 10px;
`;

const BoldText = styled.div`
  text-decoration: none;
  color: #333;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  margin-left: 350px;
  margin-top: 50px;
  font-weight: bold;
  font-size: 20px;
  overflow: hidden;
`;

const MarqueeText = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${keyframes`
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  `} 10s linear infinite;
`;

const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
`;

const BackButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const ModelContent = styled.div`
  margin-top: 20px;
  text-align: center;
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 10px;
    padding: 10px;
    background-color: #e0e0e0;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const validOptions =
 ['iPhone 15 Pro',
  'iPhone 15 Pro Max',
  'iPhone 15 Pro',
  'iPhone 15 Plus',
  'iPhone 15',
  'iPhone 14 Pro Max',
  'iPhone 14 Pro',
  'iPhone 14 Plus',
  'iPhone 14',
  'iPhone 13 Pro Max',
  'iPhone 13 Pro',
  'iPhone 13',
  'iPhone 13 Mini',
  'iPhone 12 Pro Max',
  'iPhone 12 Pro',
  'iPhone 12',
  'iPhone 12 Mini',
  'iPhone SE (2020)',
  'iPhone 11 Pro Max',
  'iPhone 11 Pro',
  'iPhone 11',
  'iPhone XS Max',
  'iPhone XS',
  'iPhone XR',
  'iPhone X',
  'iPhone 8 Plus',
  'iPhone 8',
  'iPhone 7 Plus',
  'iPhone 7',
  'iPhone 6s Plus',
  'iPhone 6s',
  'iPhone 6 Plus',
  'iPhone 6',
  'iPhone SE',
  'iPhone 5s',
  'iPhone 5c',
  
  //IWATCH
  'Apple Watch Series 9',
  'Apple Watch Series Ultra 2',
  'Apple Watch Series 8',
  'Apple Watch Series Ultra',
  'Apple Watch Series 7',
  'Apple Watch Series 6',
  'Apple Watch SE',
  'Apple Watch Series 5',
 'Apple Watch Series 4',
  'Apple Watch Series 3',
  'Apple Watch Series 2',
  'Apple Watch Series 1',

//Macbook
'MacBook',
'MacBook Pro Retina',
'MacBook Pro',
'MacBook Air',

//ipad
'iPad',
'iPad Air',
'iPad Mini',
'iPad Pro'


  ]; // Add more options as needed

const renderForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    // Perform any action you want on form submission
  };}
  const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`;
const FormInput = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top:10px;

  &:hover {
    background-color: #0056b3;
  }
`;


const Home = () => {

  const openModal = (option) => {
    setSelectedOption(option);
  };

  const closeModal = () => {
    setSelectedOption(null);
  };
  
  const collageImages = [
    '/iphonebacks.jpeg',
    '/iphones.jpeg',
    '/iPhone-16.jpg',
    '/Titanium-iPhone-15-Pro.jpg',
    '/iphonegrid.jpg',
    '/iphonegrid2.jpg',
    '/iphonegrid3.jpg',
    '/iphonegrid.webp',
  ];


  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState(""); // State for the selected dropdown value

  const handleModelClick = (modelName) => {
    // Perform any action when a model is clicked
    console.log(`Clicked on ${modelName}`);
    // Open the form for the selected model
    setSelectedOption(modelName);
    // Reset the selected dropdown value when a new model is selected
    setSelectedDropdownValue("");
  };
  
  const renderForm = () => {
    // Define different sets of options for each model
    const dropdownOptions = {
      'iPhone 15 Pro': ['select option','Display Repair', 'Sound problem', 'Back glass repair'],
      'iWatch': ['Option A', 'Option B', 'Option C'],
      'MacBook': ['Option X', 'Option Y', 'Option Z'],
      'iPad': ['Option Apple', 'Option Banana', 'Option Orange'],
      // Add more models and options as needed
    };
    
    const handleFormSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted with selected option:', selectedDropdownValue);
      // Perform any action you want on form submission
    };
    if (selectedOption && dropdownOptions[selectedOption]) {
      return (
        <FormContainer onSubmit={handleFormSubmit}>
          <FormInput type="text" placeholder="Enter your name" />
          <FormInput type="TEXT" placeholder="Enter your number " />

          {/* Render a dropdown with options based on the selected model */}
          <select
            value={selectedDropdownValue}
            onChange={(e) => setSelectedDropdownValue(e.target.value)}
          >
            {dropdownOptions[selectedOption].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Add more form fields as needed */}
          {/* Use 'cursor: pointer' in the style to make the form clickable */}
          <SubmitButton type="submit">
            Submit
          </SubmitButton>
        </FormContainer>
      );
    }
    return null;
  };

  
 

  const renderModelContent = () => {
    switch (selectedOption) {
      case 'iPhone':
        return (
          <ModelContent>
            <h3 onClick={() => handleModelClick('iPhone 15 Pro Max')}>iPhone 15 Pro Max</h3>
            <h3 onClick={() => handleModelClick('iPhone 15 Pro')}>iPhone 15 Pro</h3>
            <h3 onClick={() => handleModelClick('iPhone 15 Plus')}> iPhone 15 Plus'</h3>
            <h3 onClick={() => handleModelClick('iPhone 15 ')}>iPhone 15 </h3>
            <h3 onClick={() => handleModelClick('iPhone 15 Pro')}> iPhone 14 Pro Max</h3>
            <h3 onClick={() => handleModelClick('iPhone 14 Pro')}>iPhone 14 Pro</h3>
            <h3 onClick={() => handleModelClick('iPhone 15 Plus')}>iPhone 14 Plus</h3>
            <h3 onClick={() => handleModelClick('iPhone 14 ')}>iPhone 14</h3>
            <h3 onClick={() => handleModelClick('iPhone 13 Pro')}>iPhone 13 Pro</h3>
            <h3 onClick={() => handleModelClick('iPhone 13')}>iPhone 13</h3>
            <h3 onClick={() => handleModelClick('iPhone 13 Mini')}>iPhone 13 Mini</h3>
            <h3 onClick={() => handleModelClick('iPhone 15 Pro Max')}>iPhone 12 Pro Max</h3>
            <h3 onClick={() => handleModelClick('iPhone 12 Pro')}>iPhone 12 Pro</h3>
            <h3 onClick={() => handleModelClick('iPhone 12')}>iPhone 12</h3>
            <h3 onClick={() => handleModelClick('iPhone 12 Mini')}>iPhone 12 Mini</h3>
            <h3 onClick={() => handleModelClick('iPhone SE (2020)')}> iPhone SE (2020)</h3>
            <h3 onClick={() => handleModelClick('iPhone 11 Pro Max')}>iPhone 11 Pro Max</h3>

            <h3 onClick={() => handleModelClick('iPhone 11 Pro')}>iPhone 11 Pro </h3>

            <h3 onClick={() => handleModelClick('iPhone 11')}>iPhone 11</h3>
            <h3 onClick={() => handleModelClick('iPhone XS Max')}>iPhone XS Max</h3>

            <h3 onClick={() => handleModelClick('iPhone XS')}>iPhone XS</h3>

            <h3 onClick={() => handleModelClick('iPhone XR')}>iPhone XR</h3>

            <h3 onClick={() => handleModelClick('iPhone X')}>iPhone X</h3>

            <h3 onClick={() => handleModelClick('iPhone 8 Plus')}>iPhone 8 Plus</h3>

            <h3 onClick={() => handleModelClick('iPhone 8')}>iPhone 8</h3>

            <h3 onClick={() => handleModelClick('iPhone 7 Plus')}>iPhone 7 Plus</h3>

            <h3 onClick={() => handleModelClick('iPhone 7 ')}>iPhone 7 </h3>

            <h3 onClick={() => handleModelClick('iPhone 6 ')}>iPhone 6 </h3>

            {/* Add more clickable H3 elements as needed */}
          </ModelContent>
        );
      case 'iWatch':
        return (
          <ModelContent>
            <h3 onClick={() => handleModelClick('Apple Watch Series 9')}>Apple Watch Series 9</h3>
            <h3 onClick={() => handleModelClick('Apple Watch Series Ultra 2')}>Apple Watch Series Ultra 2</h3>
            <h3 onClick={() => handleModelClick('Apple Watch Series 8')}>Apple Watch Series 8</h3>
            <h3 onClick={() => handleModelClick('Apple Watch Series Ultra')}>Apple Watch Series Ultra</h3>
            <h3 onClick={() => handleModelClick('Apple Watch Series 7')}>Apple Watch Series 7</h3>
            <h3 onClick={() => handleModelClick('Apple Watch Series 6')}>Apple Watch Series 6</h3>
            <h3 onClick={() => handleModelClick('Apple Watch SE')}>Apple Watch SE</h3>
            <h3 onClick={() => handleModelClick('Apple Watch Series 5')}>Apple Watch Series 5</h3>
            <h3 onClick={() => handleModelClick('Apple Watch Series 4')}>Apple Watch Series 4</h3>
            <h3 onClick={() => handleModelClick('Apple Watch Series 3')}>Apple Watch Series 3 </h3>
            <h3 onClick={() => handleModelClick('Apple Watch Series 2')}>Apple Watch Series 2</h3>
            <h3 onClick={() => handleModelClick('Apple Watch Series 1')}>Apple Watch Series 1</h3>

            {/* Add more clickable H3 elements as needed */}
          </ModelContent>
        );
      case 'MacBook':
        return (
          <ModelContent>
            <h3 onClick={() => handleModelClick('MacBook')}>MacBook</h3>
            <h3 onClick={() => handleModelClick('MacBook Pro Retina')}>MacBook Pro Retina</h3>
            <h3 onClick={() => handleModelClick('MacBook Pro ')}>MacBook Pro </h3>
            <h3 onClick={() => handleModelClick('MacBook Air')}>MacBook Air</h3>

            {/* Add more clickable H3 elements as needed */}
          </ModelContent>
        );
      case 'iPad':
        return (
          <ModelContent>
            <h3 onClick={() => handleModelClick('iPad')}>iPad</h3>
            <h3 onClick={() => handleModelClick('iPad Air')}>iPad Air</h3>
            <h3 onClick={() => handleModelClick('iPad Mini')}>iPad Mini</h3>
            <h3 onClick={() => handleModelClick('iPad Pro')}>iPad Pro</h3>

            {/* Add more clickable H3 elements as needed */}
          </ModelContent>
        );
      default:
        return null;
    }
  };
  
  return (
    <div>
      <HomeContainer>
        <ImageContainer>
          <img src="/repairglass.jpg" alt="Left Side" style={{ width: '80%', borderRadius: '10px' }} />
        </ImageContainer>

        <DeviceSelectionContainer>
          {!selectedOption && (
            <>
              <DeviceOption onClick={() => openModal('iPhone')}>
                <img src="/iphonelogo.jpeg" alt="iPhone Logo" />
                <div>iPhone</div>
              </DeviceOption>

              <DeviceOption onClick={() => openModal('iWatch')}>
                <img src="/iwatchlogo.jpeg" alt="iWatch Logo" />
                <div>iWatch</div>
              </DeviceOption>

              <DeviceOption onClick={() => openModal('MacBook')}>
                <img src="/Macbook12.webp" alt="MacBook Logo" />
                <div>MacBook</div>
              </DeviceOption>

              <DeviceOption onClick={() => openModal('iPad')}>
                <img src="/ipad.jpeg" alt="iPad Logo" />
                <div>iPad</div>
              </DeviceOption>
            </>
          )}
        </DeviceSelectionContainer>

        {/* Modal */}
        {selectedOption && (
          <ModalContainer isOpen={selectedOption !== null}>
            <h2>{`Modal for ${selectedOption}`}</h2>

            {/* Additional content based on the selected model */}
            {renderModelContent()}

            {/* Render the form */}
            {renderForm()}

            {/* Back button to close the modal */}
            <BackButton onClick={closeModal}>Change</BackButton>
          </ModalContainer>
        )}
      </HomeContainer>

      <Collage imageUrls={collageImages} />

      <div>
        <BoldTextContainer>
          <BoldText>
            India’s Highest Rated Apple Repairs at your doorstep <br />
            PROFESSIONAL APPLE TECHNICIANS<br />
            Most trusted iPhone, iPad, iWatch & MacBook repair services
          </BoldText>
        </BoldTextContainer>
        <HomeHowItWorks />
        <Carousel images={carouselImages} />
        <HomeWhoWeAre />
        <PageEnding />
      </div>
    </div>
  );
};

export default Home;
