import React from 'react';
import styled from 'react-emotion';
import config from '../../config/SiteConfig';

const Wrapper = styled.footer`
  margin: 5rem 0;
  padding: 1rem ${props => props.theme.spacer.horizontal};
  text-align: center;
  a {
    text-decoration: none;
    color: ${props => props.theme.brand.primary};
  }
`;

const Footer = () => (
  <Wrapper>
    {config.copyright} <a href="https://vincenttaverna.com">Vincent Taverna</a>
  </Wrapper>
);

export default Footer;
