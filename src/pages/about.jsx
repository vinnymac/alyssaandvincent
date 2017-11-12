import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

const About = () => (
  <Layout>
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About</Header>
    <Container type="text">
      <h1>Welcome!</h1>
      <p>
        Alyssa and I are excited to have our family and friends to share
        our wedding day with us on October 7th, 2018. We look forward to seeing
        you all there! If you have any questions,
        feel free to reach out to us.
      </p>
    </Container>
  </Layout>
);

export default About;
