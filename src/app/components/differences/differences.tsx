import styled from 'styled-components';
import SectionTitle from '../ui/sectionTitle';
import { colors, links, shadows } from '../ui/theme';
import { BiSolidTruck } from 'react-icons/bi';
import { FaClipboardList } from 'react-icons/fa';
import { TbView360 } from 'react-icons/tb';
import Button from '../ui/button';
import Image from 'next/image';

export default function Diferenciais() {
  return (
    <Section id='differences'>
      <SectionTitle
        title='Diferenciais'
        subtitle='Por que escolher a NN consulti?'
      ></SectionTitle>
      <DifferencesList>
        <DifferencesItem>
          <Image
            src='/D1.svg'
            width={300}
            height={200}
            alt='Picture of the author'
          />
          <h4> Envio imediato </h4>
          <p> Enviamos seu pedido em até 48hrs após a confirmação </p>
        </DifferencesItem>

        <DifferencesItem>
          <Image
            src='/d2.svg'
            width={300}
            height={200}
            alt='Picture of the author'
          />
          <h4> Condições exclusivas </h4>
          <p>
            Condições exclusivas para empresas: faturamos o seu boleto em até
            180 dias
          </p>
        </DifferencesItem>

        <DifferencesItem>
          <Image
            src='/d3.svg'
            width={300}
            height={200}
            alt='Picture of the author'
          />
          <h4> Soluções </h4>
          <p>
            Mais completas soluções para os mais diferentes segmentos
          </p>
        </DifferencesItem>
      </DifferencesList>

      <Button
        text='Conheça nossas condições'
        url={links.whatsappLink}
        target
        alternative
      ></Button>
    </Section>
  );
}

const Section = styled.section`
  margin: auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const DifferencesList = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin-bottom: 64px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 34px;
  }
`;

const DifferencesItem = styled.article`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  text-align: center;
  color: ${colors.black};
  width: 100%;
  box-sizing: border-box;
  font-family: 'DM Sans', sans-serif;

  h4 {
    margin-top: 16px;
    margin-bottom: 8px;

    font-size: 24px;
  }

  p {
    font-size: 18px;
    margin: 0;
    width: 80%;
    padding: 0;
  }
`;
