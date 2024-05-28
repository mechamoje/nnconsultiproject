import styled from 'styled-components';
import SectionTitle from '../ui/sectionTitle';
import { colors } from '../ui/theme';
import { BiSolidTruck } from 'react-icons/bi';
import { FaClipboardList } from 'react-icons/fa';
import { TbView360 } from 'react-icons/tb';
import Button from '../ui/button';

export default function Diferenciais() {
  return (
    <Section id='differences'>
      <SectionTitle
        title='Diferenciais'
        subtitle='Por que escolher a GJTech?'
      ></SectionTitle>
      <DifferencesList>
        <DifferencesItem>
          <BiSolidTruck color={colors.gray} size={100}></BiSolidTruck>
          <h4> Despacho imediato </h4>
          <p> Despachamos seu pedido em até 48hrs após a confirmação </p>
        </DifferencesItem>

        <DifferencesItem>
          <FaClipboardList color={colors.gray} size={100}>
            {' '}
          </FaClipboardList>
          <h4> Condições exclusivas </h4>
          <p>
            {' '}
            Condições exclusivas para empresas: faturamos o seu boleto em até
            180 dias{' '}
          </p>
        </DifferencesItem>

        <DifferencesItem>
          <TbView360 color={colors.gray} size={100}>
            {' '}
          </TbView360>
          <h4> Soluções </h4>
          <p>
            {' '}
            Mais completas soluções para os mais DifferencesItemersos segmentos
          </p>
        </DifferencesItem>
      </DifferencesList>

      <Button
        text='Conheça nossas condições'
        url='https://api.whatsapp.com/send?phone=5581991620892&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre:%20'
      ></Button>
    </Section>
  );
}

const Section = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const DifferencesList = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 66px;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    flex-direction: column;
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
  width: 20em;

  h4 {
    // font:  .textTitle};
    margin-top: 16px;
    margin-bottom: 8px;
  }

  p {
    // font:  .text};
    margin: 0;
    padding: 0;
  }
`;
