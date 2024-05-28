import styled from 'styled-components';
import Image from 'next/image';

import { RiWhatsappFill } from 'react-icons/ri';
import { colors } from '../ui/theme';

export default function Services() {
  return (
    <Footer>
      <div>
        <h3> NN Consulti </h3>
        <a href='https://api.whatsapp.com/send?phone=5581991620892&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre:%20'>
          {' '}
          <RiWhatsappFill color={'white'} size={50} />
        </a>
        <a href='https://api.whatsapp.com/send?phone=5581991620892&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre:%20'>
          {' '}
          <RiWhatsappFill color={'white'} size={50} />
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
  display: flex;
  padding-inline: 10%;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    gap: 2em;
    padding-bottom: 2%;
  }
`;

