"use client"
import React, { useEffect } from 'react';

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
import { Provider } from "react-redux";
import store from "./../redux/store";

const MyComponent = () => {

  return (
    <Provider store={store}>
      <Body>
        <main>
          <Slogan></Slogan>
          <Section>
            <Services></Services>
            <Diferenciais></Diferenciais>
            <Parceiros></Parceiros>
            <Entrega></Entrega>
            <Contact></Contact>
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
          `

const Section = styled.section`
          display: flex;
          flex-direction: column;
          gap: 5em;
          `
