import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { colors, shadows } from './theme';

type Props = {
  text: string;
  url?: string;
  type?: string;
  children?: ReactNode;
  isUppercase?: boolean;
  onSubmit?: (e: any) => void;
};

const Button: FunctionComponent<Props> = ({
  text,
  url,
  type,
  isUppercase,
  onSubmit,
}) => (
  <StyledButton isUppercase={isUppercase} onSubmit={onSubmit}>
    <a href={url}> {text}</a>
  </StyledButton>
);

export default Button;

const StyledButton = styled.button<{
  isUppercase?: boolean;
}>`
  background-color: ${colors.yellow};
  font-family: 'DM Sans', sans-serif;
  font-size: 20px;
  font-weight: regular;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding-inline: 32px;
  padding-block: 14px;
  box-shadow: ${shadows.boxShadow};
  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'none')};

  &:hover {
    background-color: ${colors.white};

    a {
      color: ${colors.black};
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
