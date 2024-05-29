'use client';
import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';
import Slogan from './components/slogan/slogan';
import Diferenciais from './components/differences/differences';
import Services from './components/services/services';
import Parceiros from './components/partners/partners';
import Entrega from './components/delivery/delivery';
import { Contact } from './components/contact/formcontact';
import Footer from './components/footer/footer';
import Head from 'next/head';
import { colors } from './components/ui/theme';
import { Provider } from 'react-redux';
import store from './../redux/store';

const MyComponent = () => {
  return (
    <Provider store={store}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&display=swap');
      </style>

      <Head>
        <title>NN Consulti</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </ Head>

      <Body>
        <main>
          <Slogan></Slogan>
          <Section>
            <Services />
            <Diferenciais></Diferenciais>
            <Parceiros></Parceiros>
            <Entrega></Entrega>
            <Contact />
            <Footer></Footer>
          </Section>
        </main>
      </Body>
    </Provider>
  );
};

export default MyComponent;

const Body = styled.body`
  margin: 0;
  padding: 0;
  background-color: ${colors.lightYellow};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4em;
`;
