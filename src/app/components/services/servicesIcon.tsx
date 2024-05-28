import styled from 'styled-components';
import { colors } from '../ui/theme';
import { ReactElement, JSXElementConstructor, FC } from 'react';
import { useDispatch } from 'react-redux';
import { serviceTitle } from '@/redux/services/actions';

type ServicesIconProps = {
  icon: any;
  title: string;
};

const ServicesIcon: FC<ServicesIconProps> = ({ icon, title }) => {
  const dispatch = useDispatch();

  const handleServiceClick = (title: string) => {
    dispatch(serviceTitle(title));
  };

  return (
    <IconLink href='#form'>
      <IconContainer id='services' onClick={() => handleServiceClick(title)}>
        {icon}
        <span>{title}</span>
      </IconContainer>
    </IconLink>
  );
};

export default ServicesIcon;

const IconLink = styled.a`
  text-decoration: none;
  color: ${colors.black};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-block: 10px;

  svg {
    width: 74px;
    height: 38px;
    background-color: ${colors.white};
    border-radius: 50%;
    padding: 10px;

    &:hover {
      color: ${colors.yellow};
    }
  }

  span {
    margin-top: 24px;
    font-size: 20px;
  }
`;
