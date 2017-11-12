import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

const Contact = () => (
  <Layout>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>Contact</Header>
    <Container type="text">
      <h1>Need to reach out?</h1>
      <p></p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdVdcRie6jIKt1DPO_KeetkgPOeSGhsMODs_6Wcv-uK4cxgPA/viewform?embedded=true"
        width="100%"
        height="900"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading...
      </iframe>
    </Container>
  </Layout>
);

export default Contact;
