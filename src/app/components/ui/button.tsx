import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { colors, shadows } from './theme';

type Props = {
  text: string;
  url?: string;
  alternative?: boolean;
  children?: ReactNode;
  isUppercase?: boolean;
  onSubmit?: (e: any) => void;
  target?: boolean
};

const Button: FunctionComponent<Props> = ({
  text,
  url,
  alternative,
  isUppercase,
  onSubmit,
  target
}) => (
  <StyledButton isUppercase={isUppercase} onSubmit={onSubmit} alternative={alternative}>
    <a href={url} target={target ? '_blank' : ''}> {text}</a>
  </StyledButton>
);

export default Button;

const StyledButton = styled.button<{
  isUppercase?: boolean;
  alternative?: boolean;
}>`
  background-color: ${(props) => (props.alternative ? 'transparent' : colors.yellow)};
  border:  ${(props) => (props.alternative ? `3px solid ${colors.gray}` : 'none')};
  font-family: 'DM Sans', sans-serif;
  font-size: 20px;
  font-weight: ${(props) => (props.alternative ? '500' : 'regular')};
  border-radius: 10px;
  cursor: pointer;
  padding-inline: 32px;
  padding-block: 14px;
  box-shadow: ${(props) => (props.alternative ? 'none' : shadows.boxShadow)};
  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'none')};

  &:hover {
    
  background-color: ${(props) => (props.alternative ? colors.white : colors.white)};

    a {
      color: ${colors.black};
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
