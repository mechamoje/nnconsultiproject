import styled from 'styled-components';
import SectionTitle from '../ui/sectionTitle';
import { colors } from '../ui/theme';
import { FaServer, FaComputer, FaRegUser, FaCloud } from 'react-icons/fa6';
import { VscSymbolStructure } from 'react-icons/vsc';
import { PiTreeStructureDuotone } from 'react-icons/pi';
import { TbSettingsAutomation, TbLicense } from 'react-icons/tb';
import { MdAppSettingsAlt } from 'react-icons/md';
import { GrTechnology } from 'react-icons/gr';
import { IoGitNetwork, IoCartOutline } from 'react-icons/io5';
import { IoIosSwitch } from 'react-icons/io';
import { BsFillDatabaseFill } from 'react-icons/bs';
import {
  MdOutlineHealthAndSafety,
  MdOutlineDateRange,
  MdOutlineSolarPower,
} from 'react-icons/md';
import { PiPuzzlePiece, PiComputerTowerBold } from 'react-icons/pi';
import ServicesIcon from './servicesIcon';

const servicesList = [
  { icon: <VscSymbolStructure />, title: 'Infraestrutura' },
  { icon: <PiTreeStructureDuotone />, title: 'Conectividade' },
  { icon: <MdAppSettingsAlt />, title: 'Softwares' },
  { icon: <FaComputer />, title: 'Computadores' },
  { icon: <GrTechnology />, title: 'TI' },
  { icon: <IoGitNetwork />, title: 'Redes' },
  { icon: <IoIosSwitch />, title: 'Switches' },
  { icon: <FaServer />, title: 'Servidores' },
  { icon: <TbSettingsAutomation />, title: 'Automação' },
  { icon: <BsFillDatabaseFill />, title: 'Datacenter' },
  { icon: <MdOutlineHealthAndSafety />, title: 'Segurança eletrônica' },
  { icon: <MdOutlineDateRange />, title: 'Datadores' },
  { icon: <FaRegUser />, title: 'Client' },
  { icon: <PiPuzzlePiece />, title: 'Spare parts' },
  { icon: <MdOutlineSolarPower />, title: 'Solar' },
  { icon: <TbLicense />, title: 'Licenças' },
  { icon: <IoCartOutline />, title: 'PDV' },
  { icon: <FaCloud />, title: 'Cloud' },
  { icon: <PiPuzzlePiece />, title: 'Peças' },
  { icon: <PiComputerTowerBold />, title: 'Nobreaks' },
];

export default function Services() {
  return (
    <Section id='services'>
      <SectionTitle
        title='Nossos serviços'
        subtitle='O que oferecemos aos nossos clientes'
      />
      <ServicesList>
        {servicesList.map((service) => (
          <ServicesIcon icon={service.icon} title={service.title} />
        ))}
      </ServicesList>
    </Section>
  );
}

const Section = styled.section``;

const ServicesList = styled.div`
  display: grid;
  margin-inline: 10%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 28px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
