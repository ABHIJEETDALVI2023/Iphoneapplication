// PageEnding.js
import React from 'react';
import styled from 'styled-components';

const PageEndingContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 30px;
  text-align: center;
`;

const WebsiteName = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialMediaLink = styled.a`
  color: #fff;
  margin: 0 10px;
  font-size: 18px;
  text-decoration: none;
`;

const PageEnding = () => {
  return (
    <PageEndingContainer>
      <WebsiteName>I FIX YOUR PHONE</WebsiteName>
      <ContactInfo>
        <p>Phone:+917218683525</p>
        <p>Email: abhijeetdalvi3525@email.com</p>
      </ContactInfo>
      <SocialMediaLinks>
        <SocialMediaLink href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          Instagram
        </SocialMediaLink>
        <SocialMediaLink href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          Facebook
        </SocialMediaLink>
        <SocialMediaLink href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </SocialMediaLink>
        <SocialMediaLink href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          Twitter
        </SocialMediaLink>
      </SocialMediaLinks>
    </PageEndingContainer>
  );
};

export default PageEnding;
