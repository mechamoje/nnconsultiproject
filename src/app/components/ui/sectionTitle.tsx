import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { colors, shadows } from './theme';

type Props = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

const SectionTitle: FunctionComponent<Props> = ({ title, subtitle }) => (
  <Article>
    <Title> {title}</Title>
    <Subtitle> {subtitle} </Subtitle>
  </Article>
);

export default SectionTitle;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-block: 64px;

  color: ${colors.black};
`;

const Title = styled.h3`
  font-family: "DM Serif Display", serif;
  font-size: 32px;
  letter-spacing: 1px;
  text-shadow: ${shadows.textShadow};
  margin: 0;
  padding: 0;
`;

const Subtitle = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 24px;
  margin: 0;
  padding: 0;
`;
