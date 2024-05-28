import styled from 'styled-components';
import Image from 'next/image';

import { RiWhatsappFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { colors, links } from '../ui/theme';

export default function Services() {
  return (
    <Footer>
      <div>
        <h3> NN Consulti </h3>
        <a href={links.whatsappLink}>
          {' '}
          <RiWhatsappFill color={'white'} size={50} />
        </a>
        <a href={links.linkedinLink} target='blank'>
          <RiLinkedinBoxFill color={'white'} size={45} />
        </a>
      </div>

      <div>
        <Image
          src='/logonn.png'
          width={200}
          height={200}
          alt='Picture of the author'
        />
      </div>
    </Footer>
  );
}

const Footer = styled.footer`
  background-image: url('../../../../static/bg-footer.png');
  min-height: 15em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: flex-end;
  align-items: center;
  font-family: "DM Serif Display", serif;
  letter-spacing: 1px;

  div:first-child {
    justify-self: center;
    grid-column: 2;

    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }

  div:last-child {
    justify-self: center;
  }

  a {
    text-decoration: none;
  }

  h3 {
    font-size: 44px;
    color: ${colors.white};
    margin-block: 8px;
  }

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    gap: 2em;
    padding-bottom: 2%;
  }
`;

